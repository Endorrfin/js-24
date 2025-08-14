// Chart configuration
const config = {
  margin: { top: 20, right: 80, bottom: 40, left: 200 }, // CHANGED: Increased left margin for longer labels
  width: 800,
  height: 600,
  batchSize: 20
};

// Global variables
let allData = [];
let currentBatch = 0;
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

    // CHANGED: Parse and clean the data - create unique property identifiers
    allData = data.map((d, index) => {
      const price = parseFloat(d['Price per 1 m² (USD)'].replace(/,/g, ''));
      // CHANGED: Create unique property identifier instead of grouping by country
      const propertyId = `${d.country}_${d['#']}`; // Unique identifier for each property
      const cityName = d.city || 'City center'; // CHANGED: Handle missing city data

      return {
        sequence: +d['#'],
        region: d.region,
        flag: d.flag,
        country: d.country,
        city: cityName, // Added city field
        price: price,
        propertyId: propertyId, // Added unique property identifier
        displayName: `${d.flag} ${d.country} / ${cityName}` // CHANGED: Combined display name
      };
    })
        // CHANGED: Sort by price in descending order to ensure proper ranking
        .sort((a, b) => b.price - a.price);

    d3.select('#loadingMessage').style('display', 'none');
    setupBatchSelector();
    initializeChart();
    updateChart();

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

// Setup batch selector dropdown
function setupBatchSelector() {
  const batchSelect = d3.select('#batchSelect');
  const totalBatches = Math.ceil(allData.length / config.batchSize);

  // Create batch options
  for (let i = 0; i < totalBatches; i++) {
    const startIndex = i * config.batchSize + 1;
    const endIndex = Math.min((i + 1) * config.batchSize, allData.length);

    batchSelect.append('option')
        .attr('value', i)
        .text(`Properties ${startIndex}-${endIndex}`); // CHANGED: Updated label from "Countries" to "Properties"
  }

  // Add event listener for batch changes
  batchSelect.on('change', function() {
    currentBatch = +this.value;
    updateChart();
  });

  updateBatchInfo();
}

// Update batch information display
function updateBatchInfo() {
  const startIndex = currentBatch * config.batchSize + 1;
  const endIndex = Math.min((currentBatch + 1) * config.batchSize, allData.length);
  d3.select('#batchInfo').text(`Showing ranks ${startIndex}-${endIndex} of ${allData.length}`);
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
      .padding(0.1);

  // Add axis groups
  chart.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${config.height})`);

  chart.append('g')
      .attr('class', 'y-axis');

  // Add grid lines container
  chart.append('g')
      .attr('class', 'grid-lines');

  // Add axis titles
  chart.append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - config.margin.left + 9)
      .attr('x', 0 - (config.height / 2))
      .style('text-anchor', 'middle')
      .text('Flag / country / city'); // Updated y-axis title as requested

  chart.append('text')
      .attr('class', 'axis-title')
      .attr('transform', `translate(${config.width / 2}, ${config.height + config.margin.bottom - 1})`)
      .style('text-anchor', 'middle')
      .text('≅ 💲 per 1 m²'); // CAdded currency unit for clarity
}

// Update chart with current batch data
function updateChart() {
  // Get current batch data
  const startIndex = currentBatch * config.batchSize;
  const endIndex = startIndex + config.batchSize;
  const batchData = allData.slice(startIndex, endIndex);

  // Update scales
  xScale.domain([0, d3.max(batchData, d => d.price)]);
  // CHANGED: Use propertyId instead of country for unique identification
  yScale.domain(batchData.map(d => d.propertyId));

  // Update axes
  const xAxisTicks = xScale.ticks(10);

  chart.select('.x-axis')
      .transition()
      .duration(850)
      .call(d3.axisBottom(xScale)
          .tickFormat(d => d3.format(',')(d))
          .ticks(10))
      .selectAll('text')
      .attr('class', 'axis-text');

  chart.select('.y-axis')
      .transition()
      .duration(850)
      .call(d3.axisLeft(yScale).tickSize(0))
      .selectAll('text')
      .remove(); // Remove default y-axis labels, we'll add custom ones

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

  // Use propertyId for unique data binding instead of country
  const bars = chart.selectAll('.bar')
      .data(batchData, d => d.propertyId);

  // Remove old bars
  bars.exit()
      .transition()
      .duration(500)
      .attr('width', 0)
      .remove();

  // Add new bars
  const barsEnter = bars.enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', d => yScale(d.propertyId)) // CHANGED: Use propertyId
      .attr('height', yScale.bandwidth())
      .attr('width', 0);

  // Update all bars
  bars.merge(barsEnter)
      .on('mouseover', handleMouseOver)
      .on('mousemove', handleMouseMove)
      .on('mouseout', handleMouseOut)
      .transition()
      .duration(750)
      .attr('y', d => yScale(d.propertyId)) // CHANGED: Use propertyId
      .attr('height', yScale.bandwidth())
      .attr('width', d => xScale(d.price));

  // CHANGED: Update property labels (flag + country + city)
  const labels = chart.selectAll('.property-label') // CHANGED: Renamed class from country-label
      .data(batchData, d => d.propertyId);

  labels.exit().remove();

  const labelsEnter = labels.enter()
      .append('text')
      .attr('class', 'property-label') // CHANGED: Updated class name
      .attr('x', -10)
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle');

  labels.merge(labelsEnter)
      .transition()
      .duration(750)
      .attr('y', d => yScale(d.propertyId) + yScale.bandwidth() / 2) // CHANGED: Use propertyId
      .text(d => d.displayName); // CHANGED: Use pre-formatted display name

  // Update value labels at the end of bars
  const valueLabels = chart.selectAll('.value-label')
      .data(batchData, d => d.propertyId); // CHANGED: Use propertyId

  valueLabels.exit().remove();

  const valueLabelsEnter = valueLabels.enter()
      .append('text')
      .attr('class', 'value-label')
      .attr('y', d => yScale(d.propertyId) + yScale.bandwidth() / 2) // CHANGED: Use propertyId
      .attr('dominant-baseline', 'middle')
      .attr('x', 0);

  valueLabels.merge(valueLabelsEnter)
      .transition()
      .duration(750)
      .attr('y', d => yScale(d.propertyId) + yScale.bandwidth() / 2) // CHANGED: Use propertyId
      .attr('x', d => xScale(d.price) + 5)
      .text(d => d3.format(',')(d.price)); // CHANGED: Removed extra text

  updateBatchInfo();
}

// Mouse event handlers for tooltip
function handleMouseOver(event, d) {
  // CHANGED: Updated tooltip content to show individual property information
  tooltip.classed('show', true)
      .html(`
                    <div style="font-weight: 600; margin-bottom: 8px;">
                        ${d.flag} ${d.country}, ${d.city}
                    </div>
                    <div style="margin-bottom: 4px;">
                        <strong>Price per m²:</strong> $${d3.format(',')(d.price)}
                    </div>
                    <div style="margin-bottom: 4px;">
                        <strong>Region:</strong> ${d.region}
                    </div>
                    <div style="color: #bdc3c7;">
                        <strong>Global rank:</strong> #${d.sequence}
                    </div>
                `);
}

function handleMouseMove(event) {
  // Position tooltip near cursor
  const [mouseX, mouseY] = d3.pointer(event, document.body);
  tooltip
      .style('left', (mouseX + 15) + 'px')
      .style('top', (mouseY - 10) + 'px');
}

function handleMouseOut() {
  // Hide tooltip
  tooltip.classed('show', false);
}

// Start the application
init();
