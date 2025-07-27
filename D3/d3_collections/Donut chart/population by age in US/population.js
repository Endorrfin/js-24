// Define width variable
const width = 600; // Reduced width to accommodate table
const height = Math.min(width, 540);
const radius = Math.min(width, height) / 2;

// Load CSV data using d3.csv
d3.csv('./files/data.csv', d3.autoType)
    .then(function(data) {
      // Remove loading message
      document.querySelector('#chart-wrapper').innerHTML = '';

      // Create both chart and table from the same data
      createDonutChart(data);
      createDataTable(data);
    })
    .catch(function(error) {
      // Add error handling for CSV loading
      console.error('Error loading CSV:', error);
      document.querySelector('#chart-wrapper').innerHTML =
          '<div class="error">Error loading data. Please check that files/data.csv exists and is accessible.</div>';
    });

// Create shared color scale function
function createColorScale(data) {
  return d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());
}

// New function to create data table
function createDataTable(data) {
  const color = createColorScale(data);
  const tableBody = document.getElementById('table-body');

  // Clear existing rows
  tableBody.innerHTML = '';

  // Generate table rows from CSV data
  data.forEach((d, index) => {
    const row = document.createElement('tr');
    const segmentColor = color(d.name);

    row.innerHTML = `
          <td><strong>${index + 1}</strong></td>
          <td>
            <span class="color-indicator" style="background-color: ${segmentColor};"></span>
            ${d.name}
          </td>
          <td><strong>${d.value.toLocaleString('en-US')}</strong></td>
        `;

    tableBody.appendChild(row);
  });
}

function createDonutChart(data) {
  // Use shared color scale
  const color = createColorScale(data);

  // Adjusted inner radius for better text positioning
  const arc = d3.arc()
      .innerRadius(radius * 0.6) // Reduced from 0.67 to give more space for text
      .outerRadius(radius - 1);

  const pie = d3.pie()
      .padAngle(1 / radius)
      .sort(null)
      .value(d => d.value);

  // Create SVG and append to chart wrapper
  const svg = d3.select('#chart-wrapper')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .attr('style', 'max-width: 100%; height: auto;');

  // Create pie slices
  const paths = svg.append('g')
      .selectAll('path')
      .data(pie(data))
      .join('path')
      .attr('fill', d => color(d.data.name))
      .attr('d', arc);

  // Add tooltips using title elements
  paths.append('title')
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

  // Improved text positioning and conditional rendering to prevent overlaps
  const textGroup = svg.append('g')
      .attr('class', 'chart-text');

  const textElements = textGroup
      .selectAll('text')
      .data(pie(data))
      .join('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`);

  // Add age group labels (always visible)
  textElements
      .append('tspan')
      .attr('class', 'age-group')
      .attr('y', '-0.4em')
      .text(d => d.data.name);

  // Only show population values for larger slices to prevent overlap
  textElements
      .filter(d => (d.endAngle - d.startAngle) > 0.15) // Reduced threshold from 0.25
      .append('tspan')
      .attr('class', 'population')
      .attr('x', 0)
      .attr('y', '0.7em')
      .text(d => d.data.value.toLocaleString('en-US'));

  // Add hover effects for better interactivity
  paths
      .on('mouseover', function(event, d) {
        d3.select(this).style('opacity', 0.8);
      })
      .on('mouseout', function(event, d) {
        d3.select(this).style('opacity', 1);
      });
}
