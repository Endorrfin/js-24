// Data structure
const data = [
  { year: '2022', rockets: 1986, drones: 440, injured: 3800, deaths: 1200 },
  { year: '2023', rockets: 1481, drones: 3140, injured: 6651, deaths: 1974 },
  { year: '2024', rockets: 3420, drones: 11137, injured: 9138, deaths: 2088 },
  { year: '2025', rockets: 2566, drones: 55119, injured: 12142, deaths: 2514 }
];

// Chart dimensions and margins
const margin = { top: 20, right: 100, bottom: 50, left: 100 };
const width = 1000 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// SVG setup
const svg = d3.select('#chart')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

// Scales
const x = d3.scaleBand()
    .domain(data.map(d => d.year))
    .range([0, width])
    .padding(0.3);

// Left Y-axis: Weapons count (stacked bars)
const yLeft = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.rockets + d.drones)])
    .nice()
    .range([height, 0]);

// Right Y-axis: Casualties count (lines)
const yRight = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.injured)])
    .nice()
    .range([height, 0]);

// Grid lines for better readability
svg.append('g')
    .attr('class', 'grid')
    .selectAll('line')
    .data(yLeft.ticks(8))
    .join('line')
    .attr('x1', 0)
    .attr('x2', width)
    .attr('y1', d => yLeft(d))
    .attr('y2', d => yLeft(d));

// Create stacked data for bars
const stackedData = data.map(d => ({
  year: d.year,
  rockets: d.rockets,
  drones: d.drones,
  total: d.rockets + d.drones,
  injured: d.injured,
  deaths: d.deaths
}));

// Draw bars for rockets (bottom layer)
svg.selectAll('.bar-rockets')
    .data(stackedData)
    .join('rect')
    .attr('class', 'bar-rockets')
    .attr('x', d => x(d.year))
    .attr('y', d => yLeft(d.rockets))
    .attr('width', x.bandwidth())
    .attr('height', d => height - yLeft(d.rockets))
    .attr('fill', '#7B9AB5')
    .attr('opacity', 0.9)
    .on('mouseover', function(event, d) {
      d3.select(this).attr('opacity', 1);
      showTooltip(event, `<strong>${d.year} - Rockets</strong><br/>
                    Count: ${d.rockets.toLocaleString()}`);
    })
    .on('mouseout', function() {
      d3.select(this).attr('opacity', 0.9);
      hideTooltip();
    });

// Draw bars for drones (top layer, stacked)
svg.selectAll('.bar-drones')
    .data(stackedData)
    .join('rect')
    .attr('class', 'bar-drones')
    .attr('x', d => x(d.year))
    .attr('y', d => yLeft(d.total))
    .attr('width', x.bandwidth())
    .attr('height', d => yLeft(d.rockets) - yLeft(d.total))
    .attr('fill', '#4A5D6F')
    .attr('opacity', 0.9)
    .on('mouseover', function(event, d) {
      d3.select(this).attr('opacity', 1);
      showTooltip(event, `<strong>${d.year} - Drones</strong><br/>
                    Count: ${d.drones.toLocaleString()}<br/>
                    <em>Total weapons: ${d.total.toLocaleString()}</em>`);
    })
    .on('mouseout', function() {
      d3.select(this).attr('opacity', 0.9);
      hideTooltip();
    });

// Line generator for injured
const victimsLine = d3.line()
    .x(d => x(d.year) + x.bandwidth() / 2)
    .y(d => yRight(d.injured))
    .curve(d3.curveMonotoneX);

const deathsLine = d3.line()
    .x(d => x(d.year) + x.bandwidth() / 2)
    .y(d => yRight(d.deaths))
    .curve(d3.curveMonotoneX);

// Draw injured line
svg.append('path')
    .datum(stackedData)
    .attr('class', 'line-victims')
    .attr('fill', 'none')
    .attr('stroke', '#D64545')
    .attr('stroke-width', 3)
    .attr('d', victimsLine);

// Draw deaths line
svg.append('path')
    .datum(stackedData)
    .attr('class', 'line-deaths')
    .attr('fill', 'none')
    .attr('stroke', '#8B2E2E')
    .attr('stroke-width', 3)
    .attr('d', deathsLine);

// Add dots for injured with tooltips
svg.selectAll('.dot-victims')
    .data(stackedData)
    .join('circle')
    .attr('class', 'dot-victims')
    .attr('cx', d => x(d.year) + x.bandwidth() / 2)
    .attr('cy', d => yRight(d.injured))
    .attr('r', 5)
    .attr('fill', '#D64545')
    .attr('stroke', 'white')
    .attr('stroke-width', 2)
    .on('mouseover', function(event, d) {
      d3.select(this).attr('r', 7);
      showTooltip(event, `<strong>${d.year} - Injured</strong><br/>
                    Injured & Deaths: ${d.injured.toLocaleString()}`);
    })
    .on('mouseout', function() {
      d3.select(this).attr('r', 5);
      hideTooltip();
    });

// Add dots for deaths with tooltips
svg.selectAll('.dot-deaths')
    .data(stackedData)
    .join('circle')
    .attr('class', 'dot-deaths')
    .attr('cx', d => x(d.year) + x.bandwidth() / 2)
    .attr('cy', d => yRight(d.deaths))
    .attr('r', 5)
    .attr('fill', '#8B2E2E')
    .attr('stroke', 'white')
    .attr('stroke-width', 2)
    .on('mouseover', function(event, d) {
      d3.select(this).attr('r', 7);
      showTooltip(event, `<strong>${d.year} - Deaths</strong><br/>
                    Fatalities: ${d.deaths.toLocaleString()}`);
    })
    .on('mouseout', function() {
      d3.select(this).attr('r', 5);
      hideTooltip();
    });

// X-axis
svg.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .style('font-size', '14px')
    .style('font-weight', '500');

// Left Y-axis (Weapons)
svg.append('g')
    .attr('class', 'axis')
    .call(d3.axisLeft(yLeft).ticks(8).tickFormat(d => d.toLocaleString()));

// Right Y-axis (Injured)
svg.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(${width},0)`)
    .call(d3.axisRight(yRight).ticks(8).tickFormat(d => d.toLocaleString()));

// Left Y-axis label
svg.append('text')
    .attr('class', 'axis-label')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', -75)
    .attr('text-anchor', 'middle')
    .text('Кількість зброї (ракети + дрони)');

// Right Y-axis label
svg.append('text')
    .attr('class', 'axis-label')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', width + 85)
    .attr('text-anchor', 'middle')
    .text('Вплив на людей (травмовані / постраждалі та загиблі)');

// Tooltip helper functions
function showTooltip(event, html) {
  const tooltip = d3.select('.tooltip');
  tooltip
      .html(html)
      .style('opacity', 1)
      .style('left', (event.pageX + 10) + 'px')
      .style('top', (event.pageY - 10) + 'px');
}

function hideTooltip() {
  d3.select('.tooltip').style('opacity', 0);
}
