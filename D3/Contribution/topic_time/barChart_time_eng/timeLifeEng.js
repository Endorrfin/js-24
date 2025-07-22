
const data = [
  { activity: "Sleep", years: 27 },
  { activity: "Work", years: 11 },
  { activity: "Commuting or traveling", years: 8.5 },
  { activity: "Watch movie", years: 7.6 },
  { activity: "Meals", years: 5.5 },
  { activity: "Sickness", years: 2.8 },
  { activity: "Schooling", years: 2.6 },
  { activity: "Reading", years: 2.3 },
  { activity: "Smoking", years: 2.0 },
  { activity: "Doing nothing", years: 1.5 },
  { activity: "Personal hygiene", years: 1.5 },
  { activity: "Playing", years: 1 },
  { activity: "Shopping", years: 0.8 },
  { activity: "Intimate relationships", years: 0.2 },
  { activity: "Exercising", years: 0.2 },
];

// Set dimensions
const margin = { top: 20, right: 30, bottom: 100, left: 60 },
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Create SVG container
const svg = d3.select("svg")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// X scale
const x = d3.scaleBand()
    .domain(data.map(d => d.activity))
    .range([0, width])
    .padding(0.1);

// Y scale
const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.years)])
    .range([height, 0]);

// Draw bars
svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.activity))
    .attr("y", d => y(d.years))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.years));

// X-axis
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");

// Y-axis
svg.append("g")
    .call(d3.axisLeft(y));
