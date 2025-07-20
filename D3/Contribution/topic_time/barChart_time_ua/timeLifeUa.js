
const data = [
  { activity: "Сон", years: 27 },
  { activity: "Робота", years: 11 },
  { activity: "Знаходимось в дорозі", years: 8.5 },
  { activity: "Переглядаємо екран", years: 7.6 },
  { activity: "Прийом їжі", years: 5 },
  { activity: "Хворіємо", years: 2.8 },
  { activity: "Ходимо в школу", years: 2.6 },
  { activity: "Читаємо", years: 2.3 },
  { activity: "Куримо", years: 2.0 },
  { activity: "Нічого не робимо", years: 1.5 },
  { activity: "Особиста гігієна", years: 1.5 },
  { activity: "Граємо", years: 1 },
  { activity: "Робимо покупки", years: 0.8 },
  { activity: "Інтимні відносини", years: 0.2 },
  { activity: "Займаємося спортом", years: 0.2 },
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
