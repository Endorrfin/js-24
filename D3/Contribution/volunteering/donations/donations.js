// Chart configuration and setup
const margin = { top: 20, right: 40, bottom: 60, left: 80 }; // CHANGED: Reduced right margin
const width = 1000 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Color scheme for different years
const colorScale = d3.scaleOrdinal()
    .domain(['2022', '2023', '2024'])
    .range(['#e74c3c', '#3498db', '#2ecc71']);

// Track active years for legend interaction
let activeYears = new Set(['2022', '2023', '2024']);

// Month names for x-axis
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ADDED: Create SVG container
const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

// Tooltip element
const tooltip = d3.select('.tooltip');

// CSV data parsing function
function parseCSVData(csvText) {
  const lines = csvText.trim().split('\n');
  const data = [];

  // Skip header and parse data
  for (let i = 1; i < lines.length; i++) {
    const [dateTime, donations] = lines[i].split(',');
    const cleanDateTime = dateTime.replace(/"/g, '');
    const cleanDonations = parseInt(donations.replace(/"/g, ''));

    // Parse date (format: 2022.02.01 0:00)
    const [datePart] = cleanDateTime.split(' ');
    const [year, month, day] = datePart.split('.');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    data.push({
      date: date,
      year: year,
      month: parseInt(month),
      donations: cleanDonations,
      originalDate: cleanDateTime
    });
  }

  return data;
}

// Load and process CSV data
async function loadData() {
  try {
    const csvText = await d3.text('files/data_donations.csv');
    const data = parseCSVData(csvText);

    // Group data by year
    const groupedData = d3.group(data, d => d.year);

    return groupedData;
  } catch (error) {
    console.error('Error loading data:', error);
    // Fallback data for demonstration
    return createFallbackData();
  }
}

// Fallback data creation (in case CSV file is not accessible)
function createFallbackData() {
  const csvData = `DateTime,"Average number of people donating"
2022.02.01 0:00,15747
2022.03.01 0:00,92947
2022.04.01 0:00,124432
2022.05.01 0:00,179277
2022.06.01 0:00,818590
2022.07.01 0:00,526058
2022.08.01 0:00,678777
2022.09.01 0:00,756207
2022.10.01 0:00,1572037
2022.11.01 0:00,1123848
2022.12.01 0:00,1055378
2023.01.01 0:00,1280364
2023.02.01 0:00,1030853
2023.03.01 0:00,1134333
2023.04.01 0:00,1069809
2023.05.01 0:00,1149543
2023.06.01 0:00,1682866
2023.07.01 0:00,1293973
2023.08.01 0:00,1481025
2023.09.01 0:00,1498291
2023.10.01 0:00,1662740
2023.11.01 0:00,1805272
2023.12.01 0:00,2172297
2024.01.01 0:00,1951567
2024.02.01 0:00,2264265
2024.03.01 0:00,2023545
2024.04.01 0:00,1831748
2024.05.01 0:00,2043871
2024.06.01 0:00,1749091
2024.07.01 0:00,2135472
2024.08.01 0:00,1755603
2024.09.01 0:00,1769653
2024.10.01 0:00,1813036
2024.11.01 0:00,2029928`;

  const data = parseCSVData(csvData);
  return d3.group(data, d => d.year);
}

// Create scales
function createScales(allData) {
  // X-scale now uses months 1-12 instead of dates
  const xScale = d3.scaleLinear()
      .domain([1, 12])
      .range([0, width]);

  const yScale = d3.scaleLinear()
      .domain([0, d3.max(allData, d => d.donations) * 1.1])
      .range([height, 0]);

  return { xScale, yScale };
}

// Create axes with grid
function createAxes(xScale, yScale) {
  // X-axis now shows months
  const xAxis = d3.axisBottom(xScale)
      .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
      .tickFormat(d => monthNames[d - 1]);

  svg.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);

  // Y-axis
  const yAxis = d3.axisLeft(yScale)
      .tickFormat(d => d3.format('.2s')(d));

  svg.append('g')
      .attr('class', 'axis')
      .call(yAxis);

  // Grid lines
  svg.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale)
          .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
          .tickSize(-height)
          .tickFormat('')
      );

  svg.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(yScale)
          .tickSize(-width)
          .tickFormat('')
      );

  // Axis labels
  svg.append('text')
      .attr('class', 'axis-label')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left)
      .attr('x', 0 - (height / 2))
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('Number of Donors using 🫙 of monobank');

  svg.append('text')
      .attr('class', 'axis-label')
      .attr('transform', `translate(${width / 2}, ${height + margin.bottom - 10})`)
      .style('text-anchor', 'middle')
      .text('Month 🗓️');
}

// Create line generator
function createLineGenerator(xScale, yScale) {
  return d3.line()
      .x(d => xScale(d.month)) // CHANGED: Use month number instead of date
      .y(d => yScale(d.donations))
      .curve(d3.curveMonotoneX);
}

// Draw lines for each year
function drawLines(groupedData, line, xScale, yScale) {
  const years = Array.from(groupedData.keys()).sort();

  years.forEach(year => {
    const yearData = groupedData.get(year);
    const color = colorScale(year);

    // Draw line
    svg.append('path')
        .datum(yearData)
        .attr('class', `line year-${year}`)
        .attr('d', line)
        .style('stroke', color)
        .style('opacity', activeYears.has(year) ? 1 : 0.1); // Initial visibility

    // Draw dots for data points
    svg.selectAll(`.dot-${year}`)
        .data(yearData)
        .enter().append('circle')
        .attr('class', `dot dot-${year}`)
        .attr('cx', d => xScale(d.month)) // Use month number
        .attr('cy', d => yScale(d.donations))
        .style('stroke', color)
        .style('opacity', activeYears.has(year) ? 1 : 0.1) // Initial visibility
        .on('mouseover', function(event, d) {
          // Show tooltip on hover
          tooltip.style('opacity', 1)
              .html(`
                                <strong>Year:</strong> ${d.year}<br>
                                <strong>Month:</strong> ${monthNames[d.month - 1]}<br>
                                <strong>Donors:</strong> ${d3.format(',')(d.donations)}
                            `)
              .style('left', (event.pageX + 10) + 'px')
              .style('top', (event.pageY - 10) + 'px');
        })
        .on('mouseout', function() {
          tooltip.style('opacity', 0);
        });
  });
}

// Update line visibility based on active years
function updateLineVisibility() {
  svg.selectAll('.line')
      .style('opacity', function() {
        const year = d3.select(this).attr('class').match(/year-(\d+)/)[1];
        return activeYears.has(year) ? 1 : 0.1;
      });

  svg.selectAll('.dot')
      .style('opacity', function() {
        const year = d3.select(this).attr('class').match(/dot-(\d+)/)[1];
        return activeYears.has(year) ? 1 : 0.1;
      });
}

// Create interactive horizontal legend
function createLegend(groupedData) {
  const years = Array.from(groupedData.keys()).sort();
  const legendContainer = d3.select('#legend');

  const legendItems = legendContainer.selectAll('.legend-item')
      .data(years)
      .enter().append('div')
      .attr('class', d => `legend-item ${activeYears.has(d) ? 'active' : ''}`)
      .style('cursor', 'pointer');

  // Legend color indicators
  legendItems.append('div')
      .attr('class', 'legend-color')
      .style('background-color', d => colorScale(d));

  // Legend text
  legendItems.append('span')
      .text(d => d);

  // Click functionality to toggle year visibility
  legendItems.on('click', function(event, clickedYear) {
    if (activeYears.has(clickedYear)) {
      // If clicking on active year and it's not the only one active, deactivate it
      if (activeYears.size > 1) {
        activeYears.delete(clickedYear);
      }
    } else {
      // Activate the clicked year
      activeYears.add(clickedYear);
    }

    // Update legend visual state
    legendItems.classed('active', d => activeYears.has(d));

    // Update line visibility
    updateLineVisibility();
  });
}

// Main initialization function
async function init() {
  const groupedData = await loadData();
  const allData = Array.from(groupedData.values()).flat();

  const { xScale, yScale } = createScales(allData);
  createAxes(xScale, yScale);

  const line = createLineGenerator(xScale, yScale);
  drawLines(groupedData, line, xScale, yScale);
  createLegend(groupedData);
}

// Start the application
init().catch(console.error);
