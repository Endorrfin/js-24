// Global variables
let data = [];
let chart;
let us;
let isPlaying = false;
let animationId;
let currentDateIndex = 0;
// Added speed control variables
let animationSpeed = 1; // 1x normal speed
let baseDelay = 50; // Base delay in milliseconds

// Date parser - updated for MM/DD/YYYY format in CSV
const parseDate = d3.timeParse("%m/%d/%Y");

// Projection setup
const projection = d3.geoAlbersUsa().scale(1280).translate([480, 300]);

// Load and initialize data
async function loadData() {
  try {
    // Updated to load local CSV file with proper error handling
    const csvText = await fetch('./files/data.csv').then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    });

    // Parse CSV data and transform coordinates
    const rawData = d3.csvParse(csvText);

    data = rawData
        .map(d => {
          // Convert lng/lat to projected coordinates
          const coords = projection([+d['0'], +d['1']]);
          if (!coords) return null; // Skip if projection fails

          return {
            x: coords[0],
            y: coords[1],
            date: parseDate(d.date)
          };
        })
        .filter(d => d && d.date) // Remove invalid entries
        .sort((a, b) => a.date - b.date);

    console.log(`Loaded ${data.length} Walmart locations`);
    return data;
  } catch (error) {
    console.error('Error loading data:', error);
    alert('Error loading data. Make sure the CSV file is at ./files/data.csv');
    return [];
  }
}

// Load US topology data
async function loadUS() {
  try {
    us = await d3.json("https://cdn.jsdelivr.net/npm/us-atlas@1/us/10m.json");
    // Filter to lower 48 states
    us.objects.lower48 = {
      type: "GeometryCollection",
      geometries: us.objects.states.geometries.filter(d => d.id !== "02" && d.id !== "15")
    };
    return us;
  } catch (error) {
    console.error('Error loading US map:', error);
    return null;
  }
}

// Create chart
function createChart() {
  const svg = d3.select("#chart")
      .append("svg")
      .attr("viewBox", [0, 0, 960, 600])
      .attr("width", "100%")
      .attr("height", "auto");

  // Draw US map background
  svg.append("path")
      .datum(topojson.merge(us, us.objects.lower48.geometries))
      .attr("fill", "#ddd")
      .attr("d", d3.geoPath());

  // Draw state borders
  svg.append("path")
      .datum(topojson.mesh(us, us.objects.lower48, (a, b) => a !== b))
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", d3.geoPath());

  // Create dots group
  const g = svg.append("g")
      .attr("fill", "red")
      .attr("stroke", "black")
      .attr("stroke-width", 0.5);

  // Create all dots (initially hidden)
  const dots = g.selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", 0);

  // Highlight first store in blue
  if (data.length > 0) {
    svg.append("circle")
        .attr("fill", "blue")
        .attr("cx", data[0].x)
        .attr("cy", data[0].y)
        .attr("r", 4)
        .attr("stroke", "white")
        .attr("stroke-width", 1);
  }

  return { svg, dots };
}

// Update visualization for specific date
function updateChart(targetDate) {
  if (!chart) return;

  const { dots } = chart;

  // Show dots for stores opened by target date
  dots.transition()
      .duration(50)
      .attr("r", d => d.date <= targetDate ? 2.5 : 0);
}

// Animation functions
function animate() {
  if (!isPlaying || currentDateIndex >= data.length - 1) {
    isPlaying = false;
    return;
  }

  currentDateIndex++;
  const currentDate = data[currentDateIndex].date;

  updateChart(currentDate);
  updateControls();

  // Continue animation with speed adjustment
  const delay = baseDelay / animationSpeed;
  animationId = setTimeout(animate, delay);
}

function play() {
  if (currentDateIndex >= data.length - 1) {
    reset();
  }
  isPlaying = true;
  animate();
}

function pause() {
  isPlaying = false;
  if (animationId) {
    clearTimeout(animationId);
  }
}

function reset() {
  pause();
  currentDateIndex = 0;
  updateChart(data[0].date);
  updateControls();
}

// Added speed control functions
function increaseSpeed() {
  if (animationSpeed < 4) {
    animationSpeed *= 2;
    updateSpeedDisplay();
  }
}

function decreaseSpeed() {
  if (animationSpeed > 0.25) {
    animationSpeed /= 2;
    updateSpeedDisplay();
  }
}

function updateSpeedDisplay() {
  const speedDisplay = document.getElementById('speedDisplay');
  speedDisplay.textContent = `Speed: ${animationSpeed}x`;
}

// Update control elements
function updateControls() {
  const slider = document.getElementById('dateSlider');
  const display = document.getElementById('dateDisplay');
  const counter = document.getElementById('storeCounter'); // Added store counter element

  if (data.length > 0) {
    const progress = (currentDateIndex / (data.length - 1)) * 100;
    slider.value = progress;
    display.textContent = data[currentDateIndex].date.getFullYear();

    // Update store counter - count stores opened by current date
    const currentDate = data[currentDateIndex].date;
    const storeCount = data.filter(d => d.date <= currentDate).length;
    counter.textContent = `Stores: ${storeCount}`;
  }
}

// Event listeners for controls
function setupControls() {
  document.getElementById('playBtn').addEventListener('click', play);
  document.getElementById('pauseBtn').addEventListener('click', pause);
  document.getElementById('resetBtn').addEventListener('click', reset);

  // Added speed control event listeners
  document.getElementById('fasterBtn').addEventListener('click', increaseSpeed);
  document.getElementById('slowerBtn').addEventListener('click', decreaseSpeed);

  // Slider control
  document.getElementById('dateSlider').addEventListener('input', (e) => {
    pause();
    const progress = e.target.value / 100;
    currentDateIndex = Math.floor(progress * (data.length - 1));
    updateChart(data[currentDateIndex].date);
    updateControls();
  });
}

// Initialize everything
async function init() {
  console.log('Loading data...');

  // Load data and US map in parallel
  const [loadedData, loadedUS] = await Promise.all([loadData(), loadUS()]);

  if (loadedData.length === 0 || !loadedUS) {
    console.error('Failed to load required data');
    return;
  }

  console.log('Creating chart...');
  chart = createChart();
  setupControls();
  updateSpeedDisplay(); // Initialize speed display

  // Initialize with first date
  updateChart(data[0].date);
  updateControls();

  console.log('Visualization ready!');
}

// Start initialization when page loads
init().catch(console.error);
