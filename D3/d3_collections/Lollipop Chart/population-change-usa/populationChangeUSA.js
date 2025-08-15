// Configuration variables (converted from Observable)
const metric = "absolute"; // Changed: Added metric variable for data calculation
const width = 928; // Changed: Added width variable
const barHeight = 25; // Changed: Moved from Observable cell to local variable
const margin = {top: 30, right: 60, bottom: 10, left: 60}; // Changed: Moved from Observable cell

// Load and process data (converted from Observable FileAttachment)
d3.tsv("files/data.tsv").then(function(rawData) {
  // Changed: Converted from Observable FileAttachment to d3.tsv()
  // Process data similar to Observable version
  const data = rawData.map(d => ({
    name: d.State,
    value: metric === "absolute" ? +d["2019"] - +d["2010"] : (+d["2019"] - +d["2010"]) / +d["2010"]
  })).sort((a, b) => d3.ascending(a.value, b.value)); // Changed: Added data processing logic

  // Calculate height based on data length (converted from Observable)
  const height = Math.ceil((data.length + 0.1) * barHeight) + margin.top + margin.bottom;

  // Create scales (converted from Observable cells)
  const x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.value))
      .rangeRound([margin.left, width - margin.right]);

  const y = d3.scalePoint()
      .domain(d3.range(data.length))
      .rangeRound([margin.top, height - margin.bottom])
      .padding(0.1);

  // Create format functions (converted from Observable)
  const format = d3.format(metric === "absolute" ? "+,d" : "+,.0%");
  const tickFormat = metric === "absolute" ? d3.formatPrefix("+.1", 1e6) : format;

  // Create axis functions (converted from Observable)
  const xAxis = g => g
      .attr("transform", `translate(0,${margin.top})`)
      .call(d3.axisTop(x).ticks(width / 80).tickFormat(tickFormat))
      .call(g => g.select(".domain").remove());

  const yAxis = g => g
      .attr("transform", `translate(${x(0)},0)`)
      .call(d3.axisLeft(y).tickFormat(i => data[i].name).tickSize(0).tickPadding(6))
      .call(g => g.selectAll(".tick text").filter(i => data[i].value < 0)
          .attr("text-anchor", "start")
          .attr("x", 6));

  // Create the chart (converted from Observable chart cell)
  const svg = d3.select("#chart") // Changed: Select existing div instead of creating new SVG
      .append("svg")
      .attr("viewBox", [0, 0, width, height]);

  // Add lollipop lines
  svg.append("g")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 2)
      .selectAll("line")
      .data(data)
      .join("line")
      .attr("x1", x(0))
      .attr("x2", d => x(d.value))
      .attr("y1", (d, i) => y(i))
      .attr("y2", (d, i) => y(i));

  // Add axes
  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);

  // Add circles (lollipop heads)
  svg.append("g")
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("fill", d => d3.schemeSet1[d.value > 0 ? 1 : 0])
      .attr("cx", d => x(d.value))
      .attr("cy", (d, i) => y(i))
      .attr("r", 6);

  // Add value labels
  svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .selectAll("text")
      .data(data)
      .join("text")
      .attr("text-anchor", d => d.value < 0 ? "end" : "start")
      .attr("x", d => x(d.value) + Math.sign(d.value - 0) * 8)
      .attr("y", (d, i) => y(i) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .text(d => format(d.value));

}).catch(function(error) {
  // Changed: Added error handling for data loading
  console.error("Error loading data:", error);
  document.getElementById("chart").innerHTML = "<p>Error loading data. Please check if the file 'files/data.tsv' exists.</p>";
});
