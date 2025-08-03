// Chart configuration - centralized for easy maintenance
const config = {
  margin: { top: 5, right: 80, bottom: 60, left: 180 },
  barHeight: 22,
  barPadding: 5
};

let currentSort = 'desc';
let data = [];
let chart, xScale, yScale, svg;

// Initialize chart dimensions and scales
function initializeChart() {
  const totalHeight = (config.barHeight + config.barPadding) * data.length;
  const width = 800;
  const height = totalHeight + config.margin.top + config.margin.bottom;

  // Set up SVG with proper dimensions
  svg = d3.select('#chart')
      .attr('width', width + config.margin.left + config.margin.right)
      .attr('height', height);

  chart = svg.append('g')
      .attr('transform', `translate(${config.margin.left},${config.margin.top})`);

  // Create scales
  xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.volunteers)])
      .range([0, width]);

  yScale = d3.scaleBand()
      .domain(data.map(d => d.region))
      .range([0, totalHeight])
      .padding(0.1);
}

// Create grid lines for better readability
function createGrid() {
  const grid = chart.append('g')
      .attr('class', 'grid');

  grid.selectAll('line')
      .data(xScale.ticks(8))
      .enter()
      .append('line')
      .attr('x1', d => xScale(d))
      .attr('x2', d => xScale(d))
      .attr('y1', 0)
      .attr('y2', yScale.range()[1]);
}

// Create and update bars with smooth transitions
function updateBars() {
  const bars = chart.selectAll('.bar')
      .data(data, d => d.region);

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
      .attr('width', 0)
      .attr('height', yScale.bandwidth());

  // Update all bars (new + existing)
  bars.merge(barsEnter)
      .transition()
      .duration(750)
      .attr('y', d => yScale(d.region))
      .attr('width', d => xScale(d.volunteers))
      .attr('height', yScale.bandwidth());

  // Add hover effects and tooltips
  chart.selectAll('.bar')
      .on('mouseover', function(event, d) {
        const tooltip = d3.select('#tooltip');
        tooltip.style('opacity', 1)
            .html(`<strong>${d.region}</strong><br>${d.volunteers.toLocaleString()} volunteers`)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 10) + 'px');
      })
      .on('mouseout', function() {
        d3.select('#tooltip').style('opacity', 0);
      });
}

// Create and update labels
function updateLabels() {
  // Region labels
  const regionLabels = chart.selectAll('.bar-label')
      .data(data, d => d.region);

  regionLabels.exit().remove();

  const regionLabelsEnter = regionLabels.enter()
      .append('text')
      .attr('class', 'bar-label')
      .attr('x', -10)
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle');

  regionLabels.merge(regionLabelsEnter)
      .transition()
      .duration(750)
      .attr('y', d => yScale(d.region) + yScale.bandwidth() / 2)
      .text(d => d.region);

  // Value labels on bars
  const valueLabels = chart.selectAll('.bar-value')
      .data(data, d => d.region);

  valueLabels.exit().remove();

  const valueLabelsEnter = valueLabels.enter()
      .append('text')
      .attr('class', 'bar-value')
      .attr('text-anchor', 'start')
      .attr('dominant-baseline', 'middle');

  valueLabels.merge(valueLabelsEnter)
      .transition()
      .duration(750)
      .attr('x', d => xScale(d.volunteers) + 5)
      .attr('y', d => yScale(d.region) + yScale.bandwidth() / 2)
      .text(d => d.volunteers.toLocaleString());
}

// Create axes with proper formatting
function createAxes() {
  // X-axis
  chart.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(0, ${yScale.range()[1] + 10})`)
      .call(d3.axisBottom(xScale).tickFormat(d3.format(',d')));

  // X-axis label
  chart.append('text')
      .attr('class', 'axis-label')
      .attr('x', xScale.range()[1] / 2)
      .attr('y', yScale.range()[1] + 45)
      .attr('text-anchor', 'middle')
      .text('Number of Volunteers');
}

// Sort data based on current sorting method
function sortData(sortType) {
  if (sortType === 'desc') {
    data.sort((a, b) => b.volunteers - a.volunteers);
  } else {
    data.sort((a, b) => a.region.localeCompare(b.region));
  }

  yScale.domain(data.map(d => d.region));
}

// Main render function that orchestrates the chart update
function render() {
  sortData(currentSort);
  updateBars();
  updateLabels();
}

// Process CSV data and handle duplicates
function processData(rawData) {
  const processed = {};

  rawData.forEach(d => {
    const region = d.Region.trim();
    const volunteers = +d['volunteers by regions'];

    // Handle duplicate regions by summing values
    if (processed[region]) {
      processed[region] += volunteers;
    } else {
      processed[region] = volunteers;
    }
  });

  return Object.entries(processed).map(([region, volunteers]) => ({
    region,
    volunteers
  }));
}

// Load data and initialize visualization
d3.csv('files/data_volunteers_by_regions.csv').then(rawData => {
  data = processData(rawData);

  initializeChart();
  createGrid();
  createAxes();
  render();

  // Add event listeners for sorting buttons
  d3.select('#sort-desc').on('click', function() {
    if (currentSort !== 'desc') {
      currentSort = 'desc';
      d3.selectAll('.sort-btn').classed('active', false);
      d3.select(this).classed('active', true);
      render();
    }
  });

  d3.select('#sort-alpha').on('click', function() {
    if (currentSort !== 'alpha') {
      currentSort = 'alpha';
      d3.selectAll('.sort-btn').classed('active', false);
      d3.select(this).classed('active', true);
      render();
    }
  });

}).catch(error => {
  console.error('Error loading data:', error);
  d3.select('.container').append('div')
      .style('text-align', 'center')
      .style('color', '#e74c3c')
      .style('font-weight', 'bold')
      .style('margin-top', '50px')
      .text('Error loading data. Please check if the CSV file exists at the correct path.');
});
