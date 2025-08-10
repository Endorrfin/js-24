// CHANGED: Enhanced chart configuration with region colors
const config = {
  margin: { top: 10, right: 45, bottom: 50, left: 200 },
  width: 800,
  height: 600,
  batchSize: 13,
  // CHANGED: Added region color mapping
  regionColors: {
    'Africa': '#e74c3c',
    'America': '#3498db',
    'Asia': '#f39c12',
    // 'Europe': '#9b59b6',
    // 'Europe': '#6FE6FC',
    'Europe': '#8F87F1',
    'Oceania': '#1abc9c',
    'Australia and New Zealand': '#ED3EF7'
  }
};

// CHANGED: Enhanced global variables
let allData = [];
let filteredData = []; // CHANGED: Added filtered data storage
let currentBatch = 0;
let selectedRegion = 'all'; // CHANGED: Added region tracking
let chart, xScale, yScale, tooltip;

// Initialize the application
function init() {
  setupTooltip();
  loadData();
}

// Setup tooltip element
function setupTooltip() {
  tooltip = d3.select('#tooltip');
}

// Load and parse CSV data
async function loadData() {
  try {
    const data = await d3.csv('files/data.csv');

    // Parse and clean the data
    allData = data.map(d => ({
      sequence: +d['rank'],
      region: d.region,
      country: d.country,
      flag: d.flag,
      crime: parseFloat(d['crime index'].replace(/,/g, ''))
    }));

    d3.select('#loadingMessage').style('display', 'none');
    setupRegionSelector(); // CHANGED: Added region selector setup
    setupBatchSelector();
    setupLegend(); // CHANGED: Added legend setup
    initializeChart();
    updateData(); // CHANGED: Renamed from updateChart

  } catch (error) {
    console.error('Error loading data:', error);
    showError('Failed to load data. Please check if the CSV file exists at "files/data.csv"');
  }
}

// Show error message
function showError(message) {
  d3.select('#loadingMessage').style('display', 'none');
  d3.select('#errorMessage')
      .style('display', 'block')
      .text(message);
}

// CHANGED: New function to setup region selector
function setupRegionSelector() {
  const regionSelect = d3.select('#regionSelect');

  // Get unique regions from data
  const regions = [...new Set(allData.map(d => d.region))].sort();

  // Add region options
  regions.forEach(region => {
    regionSelect.append('option')
        .attr('value', region)
        .text(region);
  });

  // Add event listener for region changes
  regionSelect.on('change', function() {
    selectedRegion = this.value;
    currentBatch = 0; // Reset to first batch when region changes
    updateData();
  });
}

// CHANGED: Enhanced batch selector setup
function setupBatchSelector() {
  updateBatchSelector();
}

// CHANGED: New function to update batch selector based on filtered data
function updateBatchSelector() {
  const batchSelect = d3.select('#batchSelect');

  // Clear existing options
  batchSelect.selectAll('option').remove();

  const totalBatches = Math.ceil(filteredData.length / config.batchSize);

  // Create batch options based on filtered data
  for (let i = 0; i < totalBatches; i++) {
    const startIndex = i * config.batchSize + 1;
    const endIndex = Math.min((i + 1) * config.batchSize, filteredData.length);

    batchSelect.append('option')
        .attr('value', i)
        .text(`Countries ${startIndex}-${endIndex}`);
  }

  // Add event listener for batch changes
  batchSelect.on('change', function() {
    currentBatch = +this.value;
    updateChart();
  });
}

// CHANGED: New function to setup legend
function setupLegend() {
  const legend = d3.select('#legend');
  const regions = Object.keys(config.regionColors);

  regions.forEach(region => {
    const legendItem = legend.append('div')
        .attr('class', 'legend-item');

    legendItem.append('div')
        .attr('class', 'legend-color')
        .style('background-color', config.regionColors[region]);

    legendItem.append('span')
        .text(region);
  });

  legend.style('display', 'flex');
}

// CHANGED: New function to handle data filtering and updates
function updateData() {
  // Filter data by region
  if (selectedRegion === 'all') {
    filteredData = [...allData];
  } else {
    filteredData = allData.filter(d => d.region === selectedRegion);
  }

  // Reset batch to 0 and update batch selector
  currentBatch = 0;
  updateBatchSelector();
  updateBatchInfo();
  updateChart();
}

// CHANGED: Enhanced batch information display
function updateBatchInfo() {
  const startIndex = currentBatch * config.batchSize + 1;
  const endIndex = Math.min((currentBatch + 1) * config.batchSize, filteredData.length);
  const regionText = selectedRegion === 'all' ? 'All regions' : selectedRegion;

  d3.select('#batchInfo').html(`
    <strong>${regionText}:</strong> Showing ranks ${startIndex}-${endIndex} of ${filteredData.length} countries
  `);
}

// Initialize the chart structure
function initializeChart() {
  const svg = d3.select('#chart')
      .attr('width', config.width + config.margin.left + config.margin.right)
      .attr('height', config.height + config.margin.top + config.margin.bottom);

  chart = svg.append('g')
      .attr('transform', `translate(${config.margin.left},${config.margin.top})`);

  // Initialize scales
  xScale = d3.scaleLinear()
      .range([0, config.width]);

  yScale = d3.scaleBand()
      .range([0, config.height])
      .padding(0.15); // CHANGED: Increased padding for better readability

  // Add axis groups
  chart.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${config.height})`);

  chart.append('g')
      .attr('class', 'y-axis');

  // Add grid lines container
  chart.append('g')
      .attr('class', 'grid-lines');

  // CHANGED: Enhanced axis titles
  chart.append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - config.margin.left + 15)
      .attr('x', 0 - (config.height / 2))
      .style('text-anchor', 'middle')
      .text('List of countries');

  chart.append('text')
      .attr('class', 'axis-title')
      .attr('transform', `translate(${config.width / 2}, ${config.height + config.margin.bottom - 5})`)
      .style('text-anchor', 'middle')
      .text('Crime Index (Source: Numbeo 2025)');
}

// CHANGED: Enhanced chart update with region-based coloring
function updateChart() {
  // Get current batch data from filtered data
  const startIndex = currentBatch * config.batchSize;
  const endIndex = startIndex + config.batchSize;
  const batchData = filteredData.slice(startIndex, endIndex);

  // Update scales
  xScale.domain([0, d3.max(batchData, d => d.crime)]);
  yScale.domain(batchData.map(d => d.country));

  // Update axes
  const xAxisTicks = xScale.ticks(8); // CHANGED: Reduced tick count for cleaner look

  chart.select('.x-axis')
      .transition()
      .duration(750)
      .call(d3.axisBottom(xScale)
          .tickFormat(d => d3.format(',')(d))
          .ticks(8))
      .selectAll('text')
      .attr('class', 'axis-text');

  chart.select('.y-axis')
      .transition()
      .duration(750)
      .call(d3.axisLeft(yScale).tickSize(5))
      .selectAll('text')
      .remove();

  // Update grid lines
  const gridLines = chart.select('.grid-lines')
      .selectAll('.grid-line')
      .data(xAxisTicks);

  gridLines.exit().remove();

  gridLines.enter()
      .append('line')
      .attr('class', 'grid-line')
      .merge(gridLines)
      .transition()
      .duration(750)
      .attr('x1', d => xScale(d))
      .attr('x2', d => xScale(d))
      .attr('y1', 0)
      .attr('y2', config.height);

  // CHANGED: Enhanced bars with region-based coloring
  const bars = chart.selectAll('.bar')
      .data(batchData, d => d.country);

  bars.exit()
      .transition()
      .duration(500)
      .attr('width', 0)
      .remove();

  const barsEnter = bars.enter()
      .append('rect')
      .attr('class', d => `bar ${d.region.replace(/\s+/g, '.')}`) // CHANGED: Added region class
      .attr('x', 0)
      .attr('y', d => yScale(d.country))
      .attr('height', yScale.bandwidth())
      .attr('width', 0)
      .style('fill', d => config.regionColors[d.region]); // CHANGED: Added direct style for fallback

  bars.merge(barsEnter)
      .on('mouseover', handleMouseOver)
      .on('mousemove', handleMouseMove)
      .on('mouseout', handleMouseOut)
      .style('fill', d => config.regionColors[d.region]) // CHANGED: Ensure color is applied
      .transition()
      .duration(1000) // CHANGED: Smoother animation
      .attr('y', d => yScale(d.country))
      .attr('height', yScale.bandwidth())
      .attr('width', d => xScale(d.crime));

  // CHANGED: Enhanced country labels
  const labels = chart.selectAll('.country-label')
      .data(batchData, d => d.country);

  labels.exit().remove();

  const labelsEnter = labels.enter()
      .append('text')
      .attr('class', 'country-label')
      .attr('x', -15) // CHANGED: Better positioning
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle');

  labels.merge(labelsEnter)
      .transition()
      .duration(750)
      .attr('y', d => yScale(d.country) + yScale.bandwidth() / 2)
      .text(d => `${d.country} | ${d.flag}`);

  // CHANGED: Enhanced value labels
  const valueLabels = chart.selectAll('.value-label')
      .data(batchData, d => d.country);

  valueLabels.exit().remove();

  const valueLabelsEnter = valueLabels.enter()
      .append('text')
      .attr('class', 'value-label')
      .attr('y', d => yScale(d.country) + yScale.bandwidth() / 2)
      .attr('dominant-baseline', 'middle')
      .attr('x', 0);

  valueLabels.merge(valueLabelsEnter)
      .transition()
      .duration(750)
      .attr('y', d => yScale(d.country) + yScale.bandwidth() / 2)
      .attr('x', d => xScale(d.crime) + 10) // CHANGED: Better spacing
      .text(d => d3.format(',.1f')(d.crime)); // CHANGED: Added decimal for precision

  updateBatchInfo();
}

// CHANGED: Enhanced tooltip with better formatting
function handleMouseOver(event, d) {
  tooltip.classed('show', true)
      .html(`
        <div style="font-weight: 700; margin-bottom: 2px; font-size: 16px;">
            ${d.flag} ${d.country}
        </div>
        <div style="margin-bottom: 2px;">
            <strong>Crime Index:</strong> ${d3.format(',.1f')(d.crime)}
        </div>
        <div style="margin-bottom: 2px;">
            <strong>Region:</strong> ${d.region}
        </div>
        <div style="color: #bdc3c7; font-size: 13px;">
            <strong>Global Rank:</strong> #${d.sequence} of 100
        </div>
      `);
}

function handleMouseMove(event) {
  const [mouseX, mouseY] = d3.pointer(event, document.body);
  tooltip
      .style('left', (mouseX + 15) + 'px')
      .style('top', (mouseY - 10) + 'px');
}

function handleMouseOut() {
  tooltip.classed('show', false);
}

// Start the application
init();
