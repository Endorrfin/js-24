// Configuration and setup
const margin = { top: 30, right: 124, bottom: 60, left: 200 };
const width = 1280 - margin.left - margin.right;
const height = 860 - margin.bottom - margin.top;

// Color scheme for regions - catchy and clearly differentiated
const regionColors = {
  'Africa': '#FF6500',
  // 'America': '#FFD93D',
  'America': '#B4E50D',
  'Asia': '#7B4019',
  'Europe': '#66D2CE',
  'Oceania': '#4E71FF',
  'Australia & New Zealand': '#5C7285'
};

// Global variables
let allData = [];
let filteredData = [];
let currentRegion = 'all';
let currentRangeStart = 1;
let currentRangeEnd = 15;
const rangeSize = 15; // Fixed range size
let xScale, yScale; // Global scale variables for tooltip positioning

// Create SVG and tooltip elements
const svg = d3.select('#chart')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

const tooltip = d3.select('.tooltip');

// Helper function to parse area values (remove commas and convert to number)
function parseArea(areaStr) {
  if (typeof areaStr === 'string') {
    return +areaStr.replace(/,/g, '');
  }
  return +areaStr;
}

// Helper function to format numbers with commas
function formatNumber(num) {
  return num.toLocaleString();
}

// Load and process data
async function loadData() {
  try {
    // Load CSV data from the specified path
    const csvData = await d3.csv('files/data.csv');

    // Process and clean data
    allData = csvData.map((d, i) => ({
      rank: +d['#'],
      region: d.region.trim(),
      flag: d.flag,
      country: d.country.trim(),
      area: parseArea(d['GDP']), // Note: keeping original column name with typo
      worldShare: parseFloat(d['world share'].replace('%', ''))
    })).filter(d => d.area > 0); // Filter out invalid data

    // Sort by area descending to ensure correct ranking
    allData.sort((a, b) => b.area - a.area);

    // Update rank after sorting
    allData.forEach((d, i) => d.rank = i + 1);

    console.log('Data loaded successfully:', allData.length, 'countries');

    // Populate region filter
    populateRegionFilter();

    populateRangeSelector();

    // Create legend
    createLegend();

    // Initial render
    updateVisualization();

  } catch (error) {
    console.error('Error loading data:', error);
    // Create sample data for demonstration if CSV fails to load
    createSampleData();
  }
}

// Create sample data if CSV loading fails
function createSampleData() {
  const sampleData = [
    {rank: 1, region: 'Europe', flag: '🇷🇺', country: 'Russian Federation', area: 17098242, worldShare: 11.00},
    {rank: 2, region: 'America', flag: '🇨🇦', country: 'Canada', area: 9984670, worldShare: 6.11},
    {rank: 3, region: 'Asia', flag: '🇨🇳', country: 'China', area: 9706961, worldShare: 6.30},
    {rank: 4, region: 'America', flag: '🇺🇸', country: 'United States', area: 9372610, worldShare: 6.14},
    {rank: 5, region: 'America', flag: '🇧🇷', country: 'Brazil', area: 8515767, worldShare: 5.61},
    {rank: 6, region: 'Australia & New Zealand', flag: '🇦🇺', country: 'Australia', area: 7692024, worldShare: 5.16},
    {rank: 7, region: 'Asia', flag: '🇮🇳', country: 'India', area: 3287590, worldShare: 2.00},
    {rank: 8, region: 'America', flag: '🇦🇷', country: 'Argentina', area: 2780400, worldShare: 1.84},
    {rank: 9, region: 'Asia', flag: '🇰🇿', country: 'Kazakhstan', area: 2724900, worldShare: 1.81},
    {rank: 10, region: 'Africa', flag: '🇩🇿', country: 'Algeria', area: 2381741, worldShare: 1.60},
    {rank: 11, region: 'Africa', flag: '🇨🇩', country: 'DR Congo', area: 2344858, worldShare: 1.52},
    {rank: 12, region: 'America', flag: '🇬🇱', country: 'Greenland', area: 2166086, worldShare: 0.28},
    {rank: 13, region: 'Asia', flag: '🇸🇦', country: 'Saudi Arabia', area: 2149690, worldShare: 1.40},
    {rank: 14, region: 'America', flag: '🇲🇽', country: 'Mexico', area: 1964375, worldShare: 1.29},
    {rank: 15, region: 'Asia', flag: '🇮🇩', country: 'Indonesia', area: 1904569, worldShare: 1.25}
  ];

  allData = sampleData;
  console.log('Using sample data for demonstration');

  populateRegionFilter();
  populateRangeSelector();
  createLegend();
  updateVisualization();
}

// Populate region filter dropdown
function populateRegionFilter() {
  const regions = [...new Set(allData.map(d => d.region))].sort();
  const regionFilter = d3.select('#regionFilter');

  // Clear existing options except "All Regions"
  regionFilter.selectAll('option:not([value="all"])').remove();

  // Add region options
  regionFilter.selectAll('.region-option')
      .data(regions)
      .enter()
      .append('option')
      .attr('class', 'region-option')
      .attr('value', d => d)
      .text(d => d);
}

// Populate range selector dropdown
function populateRangeSelector() {
  const rangeSelector = d3.select('#rangeSelector');
  rangeSelector.selectAll('option').remove();

  const totalCountries = currentRegion === 'all' ? allData.length :
      allData.filter(d => d.region === currentRegion).length;

  const ranges = [];
  for (let i = 1; i <= totalCountries; i += rangeSize) {
    const end = Math.min(i + rangeSize - 1, totalCountries);
    ranges.push({
      value: `${i}-${end}`,
      text: `Countries ${i}-${end}`,
      start: i,
      end: end
    });
  }

  rangeSelector.selectAll('option')
      .data(ranges)
      .enter()
      .append('option')
      .attr('value', d => d.value)
      .text(d => d.text);
}

// Create legend
function createLegend() {
  const regions = [...new Set(allData.map(d => d.region))].sort();
  const legendItems = d3.select('#legendItems');

  legendItems.selectAll('.legend-item').remove();

  const items = legendItems.selectAll('.legend-item')
      .data(regions)
      .enter()
      .append('div')
      .attr('class', 'legend-item')
      .on('click', function(event, d) {
        // Toggle region filter when legend item is clicked
        const regionFilter = document.getElementById('regionFilter');
        regionFilter.value = regionFilter.value === d ? 'all' : d;
        handleRegionChange();
      });

  items.append('div')
      .attr('class', 'legend-color')
      .style('background-color', d => regionColors[d] || '#95a5a6');

  items.append('span')
      .attr('class', 'legend-text')
      .style('font-weight', 'bold')
      // .style('color', 'white')
      .style('fill', '#2c3e50')
      .text(d => d);
}

// Filter data based on current selections
function filterData() {
  let data = allData;

  // Filter by region
  if (currentRegion !== 'all') {
    data = data.filter(d => d.region === currentRegion);
  }

  // Apply range filter
  const start = Math.max(1, currentRangeStart) - 1;
  const end = Math.min(data.length, currentRangeEnd);

  filteredData = data.slice(start, end);

  // Update info panel
  updateInfoPanel();
}

// Update info panel
function updateInfoPanel() {
  const totalInRegion = currentRegion === 'all' ? allData.length :
      allData.filter(d => d.region === currentRegion).length;

  const regionText = currentRegion === 'all' ? 'All regions' : currentRegion;
  const actualEnd = Math.min(currentRangeEnd, totalInRegion);
  const showingText = `Showing countries ${currentRangeStart}-${actualEnd} of ${totalInRegion} | ${regionText} selected`;

  d3.select('#infoPanel').text(showingText);
}

// Create/update visualization
function updateVisualization() {
  // Filter data based on current selections
  filterData();

  if (filteredData.length === 0) {
    g.selectAll('*').remove();
    g.append('text')
        .attr('x', width / 2)
        .attr('y', height / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '18px')
        .style('fill', '#7f8c8d')
        .text('No data available for the selected range and region');
    return;
  }

  // Clear previous chart
  g.selectAll('*').remove();

  // Set up scales - assign to global variables
  xScale = d3.scaleLinear()
      .domain([0, d3.max(filteredData, d => d.area)])
      .range([0, width]);

  yScale = d3.scaleBand()
      .domain(filteredData.map(d => d.country))
      .range([0, Math.min(height, filteredData.length * 35)])
      .padding(0.1);

  // Update SVG height based on data
  const dynamicHeight = Math.max(400, filteredData.length * 35 + margin.top + margin.bottom);
  svg.attr('height', dynamicHeight);

  // Create axes
  const xAxis = d3.axisBottom(xScale)
      .tickFormat(d => formatNumber(d)) // Removed GDP from x-axis labels
      .ticks(8);

  const yAxis = d3.axisLeft(yScale);

  // Add vertical grid lines (light gray dotted)
  g.append('g')
      .attr('class', 'grid')
      .selectAll('line')
      .data(xScale.ticks(8))
      .enter()
      .append('line')
      .attr('x1', d => xScale(d))
      .attr('x2', d => xScale(d))
      .attr('y1', 0)
      .attr('y2', yScale.range()[1])
      .attr('stroke', '#e0e0e0')
      .attr('stroke-dasharray', '2,2')
      .attr('opacity', 0.7);

  // Add X axis
  g.append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', `translate(0,${yScale.range()[1]})`)
      .call(xAxis);

  // Add Y axis with flag and country names
  const yAxisGroup = g.append('g')
      .attr('class', 'axis y-axis')
      .call(yAxis);

  // Remove default y-axis text and replace with custom labels including flags
  yAxisGroup.selectAll('.tick text')
      .text('')
      .each(function(d) {
        const countryData = filteredData.find(country => country.country === d);
        if (countryData) {
          d3.select(this.parentNode)
              .append('text')
              .attr('x', -10)
              .attr('dy', '0.35em')
              .style('text-anchor', 'end')
              .style('font-size', '14px')
              .style('fill', '#2c3e50')
              .text(`${countryData.country} ▸ ${countryData.flag}`);
        }
      });

  // Add axis labels
  g.append('text')
      .attr('class', 'axis-title')
      .attr('transform', `translate(${width/2}, ${yScale.range()[1] + 45})`)
      .style('text-anchor', 'middle')
      .text('🌍 GDP billion $ ⏐  world share %');

  // Create bars
  const bars = g.selectAll('.bar')
      .data(filteredData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', d => yScale(d.country))
      .attr('width', d => xScale(d.area))
      .attr('height', yScale.bandwidth())
      .attr('rx', 14) // rounded corners to bars
      .attr('ry', 14) // rounded corners to bars
      .attr('fill', d => regionColors[d.region] || '#95a5a6')
      .on('mouseover', handleMouseOver)
      .on('mousemove', handleMouseMove)
      .on('mouseout', handleMouseOut);

  // Add area labels on bars (updated format: number / percentage)
  g.selectAll('.area-label')
      .data(filteredData)
      .enter()
      .append('text')
      .attr('class', 'area-label')
      .attr('x', d => xScale(d.area) + 3)
      .attr('y', d => yScale(d.country) + yScale.bandwidth() / 2)
      .attr('dy', '0.5em')
      .style('font-size', '11px')
      .style('font-weight', 'bold')
      .style('fill', '#2c3e50')
      .text(d => `${formatNumber(d.area)} / ${d.worldShare.toFixed(2)}%`);
}

// Tooltip event handlers
function handleMouseOver(event, d) {
  tooltip.style('opacity', 1);

  // Highlight current bar
  d3.select(this)
      .style('opacity', 0.7)
      .style('stroke', '#2c3e50')
      .style('stroke-width', 0.5);
}

function handleMouseMove(event, d) {
  const tooltipContent = `
                <div class="tooltip-country">
                    <span class="tooltip-flag">${d.flag}</span>${d.country}
                </div>
                <div><strong>Rank:</strong> #${d.rank}</div>
                <div><strong>📍Region:</strong> ${d.region}</div>
                <div><strong>GDP:</strong> ${formatNumber(d.area)} billion</div>
                <div><strong>World share:</strong> ${d.worldShare.toFixed(2)}%</div>
            `;

  // Get the current bar element to position tooltip relative to it
  const barElement = d3.select(event.target);
  const svgElement = svg.node();
  const svgRect = svgElement.getBoundingClientRect();

  // Calculate position: right edge of the bar + small offset
  const barWidth = xScale(d.area);
  const barY = yScale(d.country);

  // Position tooltip to the right of the bar
  const tooltipX = svgRect.left + margin.left + barWidth + 2;
  const tooltipY = svgRect.top + margin.top + barY + (yScale.bandwidth() / 2) - 172;

  tooltip
      .html(tooltipContent)
      .style('left', tooltipX + 'px')
      .style('top', tooltipY + 'px');
}

function handleMouseOut(event, d) {
  tooltip.style('opacity', 0);

  // Reset bar styling
  d3.select(this)
      .style('opacity', 1)
      .style('stroke', 'none')
      .style('stroke-width', 0);
}

// Event handlers for filters
function handleRegionChange() {
  currentRegion = document.getElementById('regionFilter').value;

  // Update range selector options when region changes
  populateRangeSelector();

  // Reset to first range
  currentRangeStart = 1;
  currentRangeEnd = rangeSize;
  document.getElementById('rangeSelector').value = `1-${Math.min(rangeSize,
      currentRegion === 'all' ? allData.length :
          allData.filter(d => d.region === currentRegion).length)}`;

  updateVisualization();
}

function handleRangeChange() {
  const selectedRange = document.getElementById('rangeSelector').value;
  const [start, end] = selectedRange.split('-').map(Number);

  currentRangeStart = start;
  currentRangeEnd = end;

  updateVisualization();
}

// Set up event listeners
document.getElementById('regionFilter').addEventListener('change', handleRegionChange);
document.getElementById('rangeSelector').addEventListener('change', handleRangeChange);

// Initialize the application
loadData();
