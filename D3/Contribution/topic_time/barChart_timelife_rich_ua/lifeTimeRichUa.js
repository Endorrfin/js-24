// Data parsing - converted from Ukrainian table to structured format
// const rawData = [
//   { activity: 'Сон', years: 27, days: 9855, hours: 236520 },
//   { activity: 'Робота', years: 11, days: 3833, hours: 91980 },
//   { activity: 'В дорозі', years: 8.5, days: 3103, hours: 74460 },
//   { activity: 'Перегляд екрану', years: 7.6, days: 2774, hours: 66576 },
//   { activity: 'Прийом їжі', years: 5.5, days: 2008, hours: 48180 },
//   { activity: 'Хворіємо', years: 2.8, days: 1022, hours: 24528 },
//   { activity: 'Навчання в школі', years: 2.6, days: 949, hours: 22776 },
//   { activity: 'Читаємо', years: 2.3, days: 840, hours: 20148 },
//   { activity: 'Куріння (якщо курите)', years: 2.0, days: 730, hours: 17520 },
//   { activity: 'Нічого не робимо', years: 1.5, days: 548, hours: 13140 },
//   { activity: 'Особиста гігієна', years: 1.5, days: 548, hours: 13140 },
//   { activity: 'Граємось', years: 1, days: 365, hours: 8760 },
//   { activity: 'Робимо покупки', years: 0.8, days: 292, hours: 7008 },
//   { activity: 'Інтимні відносини', years: 0.2, days: 73, hours: 1752 },
//   { activity: 'Займаємось спортом', years: 0.2, days: 73, hours: 1752 }
// ];


const rawData = [
  { activity: '🛌 Сон', years: 27, days: 9855, hours: 236520 },
  { activity: '👷 Робота', years: 11, days: 3833, hours: 91980 },
  { activity: '🚙 В дорозі', years: 8.5, days: 3103, hours: 74460 },
  { activity: '👀 Перегляд екрану', years: 7.6, days: 2774, hours: 66576 },
  { activity: '🥗 Прийом їжі', years: 5.5, days: 2008, hours: 48180 },
  { activity: '🤒 🤧 Хворіємо', years: 2.8, days: 1022, hours: 24528 },
  { activity: '✍️ Навчання в школі', years: 2.6, days: 949, hours: 22776 },
  { activity: '📚 Читаємо', years: 2.3, days: 840, hours: 20148 },
  { activity: '🚬 Куріння (хто курить)', years: 2.0, days: 730, hours: 17520 },
  { activity: '😊 Нічого не робимо', years: 1.5, days: 548, hours: 13140 },
  { activity: '🚿 Особиста гігієна', years: 1.5, days: 548, hours: 13140 },
  { activity: '⚽️ 🎳 🎯 Граємось', years: 1, days: 365, hours: 8760 },
  { activity: '🛒 Робимо покупки', years: 0.8, days: 292, hours: 7008 },
  { activity: '💕 Інтимні відносини', years: 0.2, days: 73, hours: 1752 },
  { activity: '🏋️ ⛹️‍♀️ Займаємось спортом', years: 0.2, days: 73, hours: 1752 }
];


// Chart configuration and dimensions
const margin = { top: 20, right: 120, bottom: 40, left: 250 };
const width = 1200 - margin.left - margin.right;
const height = 780 - margin.bottom - margin.top;

// Color scale - using distinctive colors for better readability
const colorScale = d3.scaleOrdinal()
    .domain(rawData.map(d => d.activity))
    .range([
      '#321E1E', '#7C73E6', '#2ecc71', '#f39c12', '#9b59b6',
      '#98CD00', '#34495e', '#e67e22', '#CD1818', '#f1c40f',
      '#1CABE2', '#16a085', '#2c3e50', '#FF2DD1', '#B80000'
    ]);

// Unit labels for better UX
const unitLabels = {
  years: 'років',
  days: 'днів',
  hours: 'годин'
};

// SVG setup with responsive container
const svg = d3.select('#chart')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

// Tooltip element for interactive hover information
const tooltip = d3.select('#tooltip');

// Scales initialization
let xScale = d3.scaleLinear().range([0, width]);
let yScale = d3.scaleBand().range([0, height]).padding(0.1);

// Axes setup
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

// Grid lines for better data reading
const xGrid = d3.axisBottom(xScale)
    .tickSize(-height)
    .tickFormat('');

// Append axis groups - these will be updated on unit change
const xAxisGroup = g.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${height})`);

const yAxisGroup = g.append('g')
    .attr('class', 'axis');

const gridGroup = g.append('g')
    .attr('class', 'grid')
    .attr('transform', `translate(0,${height})`);

// Chart update function - handles unit switching with smooth transitions
function updateChart(unit) {
  const data = rawData.sort((a, b) => b[unit] - a[unit]);

  // Update scales domains based on selected unit
  xScale.domain([0, d3.max(data, d => d[unit])]);
  yScale.domain(data.map(d => d.activity));

  // ❗️ Define minimum bar width for better visibility of small values
  const minBarWidth = 30;

  // Update grid with transition
  gridGroup.transition()
      .duration(750)
      .call(xGrid);

  // Update axes with smooth transitions
  xAxisGroup.transition()
      .duration(750)
      .call(xAxis);

  yAxisGroup.transition()
      .duration(750)
      .call(yAxis);

  // Data binding for bars with key function for smooth transitions
  const bars = g.selectAll('.bar')
      .data(data, d => d.activity);

  // Remove old bars that are no longer needed
  bars.exit()
      .transition()
      .duration(750)
      .attr('width', 0)
      .remove();

  // Add new bars for new data
  const barsEnter = bars.enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('y', d => yScale(d.activity))
      .attr('height', yScale.bandwidth())
      .attr('width', 0)
      .attr('fill', d => colorScale(d.activity));

  // Merge existing and new bars for updates
  const barsUpdate = barsEnter.merge(bars);

  // Animate bar width changes with smooth transition
  barsUpdate.transition()
      .duration(750)
      .attr('y', d => yScale(d.activity))
      .attr('width', d => xScale(d[unit]))
      .attr('height', yScale.bandwidth());

  // barsUpdate.transition()
  //     .duration(750)
  //     .attr('y', d => yScale(d.activity))
  //     .attr('width', d => Math.max(minBarWidth, xScale(d[unit])))
  //     .attr('height', yScale.bandwidth())
  //     // ❗️ Add special styling for very small values (less than 1 year)
  //     .attr('stroke', d => d.years < 1 ? '#2c3e50' : 'none')
  //     .attr('stroke-width', d => d.years < 1 ? 2 : 0)
  //     .attr('stroke-dasharray', d => d.years < 1 ? '5,3' : 'none');

  // Add hover interactions for enhanced UX
  barsUpdate
      .on('mouseover', function(event, d) {
        // Show tooltip with formatted information
        tooltip.style('opacity', 1)
            .html(`
                            <strong>${d.activity}</strong><br/>
                            ${d[unit].toLocaleString()} ${unitLabels[unit]}<br/>
                            <small>Роки: ${d.years} | Дні: ${d.days.toLocaleString()} | Години: ${d.hours.toLocaleString()}</small>
                        `)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 10) + 'px');
      })
      .on('mouseout', function() {
        // Hide tooltip on mouse leave
        tooltip.style('opacity', 0);
      });

  // Value labels on bars - shows actual values for better readability
  // ❗️ External value labels positioned to the right of bars
  const valueLabels = g.selectAll('.value-label')
      .data(data, d => d.activity);

  valueLabels.exit().remove();

  const valueLabelsEnter = valueLabels.enter()
      .append('text')
      .attr('class', 'value-label')
      .attr('y', d => yScale(d.activity) + yScale.bandwidth() / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'start') // ❗️ Always start anchor since labels are external
      .attr('fill', '#2c3e50'); // ❗️ Consistent dark color for external labels

  const valueLabelsUpdate = valueLabelsEnter.merge(valueLabels);

  // Update value label positions and text with transitions
  valueLabelsUpdate.transition()
      .duration(750)
      .attr('y', d => yScale(d.activity) + yScale.bandwidth() / 2)
      .attr('x', d => {
        const barWidth = Math.max(minBarWidth, xScale(d[unit]));
        return barWidth + 8; // ❗️ 8px padding from bar end
      })
      .text(d => d[unit].toLocaleString());
}

// Event listener for dropdown unit selection
d3.select('#unitSelector').on('change', function() {
  const selectedUnit = this.value;
  updateChart(selectedUnit);
});

// Initial chart render with default unit (years)
updateChart('years');
