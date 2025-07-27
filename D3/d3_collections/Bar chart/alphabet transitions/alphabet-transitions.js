// Global variables to store data and chart instance
let data = [];
let chart = null;

// Sort order functions moved to global scope
const sortOrders = {
  alphabetical: (a, b) => a.letter.localeCompare(b.letter),
  'frequency-ascending': (a, b) => a.frequency - b.frequency,
  'frequency-descending': (a, b) => b.frequency - a.frequency
};

// Chart creation function adapted from Observable reactive cell
function createChart(data) {
  // Clear any existing chart
  d3.select("#chart").selectAll("*").remove();

  // Specify the chart's dimensions
  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20; // Added right margin for better readability
  const marginBottom = 40; // Increased bottom margin for labels
  const marginLeft = 60;   // Increased left margin for y-axis labels

  // Create scales with initial alphabetical order
  const x = d3.scaleBand()
      .domain(data.sort(sortOrders.alphabetical).map(d => d.letter))
      .range([marginLeft, width - marginRight])
      .padding(0.1);

  const xAxis = d3.axisBottom(x).tickSizeOuter(0);

  const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.frequency)]).nice()
      .range([height - marginBottom, marginTop]);

  // Improved y-axis formatting for better readability
  const yAxis = d3.axisLeft(y)
      .tickFormat(d => (d * 100).toFixed(1) + "%")
      .tickSizeOuter(0);

  // Create the SVG container
  const svg = d3.select("#chart")
      .append("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("style", `max-width: ${width}px; height: auto; font: 12px sans-serif;`);

  // Create bars with improved styling
  const bar = svg.append("g")
      .attr("fill", "steelblue")
      .selectAll("rect")
      .data(data, d => d.letter) // Added key function for object constancy
      .join("rect")
      .style("mix-blend-mode", "multiply")
      .attr("x", d => x(d.letter))
      .attr("y", d => y(d.frequency))
      .attr("height", d => y(0) - y(d.frequency))
      .attr("width", x.bandwidth())
      .style("cursor", "pointer") // Added cursor for better UX
      .on("mouseover", function(event, d) {
        // Added hover effects for better interactivity
        d3.select(this).attr("fill", "orange");

        // Add tooltip
        const tooltip = svg.append("g")
            .attr("id", "tooltip")
            .attr("transform", `translate(${x(d.letter) + x.bandwidth()/2}, ${y(d.frequency) - 10})`);

        const rect = tooltip.append("rect")
            .attr("fill", "black")
            .attr("fill-opacity", 0.8)
            .attr("rx", 3);

        const text = tooltip.append("text")
            .attr("fill", "white")
            .attr("text-anchor", "middle")
            .attr("dy", "0.35em")
            .style("font-size", "12px")
            .text(`${d.letter}: ${(d.frequency * 100).toFixed(2)}%`);

        const bbox = text.node().getBBox();
        rect.attr("x", bbox.x - 4)
            .attr("y", bbox.y - 2)
            .attr("width", bbox.width + 8)
            .attr("height", bbox.height + 4);
      })
      .on("mouseout", function(event, d) {
        d3.select(this).attr("fill", "steelblue");
        svg.select("#tooltip").remove();
      });

  // Create the axes
  const gx = svg.append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(xAxis);

  const gy = svg.append("g")
      .attr("class", "axis")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(yAxis);

  // Add axis labels for better readability
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 15)
      .attr("x", -(height / 2))
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .style("fill", "#333")
      .text("Frequency (%)");

  svg.append("text")
      .attr("transform", `translate(${width / 2}, ${height - 5})`)
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .style("fill", "#333")
      .text("Letter");

  // Return object with update method for transitions
  return {
    update(orderKey) {
      const sortFn = sortOrders[orderKey];
      if (!sortFn) return;

      // Update x domain with new order
      x.domain(data.sort(sortFn).map(d => d.letter));

      const t = svg.transition()
          .duration(750)
          .ease(d3.easeLinear);

      // Animate bars
      bar.data(data, d => d.letter)
          .order()
          .transition(t)
          .delay((d, i) => i * 20)
          .attr("x", d => x(d.letter));

      // Animate x-axis
      gx.transition(t)
          .call(xAxis)
          .selectAll(".tick")
          .delay((d, i) => i * 20);
    }
  };
}

// Data loading function using d3.csv instead of FileAttachment
async function loadData() {
  try {
    // Load CSV data from local file
    const rawData = await d3.csv("files/data.csv", d3.autoType);

    // Process and validate data
    data = rawData.map(d => ({
      letter: String(d.letter).toUpperCase(),
      frequency: +d.frequency
    })).filter(d => d.letter && !isNaN(d.frequency));

    if (data.length === 0) {
      throw new Error("No valid data found in CSV file");
    }

    // Hide loading, create chart
    document.getElementById("loading").style.display = "none";
    chart = createChart(data);

    // Set up dropdown event listener
    const select = document.getElementById("order-select");
    select.addEventListener("change", function() {
      if (chart) {
        chart.update(this.value);
      }
    });

    // Auto-animate on load (demo purposes)
    setTimeout(() => {
      if (chart && select.selectedIndex === 0) {
        select.selectedIndex = 2; // Switch to frequency-descending
        select.dispatchEvent(new Event("change"));
      }
    }, 2000);

  } catch (error) {
    // Better error handling
    console.error("Error loading data:", error);
    document.getElementById("loading").style.display = "none";
    const errorDiv = document.getElementById("error");
    errorDiv.textContent = `Error loading data: ${error.message}. Please ensure the CSV file is in the 'files/' directory.`;
    errorDiv.style.display = "block";
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", loadData);
