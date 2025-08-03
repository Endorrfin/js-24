// ADDED: Chart configuration and setup
const margin = { top: 20, right: 40, bottom: 60, left: 80 };
const width = 1000 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// ADDED: Color scheme for different years
const colorScale = d3.scaleOrdinal()
    .domain(['2022', '2023', '2024'])
    .range(['#e74c3c', '#3498db', '#2ecc71']);

// ADDED: Track active years for legend interaction
let activeYears = new Set(['2022', '2023', '2024']);

// ADDED: Month names for x-axis
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ADDED: Create SVG container
const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

// ADDED: Tooltip element
const tooltip = d3.select('.tooltip');

// ADDED: CSV data parsing function
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

// ADDED: Load and process CSV data
async function loadData() {
  try {
    const csvText = await d3.text('files/data_number_of_volunteers.csv');
    const data = parseCSVData(csvText);

    // Group data by year
    const groupedData = d3.group(data, d => d.year);

    return groupedData;
  } catch (error) {
    console.error('Error loading data:', error);
    // ADDED: Fallback data for demonstration
    return createFallbackData();
  }
}

// ADDED: Fallback data creation (in case CSV file is not accessible)
function createFallbackData() {
  const csvData = `DateTime,"number of volunteers"
2022.01.01 0:00,320
2022.02.01 0:00,323
2022.03.01 0:00,332
2022.04.01 0:00,379
2022.05.01 0:00,429
2022.06.01 0:00,500
2022.07.01 0:00,570
2022.08.01 0:00,636
2022.09.01 0:00,734
2022.10.01 0:00,852
2022.11.01 0:00,1048
2022.12.01 0:00,2699
2023.01.01 0:00,3196
2023.02.01 0:00,3637
2023.03.01 0:00,4072
2023.04.01 0:00,4478
2023.05.01 0:00,4846
2023.06.01 0:00,5186
2023.07.01 0:00,5491
2023.08.01 0:00,5809
2023.09.01 0:00,6072
2023.10.01 0:00,6322
2023.11.01 0:00,6648
2023.12.01 0:00,7153
2024.01.01 0:00,7695
2024.02.01 0:00,8084
2024.03.01 0:00,8423
2024.04.01 0:00,8745
2024.05.01 0:00,9258
2024.06.01 0:00,9540
2024.07.01 0:00,9700
2024.08.01 0:00,9860
2024.09.01 0:00,10064
2024.10.01 0:00,10310
2024.11.01 0:00,10454`;

  const data = parseCSVData(csvData);
  return d3.group(data, d => d.year);
}

// ADDED: Create scales
function createScales(allData) {
  // CHANGED: X-scale now uses months 1-12 instead of dates
  const xScale = d3.scaleLinear()
      .domain([1, 12])
      .range([0, width]);

  const yScale = d3.scaleLinear()
      .domain([0, d3.max(allData, d => d.donations) * 1.1])
      .range([height, 0]);

  return { xScale, yScale };
}

// ADDED: Create axes with grid
function createAxes(xScale, yScale) {
  // CHANGED: X-axis now shows months
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

  // ADDED: Grid lines
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

  // ADDED: Axis labels
  svg.append('text')
      .attr('class', 'axis-label')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left)
      .attr('x', 0 - (height / 2))
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('Number of volunteers');

  svg.append('text')
      .attr('class', 'axis-label')
      .attr('transform', `translate(${width / 2}, ${height + margin.bottom - 10})`)
      .style('text-anchor', 'middle')
      .text('Month 🗓️');
}

// ADDED: Create line generator
function createLineGenerator(xScale, yScale) {
  return d3.line()
      .x(d => xScale(d.month)) // CHANGED: Use month number instead of date
      .y(d => yScale(d.donations))
      .curve(d3.curveMonotoneX);
}

// ADDED: Draw lines for each year
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
        .style('opacity', activeYears.has(year) ? 1 : 0.1); // ADDED: Initial visibility

    // ADDED: Draw dots for data points
    svg.selectAll(`.dot-${year}`)
        .data(yearData)
        .enter().append('circle')
        .attr('class', `dot dot-${year}`)
        .attr('cx', d => xScale(d.month)) // CHANGED: Use month number
        .attr('cy', d => yScale(d.donations))
        .style('stroke', color)
        .style('opacity', activeYears.has(year) ? 1 : 0.1) // ADDED: Initial visibility
        .on('mouseover', function(event, d) {
          // ADDED: Show tooltip on hover
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

// ADDED: Update line visibility based on active years
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

// ADDED: Create interactive horizontal legend
function createLegend(groupedData) {
  const years = Array.from(groupedData.keys()).sort();
  const legendContainer = d3.select('#legend');

  const legendItems = legendContainer.selectAll('.legend-item')
      .data(years)
      .enter().append('div')
      .attr('class', d => `legend-item ${activeYears.has(d) ? 'active' : ''}`)
      .style('cursor', 'pointer');

  // ADDED: Legend color indicators
  legendItems.append('div')
      .attr('class', 'legend-color')
      .style('background-color', d => colorScale(d));

  // Legend text
  legendItems.append('span')
      .text(d => d);

  // ADDED: Click functionality to toggle year visibility
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

// ADDED: Main initialization function
async function init() {
  const groupedData = await loadData();
  const allData = Array.from(groupedData.values()).flat();

  const { xScale, yScale } = createScales(allData);
  createAxes(xScale, yScale);

  const line = createLineGenerator(xScale, yScale);
  drawLines(groupedData, line, xScale, yScale);
  createLegend(groupedData);
}

// ADDED: Start the application
init().catch(console.error);
