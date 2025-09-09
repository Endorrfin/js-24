// Global variables for chart state
let data = [];
let chart = null;
let isStarting = false;
let animationInterval = null;

// Load CSV data using d3.csv
async function loadData() {
  try {
    // Use relative path to your CSV file
    data = await d3.csv("files/data.csv", d => ({
      value: +d.value,
      year: +d.year,
      age: +d.age,
      sex: d.sex
    }));

    console.log(`Loaded ${data.length} records`);
    createChart();
    setupControls();
  } catch (error) {
    console.error("Error loading data:", error);
    document.getElementById('chart').innerHTML =
        '<p style="padding: 20px; color: #e15759;">Error loading data.csv. Make sure the file is in the same directory as this HTML file.</p>';
  }
}

function createChart() {
  const width = 960;
  const height = 600;
  const marginTop = 15;
  const marginRight = 35;
  const marginBottom = 44;
  const marginLeft = 5;

  const yearStep = 1;
  const yearMin = d3.min(data, d => d.year);
  const delay = 1450;

  // Construct the scales
  const x = d3.scaleBand()
      .domain(Array.from(d3.group(data, d => d.age).keys()).sort(d3.ascending))
      .range([width - marginRight, marginLeft]);

  const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height - marginBottom, marginTop]);

  const color = d3.scaleOrdinal(["M", "F"], ["#4e79a7", "#e15759"]);
  // const color = d3.scaleOrdinal(["M", "F"], ["#BBFBFF", "#FEC5F6"]);

  // Create SVG and append to existing container
  const svg = d3.select("#chart")
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width)
      .attr("height", height)
      .attr("style", "max-width: 100%; height: auto;");

  // Add the axes
  svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x)
          .tickValues(d3.ticks(...d3.extent(data, d => d.age), width / 40))
          .tickSizeOuter(0))
      .call(g => g.append("text")
          .attr("x", marginRight)
          .attr("y", marginBottom - 4)
          .attr("fill", "currentColor")
          .attr("text-anchor", "middle")
          .text("← Age"));

  svg.append("g")
      .attr("transform", `translate(${width - marginRight},0)`)
      .call(d3.axisRight(y).ticks(null, "s"))
      .call(g => g.select(".domain").remove())
      .call(g => g.append("text")
          .attr("x", marginRight)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "end")
          .text("Population ↑"));

  const group = svg.append("g");
  let rect = group.selectAll("rect");

  // Return chart object with update method
  chart = {
    update(year) {
      const dx = x.step() * (year - yearMin) / yearStep;
      const t = svg.transition()
          .ease(d3.easeLinear)
          .duration(delay);

      rect = rect
          .data(data.filter(d => d.year === year), d => `${d.sex}:${d.year - d.age}`)
          .join(
              enter => enter.append("rect")
                  .style("mix-blend-mode", "darken")
                  .attr("fill", d => color(d.sex))
                  .attr("x", d => x(d.age) + dx)
                  .attr("y", d => y(0))
                  // .attr("width", x.bandwidth() + 1)
                  .attr("width", x.bandwidth() * 0.95)
                  // .attr("width", x.bandwidth() * 0.1)
                  .attr("height", 0),
              update => update,
              exit => exit.call(rect => rect.transition(t).remove()
                  .attr("y", y(0))
                  .attr("height", 0))
          );

      rect.transition(t)
          .attr("y", d => y(d.value))
          .attr("height", d => y(0) - y(d.value));

      group.transition(t)
          .attr("transform", `translate(${-dx},0)`);
    },
    scales: { color }
  };

  // Initial render
  chart.update(2019);
}

// Custom animation controls
function setupControls() {
  const yearSlider = document.getElementById('yearSlider');
  const yearDisplay = document.getElementById('yearDisplay');
  const startButton = document.getElementById('startButton');

  // Update chart when slider changes
  yearSlider.addEventListener('input', (e) => {
    const year = parseInt(e.target.value);
    yearDisplay.textContent = year;
    if (chart) {
      chart.update(year);
    }
  });

  // Start/pause functionality
  startButton.addEventListener('click', () => {
    if (isStarting) {
      stopAnimation();
    } else {
      startAnimation();
    }
  });

  function startAnimation() {
    isStarting = true;
    // startButton.textContent = 'Pause';
    startButton.textContent = '⏸️';

    const startYear = parseInt(yearSlider.value);
    let currentYear = startYear;

    animationInterval = setInterval(() => {
      currentYear++;
      if (currentYear > 2019) {
        currentYear = 1841; // ❗️Stop animation when reaching the end instead of looping
        stopAnimation();
        // return
      }

      yearSlider.value = currentYear;
      yearDisplay.textContent = currentYear;
      if (chart) {
        chart.update(currentYear);
      }
    }, 100); // Slightly slower for better readability
  }

  function stopAnimation() {
    isStarting = false;
    // startButton.textContent = 'Start';
    startButton.textContent = '▶️';
    if (animationInterval) {
      clearInterval(animationInterval);
      animationInterval = null;
    }
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', loadData);
