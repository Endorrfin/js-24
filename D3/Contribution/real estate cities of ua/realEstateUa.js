// Chart configuration and setup
const margin = {top: 20, right: 50, bottom: 80, left: 70}; // Reduced right margin
const width = 1000 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// More contrasting color scheme for different years
const colorScale = d3.scaleOrdinal()
    .domain(['2021', '2022', '2023', '2024', '2025'])
    // .range(['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']); // More contrasting colors
    .range(['#36BA98', '#FA1616', '#2CD3E1', '#6F38C5', '#FF6701']); // More contrasting colors

// Global variables for data and chart elements
let originalData;
let currentSortOrder = 'original';
let svg, g, xScale, yScale, line, tooltip;

// Initialize chart
function initChart() {
  // Create SVG element with responsive viewBox
  svg = d3.select("#chart")
      .append("svg")
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("width", "100%")
      .style("height", "auto");

  g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

  // Create tooltip
  tooltip = d3.select("#tooltip");

  // Create line generator
  line = d3.line()
      .x(d => xScale(d.city) + xScale.bandwidth() / 2)
      .y(d => yScale(d.cost))
      .curve(d3.curveMonotoneX);
}

// Create top horizontal legend
function createTopLegend() {
  const years = ['2021', '2022', '2023', '2024', '2025'];
  const topLegend = d3.select("#top-legend");

  const legendItems = topLegend.selectAll(".legend-item-horizontal")
      .data(years)
      .enter().append("div")
      .attr("class", "legend-item-horizontal")
      .on("mouseover", function(event, selectedYear) {
        // Dim all lines except the hovered one
        g.selectAll(".line")
            .style("opacity", d => d.year === selectedYear ? 1 : 0.2);
        g.selectAll(".dot")
            .style("opacity", d => d.year === selectedYear ? 1 : 0.2);
      })
      .on("mouseout", function() {
        // Restore all lines
        g.selectAll(".line").style("opacity", 1);
        g.selectAll(".dot").style("opacity", 1);
      });

  legendItems.append("div")
      .attr("class", "legend-color-box")
      .style("background-color", d => colorScale(d));

  legendItems.append("span")
      .text(d => d);
}

// Sorting functions
function sortCities(sortType) {
  // Update active button
  d3.selectAll(".sort-button").classed("active", false);
  d3.select(`button[onclick="sortCities('${sortType}')"]`).classed("active", true);

  let sortedData = [...originalData];

  switch(sortType) {
    case 'alphabetical':
      sortedData.sort((a, b) => a['City Name'].localeCompare(b['City Name']));
      break;
    case '2025-high':
      sortedData.sort((a, b) => +b['Cost per 1 m² 2025'] - +a['Cost per 1 m² 2025']);
      break;
    case '2025-low':
      sortedData.sort((a, b) => +a['Cost per 1 m² 2025'] - +b['Cost per 1 m² 2025']);
      break;
    case 'change':
      sortedData.sort((a, b) => {
        const changeA = +a['Cost per 1 m² 2025'] - +a['Cost per 1 m² 2021'];
        const changeB = +b['Cost per 1 m² 2025'] - +b['Cost per 1 m² 2021'];
        return changeB - changeA;
      });
      break;
    default: // 'original'
      // Keep original order
      break;
  }

  currentSortOrder = sortType;
  updateChart(sortedData);
}

// Update chart with new data order
function updateChart(data) {
  const years = ['2021', '2022', '2023', '2024', '2025'];
  const cities = data.map(d => d['City Name']);

  // Transform data for line chart
  const processedData = years.map(year => {
    return {
      year: year,
      values: data.map(d => ({
        city: d['City Name'],
        cost: +d[`Cost per 1 m² ${year}`]
      }))
    };
  });

  // Update scales
  xScale.domain(cities);

  const duration = 1750; // Animation duration

  // Update X axis
  g.select(".x-axis")
      .transition()
      .duration(duration)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-45)");

  // Update grid
  g.select(".x-grid")
      .transition()
      .duration(duration)
      .call(d3.axisBottom(xScale)
          .tickSize(-height)
          .tickFormat("")
      );

  // Update lines
  const lineGroups = g.selectAll(".line-group")
      .data(processedData);

  lineGroups.select(".line")
      .transition()
      .duration(duration)
      .attr("d", d => line(d.values));

  // Update dots
  const dots = lineGroups.selectAll(".dot")
      .data(d => d.values.map(v => ({...v, year: d.year})));

  dots.transition()
      .duration(duration)
      .attr("cx", d => xScale(d.city) + xScale.bandwidth() / 2)
      .attr("cy", d => yScale(d.cost));
}

// Load and process the data
d3.csv("files/data.csv").then(function(data) {
  originalData = data; // Store original data

  // Initialize chart
  initChart();
  createTopLegend();

  const years = ['2021', '2022', '2023', '2024', '2025'];
  const cities = data.map(d => d['City Name']);

  // Transform data for line chart
  const processedData = years.map(year => {
    return {
      year: year,
      values: data.map(d => ({
        city: d['City Name'],
        cost: +d[`Cost per 1 m² ${year}`]
      }))
    };
  });

  // Set up scales
  xScale = d3.scaleBand()
      .domain(cities)
      .range([0, width])
      .padding(0.1);

  // Modified Y-axis scale to show increments of 200
  const maxValue = d3.max(processedData, d => d3.max(d.values, v => v.cost));
  const yMax = Math.ceil(maxValue / 100) * 100; // Round up to nearest 200
  // console.log(yMax, maxValue)

  yScale = d3.scaleLinear()
      .domain([0, yMax])
      .range([height, 0]);

  // Update line generator with new scales
  line = d3.line()
      .x(d => xScale(d.city) + xScale.bandwidth() / 2)
      .y(d => yScale(d.cost))
      .curve(d3.curveMonotoneX);

  // Add grid lines for better readability
  g.append("g")
      .attr("class", "grid x-grid")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale)
          .tickSize(-height)
          .tickFormat("")
      );

  g.append("g")
      .attr("class", "grid y-grid")
      .call(d3.axisLeft(yScale)
          .tickSize(-width)
          .tickFormat("")
          .tickValues(d3.range(0, yMax + 100, 100)) // Y-axis increments of 200
      );

  // Add X axis
  g.append("g")
      .attr("class", "axis x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-45)");

  // Add Y axis with custom tick values (increments of 200)
  g.append("g")
      .attr("class", "axis y-axis")
      .call(d3.axisLeft(yScale)
          .tickValues(d3.range(0, yMax + 100, 100))
          .tickFormat(d => d === 0 ? "0" : `${d}`));

  // Add axis labels
  g.append("text")
      .attr("class", "axis-label")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Real estate cost per 1m² 💲");

  g.append("text")
      .attr("class", "axis-label")
      .attr("transform", `translate(${width / 2}, ${height + margin.bottom - 10})`)
      .style("text-anchor", "middle")
      .text("List of Ukrainian cities");

  // Create line groups for each year
  const lineGroups = g.selectAll(".line-group")
      .data(processedData)
      .enter().append("g")
      .attr("class", "line-group");

  // Add lines for each year
  lineGroups.append("path")
      .attr("class", "line")
      .attr("d", d => line(d.values))
      .style("stroke", d => colorScale(d.year))
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 200)
      .style("opacity", 1);

  // Add dots for data points with hover effects
  lineGroups.selectAll(".dot")
      .data(d => d.values.map(v => ({...v, year: d.year})))
      .enter().append("circle")
      .attr("class", "dot")
      .attr("cx", d => xScale(d.city) + xScale.bandwidth() / 2)
      .attr("cy", d => yScale(d.cost))
      .style("stroke", d => colorScale(d.year))
      .style("opacity", 0)
      .on("mouseover", function(event, d) {
        // Show tooltip on hover
        tooltip.transition()
            .duration(200)
            .style("opacity", 1);
        tooltip.html(`
                        <strong>${d.city}</strong><br/>
                        Year: ${d.year}<br/>
                        Cost: ${d.cost}/m²
                    `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", function() {
        // Hide tooltip
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
      })
      .transition()
      .duration(1000)
      .delay((d, i) => Math.floor(i / cities.length) * 200 + 500)
      .style("opacity", 1);

}).catch(function(error) {
  // Error handling for data loading
  console.error("Error loading data:", error);
  d3.select("#chart").append("div")
      .style("text-align", "center")
      .style("color", "red")
      .style("font-size", "16px")
      .style("margin-top", "50px")
      .text("Error loading data. Please check that the CSV file exists at: files/data.csv");
});
