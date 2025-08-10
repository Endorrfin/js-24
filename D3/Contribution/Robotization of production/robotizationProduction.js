// Chart configuration
const config = {
  margin: { top: 20, right: 80, bottom: 40, left: 180 },
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

    // Parse and clean the data
    allData = data.map(d => ({
      sequence: +d['#'],
      region: d.Region,
      flag: d.Flags,
      country: d.Country,
      robots: parseFloat(d['Number of robots'].replace(/,/g, '')) // Remove commas and convert to number
    }));

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
        .text(`Countries ${startIndex}-${endIndex}`);
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
      .attr('y', 0 - config.margin.left + 20)
      .attr('x', 0 - (config.height / 2))
      .style('text-anchor', 'middle')
      .text('List of Countries');

  chart.append('text')
      .attr('class', 'axis-title')
      .attr('transform', `translate(${config.width / 2}, ${config.height + config.margin.bottom - 2})`)
      .style('text-anchor', 'middle')
      .text('Number of robots (🤖) per 10,000 workers');
}

// Update chart with current batch data
function updateChart() {
  // Get current batch data
  const startIndex = currentBatch * config.batchSize;
  const endIndex = startIndex + config.batchSize;
  const batchData = allData.slice(startIndex, endIndex);

  // Update scales
  xScale.domain([0, d3.max(batchData, d => d.robots)]);
  yScale.domain(batchData.map(d => d.country));

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

  // Update bars
  const bars = chart.selectAll('.bar')
      .data(batchData, d => d.country);

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
      .attr('y', d => yScale(d.country))
      .attr('height', yScale.bandwidth())
      .attr('width', 0);

  // Update all bars
  bars.merge(barsEnter)
      .on('mouseover', handleMouseOver)
      .on('mousemove', handleMouseMove)
      .on('mouseout', handleMouseOut)
      .transition()
      .duration(750)
      .attr('y', d => yScale(d.country))
      .attr('height', yScale.bandwidth())
      .attr('width', d => xScale(d.robots));

  // Update country labels (flag + country name)
  const labels = chart.selectAll('.country-label')
      .data(batchData, d => d.country);

  labels.exit().remove();

  const labelsEnter = labels.enter()
      .append('text')
      .attr('class', 'country-label')
      .attr('x', -10)
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle');

  labels.merge(labelsEnter)
      .transition()
      .duration(750)
      .attr('y', d => yScale(d.country) + yScale.bandwidth() / 2)
      .text(d => `${d.flag} ${d.country}`);

  // Update value labels at the end of bars
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
      .attr('x', d => xScale(d.robots) + 5)
      .text(d => d3.format(',')(d.robots), "🤖");

  updateBatchInfo();
}

// Mouse event handlers for tooltip
function handleMouseOver(event, d) {
  // Show tooltip
  tooltip.classed('show', true)
      .html(`
                    <div style="font-weight: 600; margin-bottom: 8px;">
                        ${d.flag} ${d.country}
                    </div>
                    <div style="margin-bottom: 4px;">
                        <strong>Number of robots:</strong> ${d3.format(',')(d.robots)}
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
