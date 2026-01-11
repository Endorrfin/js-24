// Initialization global variables
let data = [];
let keyframes = [];
let chart = null;
let currentKeyframeIndex = 0;
let isStarting = false;
let animationId = null;

// Configuration constants
const duration = 200;
const n = 18;
const k = 10;
const barSize = 38;
const margin = {top: 16, right: 6, bottom: 6, left: 0};
const width = 1200;
const height = margin.top + barSize * n + margin.bottom;

// Utility functions
const formatDate = d3.utcFormat("%Y");
const formatNumber = d3.format(",d");
const parseNumber = string => +string.replace(/,/g, "");

// Scales setup
const x = d3.scaleLinear([0, 1], [margin.left, width - margin.right]);
const y = d3.scaleBand()
    .domain(d3.range(n + 1))
    .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
    .padding(0.1);

// Color scale function
function createColorScale(data) {
  // CHANGED: Custom color mapping for each industry category
  const industryColors = {
    // 'Technology': '#4A90E2',        // Blue
    // 'Technology': '#5A7ACD',        // Blue
    'Technology': '#0079FF',        // Blue
    // 'Technology': '#4636FC',        // Blue
    // 'Automotive': '#9B59B6',        // Purple
    // 'Automotive': '#C0E218',        // Purple
    'Automotive': '#720455',        // Purple
    // 'Beverages': '#E74C3C',         // Red
    // 'Beverages': '#FFEA20',         // Yellow
    // 'Beverages': '#FF9551',         // Yellow
    'Beverages': '#EA2F14',         // Orange
    // 'Restaurants': '#F39C12',       // Orange
    // 'Restaurants': '#D32F2F',       // Red
    // 'Restaurants': '#7C203A',       // Red
    // 'Restaurants': '#FC6736',       // Red
    'Restaurants': '#B31312',       // Red
    // 'Media': '#E91E63',             // Pink
    'Media': '#FF0080',             // Pink
    'Business Services': '#27AE60', // Green
    'Financial Services': '#CCFFBD', // Teal
    'Sporting Goods': '#34495E',    // Dark gray
    'Luxury': '#D4AF37',            // Gold
    'FMCG': '#95A5A6',              // Light gray
    'Diversified': '#00F7FF',        // Cyan
    'Telecommunications': '#CBDCEB',        // Cyan
    // 'Tobacco': '#896C6C'        // Brown
    // 'Tobacco': '#BB6653',        // Brown
    // 'Tobacco': '#748873',        // Brown
    'Tobacco': '#A67C00',        // Brown
    // 'Electronics': '#1572A1',        // Brown
    'Electronics': '#000080',        // Brown
  };

  if (data.some(d => d.category !== undefined)) {
    const categoryByName = new Map(data.map(d => [d.name, d.category]));

    // CHANGED: Use custom color mapping
    return d => {
      const category = categoryByName.get(d.name);
      return industryColors[category] || '#999999'; // Fallback gray for unmapped categories
    };
  }

  // Fallback to default scheme if no categories
  const scale = d3.scaleOrdinal(d3.schemePaired);
  return d => scale(d.name);
}

// function createColorScale(data) {
//   // const scale = d3.scaleOrdinal(d3.schemeTableau10);
//   const scale = d3.scaleOrdinal(d3.schemePaired);
//   if (data.some(d => d.category !== undefined)) {
//     const categoryByName = new Map(data.map(d => [d.name, d.category]));
//     scale.domain([...new Set(categoryByName.values())]);
//     return d => scale(categoryByName.get(d.name));
//   }
//   return d => scale(d.name);
// }

// Data processing functions
function processData(rawData) {
  const names = new Set(rawData.map(d => d.name));

  const datevalues = Array.from(d3.rollup(rawData, ([d]) => d.value, d => +d.date, d => d.name))
      .map(([date, data]) => [new Date(date), data])
      .sort(([a], [b]) => d3.ascending(a, b));

  // console.log('📈 sort data values', datevalues)

  function rank(value) {
    const data = Array.from(names, name => ({name, value: value(name)}));
    data.sort((a, b) => d3.descending(a.value, b.value));
    for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
    // console.log('🏔️ rank data', data)
    return data;
  }

  const keyframes = [];
  let ka, a, kb, b;
  for ([[ka, a], [kb, b]] of d3.pairs(datevalues)) {
    for (let i = 0; i < k; ++i) {
      const t = i / k;
      keyframes.push([
        new Date(ka * (1 - t) + kb * t),
        rank(name => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t)
      ]);
    }
  }
  keyframes.push([new Date(kb), rank(name => b.get(name) || 0)]);
  return keyframes;
}

// Chart creation functions
function createChart() {
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);

  const color = createColorScale(data);

  // Chart update functions
  const updateBars = createBarsUpdater(svg, color);
  const updateAxis = createAxisUpdater(svg);
  const updateLabels = createLabelsUpdater(svg);
  // const updateTicker = createTickerUpdater(svg);

  return {
    node: svg.node(),
    update(keyframe) {
      const transition = svg.transition()
          .duration(duration)
          .ease(d3.easeLinear);

      // Extract the top bar's value
      x.domain([0, keyframe[1][0].value]);

      updateAxis(keyframe, transition);
      updateBars(keyframe, transition);
      updateLabels(keyframe, transition);
      // updateTicker(keyframe, transition);
    }
  };
}

// Individual update functions
function createBarsUpdater(svg, color) {
  console.log('Color', color)
  let bar = svg.append("g")
      .attr("fill-opacity", 0.6)
      .selectAll("rect");

  return ([date, data], transition) => bar = bar
      .data(data.slice(0, n), d => d.name)
      .join(
          enter => enter.append("rect")
              .attr("fill", color)
              .attr("height", y.bandwidth())
              .attr("x", x(0))
              .attr("y", y(n))
              .attr("width", d => x(d.value) - x(0)),
          update => update,
          exit => exit.transition(transition).remove()
              .attr("y", y(n))
              .attr("width", d => x(d.value) - x(0))
      )
      .call(bar => bar.transition(transition)
          .attr("y", d => y(d.rank))
          .attr("width", d => x(d.value) - x(0)));
}

function createLabelsUpdater(svg) {
  let label = svg.append("g")
      .style("font", "bold 12px var(--sans-serif)")
      .style("font-variant-numeric", "tabular-nums")
      .attr("text-anchor", "end")
      .selectAll("text");

  return ([date, data], transition) => label = label
      .data(data.slice(0, n), d => d.name)
      .join(
          enter => enter.append("text")
              .attr("transform", d => `translate(${x(d.value)},${y(n)})`)
              .attr("y", y.bandwidth() / 2)
              .attr("x", -6)
              .attr("dy", "-0.25em")
              .text(d => d.name)
              .call(text => text.append("tspan")
                  .attr("fill-opacity", 0.7)
                  .attr("font-weight", "normal")
                  .attr("x", -6)
                  .attr("dy", "1.15em")),
          update => update,
          exit => exit.transition(transition).remove()
              .attr("transform", d => `translate(${x(d.value)},${y(n)})`)
      )
      .call(bar => bar.transition(transition)
          .attr("transform", d => `translate(${x(d.value)},${y(d.rank)})`)
          .call(g => g.select("tspan").tween("text", function(d) {
            return textTween(parseNumber(this.textContent), d.value);
          })));
}

function createAxisUpdater(svg) {
  const g = svg.append("g")
      .attr("transform", `translate(0,${margin.top})`);

  const axis = d3.axisTop(x)
      .ticks(width / 160)
      .tickSizeOuter(0)
      .tickSizeInner(-barSize * (n + y.padding()));

  return (_, transition) => {
    g.transition(transition).call(axis);
    g.select(".tick:first-of-type text").remove();
    g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "white");
    g.select(".domain").remove();
  };
}

function textTween(a, b) {
  const i = d3.interpolateNumber(a, b);
  return function(t) {
    this.textContent = formatNumber(i(t));
  };
}

// Scrubber functionality
function initializeScrubber() {
  const startButton = document.getElementById('startButton');
  const slider = document.getElementById('scrubberSlider');
  const yearDisplay = document.getElementById('yearDisplay');

  // Set slider max to keyframes length
  slider.max = keyframes.length - 1;

  // Play/pause functionality
  startButton.addEventListener('click', () => {
    if (isStarting) {
      stopAnimation();
    } else {
      startAnimation();
    }
  });

  // Slider change functionality
  slider.addEventListener('input', (e) => {
    const index = parseInt(e.target.value);
    goToKeyframe(index);
  });

  // Initialize display
  updateUI();
}

function startAnimation() {
  isStarting = true;
  document.getElementById('startButton').textContent = 'Pause';
  animate();
}

function stopAnimation() {
  isStarting = false;
  document.getElementById('startButton').textContent = 'Start';
  if (animationId) {
    clearTimeout(animationId);
    animationId = null;
  }
}

function animate() {
  if (!isStarting) return;

  currentKeyframeIndex++;

  if (currentKeyframeIndex >= keyframes.length) {
    // currentKeyframeIndex = 0; // Loop back to start
    stopAnimation(); // Stop instead of looping to start
    return;
  }

  goToKeyframe(currentKeyframeIndex);

  animationId = setTimeout(animate, duration);
}

function goToKeyframe(index) {
  currentKeyframeIndex = Math.max(0, Math.min(index, keyframes.length - 1));
  const keyframe = keyframes[currentKeyframeIndex];

  if (chart && keyframe) {
    chart.update(keyframe);
  }

  updateUI();
}

function updateUI() {
  const slider = document.getElementById('scrubberSlider');
  const yearDisplay = document.getElementById('yearDisplay');

  slider.value = currentKeyframeIndex;

  if (keyframes[currentKeyframeIndex]) {
    const [date] = keyframes[currentKeyframeIndex];
    yearDisplay.textContent = formatDate(date);
  }
}

// Main initialization function
async function initialize() {
  try {
    // Load data using d3.csv
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');

    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';

    data = await d3.csv('./files/data.csv', d => ({
      date: new Date(d.date),
      name: d.name,
      category: d.category,
      value: +d.value
    }));

    // console.log('⚪️💽 DATA', data)

    // Process data to create keyframes
    keyframes = processData(data);

    // Create and mount chart
    chart = createChart();
    document.getElementById('chart').appendChild(chart.node);

    // Initialize scrubber
    initializeScrubber();

    // Start with first keyframe
    goToKeyframe(0);

    loadingElement.style.display = 'none';

  } catch (error) {
    console.error('Error loading data:', error);
    document.getElementById('loading').style.display = 'none';
    const errorElement = document.getElementById('error');
    errorElement.textContent = `Error loading data: ${error.message}. Make sure the CSV file is at './files/category-brands.csv'`;
    errorElement.style.display = 'block';
  }
}

// Start initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initialize);

