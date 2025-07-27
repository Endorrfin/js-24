// Chart configuration
const margin = { top: 20, right: 80, bottom: 60, left: 200 };
const baseHeight = 400;

let data = [];
let currentData = [];

// Initialize chart
const svg = d3.select("#chart");
const tooltip = d3.select("#tooltip");
const loadingDiv = d3.select("#loading");
const errorDiv = d3.select("#error");

// Load and parse CSV data
d3.csv("files/data.csv").then(function(csvData) {
  // Parse and clean data
  data = csvData.map(d => ({
    rank: +d["#"],
    region: d.region,
    flag: d.flag,
    country: d.country_name,
    // Remove commas and convert to number
    population: +d["population"].replace(/,/g, ""),
    // Remove % and convert to number
    worldShare: +d.world_share.replace("%", "")
  }));

  loadingDiv.style("display", "none");

  // Initialize with default count
  updateChart(10);

  // Setup dropdown event listener
  d3.select("#countryCount").on("change", function() {
    const count = +this.value;
    updateChart(count);
  });

}).catch(function(error) {
  loadingDiv.style("display", "none");
  errorDiv.style("display", "block")
      .text("Error loading data: " + error.message);
});

function updateChart(count) {
  // Filter data to show top N countries
  currentData = data.slice(0, count);

  // Clear previous chart
  svg.selectAll("*").remove();

  // Dynamic height based on number of countries
  const height = Math.max(baseHeight, currentData.length * 25);
  const width = 900;

  svg.attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

  const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

  // Scales
  const xScale = d3.scaleLinear()
      .domain([0, d3.max(currentData, d => d.population)])
      .range([0, width]);

  const yScale = d3.scaleBand()
      .domain(currentData.map(d => d.country))
      .range([0, height])
      .padding(0.1);

  // Add vertical grid lines
  g.append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale)
          .tickSize(-height)
          .tickFormat(""));

  // Create bars
  const bars = g.selectAll(".bar")
      .data(currentData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("y", d => yScale(d.country))
      .attr("width", d => xScale(d.population))
      .attr("height", yScale.bandwidth());

  // Add country labels (flags + names)
  g.selectAll(".country-label")
      .data(currentData)
      .enter()
      .append("text")
      .attr("class", "country-label")
      .attr("x", -10)
      .attr("y", d => yScale(d.country) + yScale.bandwidth() / 2)
      .attr("text-anchor", "end")
      .style("font-size", "12px")
      // .text(d => `${d.flag} ${d.country}`);
      .text(d => `${d.country} ${d.flag} `);

  // Add population labels on bars
  g.selectAll(".population-label")
      .data(currentData)
      .enter()
      .append("text")
      .attr("class", "population-label")
      .attr("x", d => xScale(d.population) + 5)
      .attr("y", d => yScale(d.country) + yScale.bandwidth() / 2)
      .attr("alignment-baseline", "middle")
      .style("font-size", "10px")
      .style("fill", "#2c3e50")
      .text(d => formatNumber(d.population));

  // X axis
  g.append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale)
          .tickFormat(d3.format(".2s")));

  // X axis label
  g.append("text")
      .attr("class", "axis-label")
      .attr("transform", `translate(${width/2}, ${height + 40})`)
      .attr("text-anchor", "middle")
      .text("Population density");

  // Y axis label
  g.append("text")
      .attr("class", "axis-label")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 20)
      .attr("x", -height/2)
      .attr("text-anchor", "middle")
      .text("List of countries");

  // Tooltip events
  bars.on("mouseover", function(event, d) {
    // Highlight bar
    d3.select(this).style("fill", "#EB5A3C");

    // Show tooltip
    const tooltipContent = `
                    <div class="tooltip-country">
                        <span class="tooltip-flag">${d.flag}</span>${d.country}
                    </div>
                    <div><strong>Rank:</strong> #${d.rank}</div>
                    <div><strong>Population:</strong> ${formatNumber(d.population)}</div>
                    <div><strong>World Share:</strong> ${d.worldShare}%</div>
                    <div><strong>Region:</strong> ${d.region}</div>
                `;

    tooltip.html(tooltipContent)
        .style("opacity", 1)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
  })
      .on("mousemove", function(event) {
        tooltip.style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseout", function() {
        // Reset bar color
        d3.select(this).style("fill", "#6A80B9");

        // Hide tooltip
        tooltip.style("opacity", 0);
      });
}

// Helper function to format numbers with commas
function formatNumber(num) {
  return num.toLocaleString();
}
