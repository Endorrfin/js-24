
// Color scheme for different nesting levels
const levelColors = [
  "#9A1BA0",  // Root level (flare)
  "#01937C",  // Level 1
  "#DC2525",  // Level 2
  "#4300FF",  // Level 3
  "#EB5B00",  // Level 4
  "#9b59b6",  // Level 5
  "#FFCC00",  // Level 6
  "#113F67",  // Level 7
  "#748873",  // Level 8
  "#4ED7F1",  // Level 9
  "#98A1BC",  // Level 10
  "#004030",  // Level 11
  "#A4DD00",  // Level 12
];

// Function to get color based on node depth
function getNodeColor(node) {
  return levelColors[Math.min(node.depth, levelColors.length - 1)];
}

// Function to create color legend
function createLegend() {
  const legendItems = document.getElementById('legend-items');
  // const levelNames = [
  //   "Root (flare)",
  //   "Level 1 (analytics, animate, data, etc.)",
  //   "Level 2 (cluster, graph, optimization, etc.)",
  //   "Level 3 (deeper nesting)",
  //   "Level 4 (even deeper)",
  //   "Level 5 (deepest)",
  //   "Level 6+ (fallback)"
  // ];

  const levelNames = [
    "Root",
    "Level 1",
    "Level 2",
    "Level 3",
    "Level 4",
    "Level 5",
    "Level 6",
    "Level 7",
    "Level 8",
    "Level 9",
    "Level 10",
    "Level 11",
    "Level 12",
  ];

  levelColors.forEach((color, index) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `
        <span class="legend-color" style="background-color: ${color}"></span>
        <span>${levelNames[index]}</span>
      `;
    legendItems.appendChild(item);
  });
}

// Load data from external JSON file instead of embedding
async function loadData() {
  try {
    const response = await fetch('files/flare.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('⚪️💽 DATA', data)
    return data;
  } catch (error) {
    console.error('Error loading data:', error);
    // Fallback error message
    alert('Could not load data from files/flare.json. Please ensure the file exists and path is correct.');
    return null;
  }
}

// Made chart creation async to handle data loading
async function createChart() {
  const data = await loadData();
  if (!data) return null;
  // Specify the charts' dimensions. The height is variable, depending on the layout.
  const width = 928;
  const marginTop = 10;
  const marginRight = 10;
  const marginBottom = 10;
  const marginLeft = 40;

  // Rows are separated by dx pixels, columns by dy pixels. These names can be counter-intuitive
  // (dx is a height, and dy a width). This because the tree must be viewed with the root at the
  // "bottom", in the data domain. The width of a column is based on the tree's height.
  const root = d3.hierarchy(data);
  const dx = 10;
  const dy = (width - marginRight - marginLeft) / (1 + root.height);

  // Define the tree layout and the shape for links.
  const tree = d3.tree().nodeSize([dx, dy]);
  const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);

  // Create the SVG container, a layer for the links and a layer for the nodes.
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", dx)
      .attr("viewBox", [-marginLeft, -marginTop, width, dx])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif; user-select: none;");

  const gLink = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5);

  const gNode = svg.append("g")
      .attr("cursor", "pointer")
      .attr("pointer-events", "all");

  function update(event, source) {
    const duration = event?.altKey ? 2500 : 250; // hold the alt key to slow down the transition
    const nodes = root.descendants().reverse();
    const links = root.links();

    // Compute the new tree layout.
    tree(root);

    let left = root;
    let right = root;
    root.eachBefore(node => {
      if (node.x < left.x) left = node;
      if (node.x > right.x) right = node;
    });

    const height = right.x - left.x + marginTop + marginBottom;

    const transition = svg.transition()
        .duration(duration)
        .attr("height", height)
        .attr("viewBox", [-marginLeft, left.x - marginTop, width, height])
        .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

    // Update the nodes…
    const node = gNode.selectAll("g")
        .data(nodes, d => d.id);

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node.enter().append("g")
        .attr("transform", d => `translate(${source.y0},${source.x0})`)
        .attr("fill-opacity", 0)
        .attr("stroke-opacity", 0)
        .on("click", (event, d) => {
          d.children = d.children ? null : d._children;
          update(event, d);
        });

    nodeEnter.append("circle")
        .attr("r", 2.5)
        .attr("fill", d => getNodeColor(d)) // CHANGE: Use depth-based color instead of hardcoded colors
        .attr("stroke-width", 10);

    nodeEnter.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d._children ? -6 : 6)
        .attr("text-anchor", d => d._children ? "end" : "start")
        .text(d => d.data.name)
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
        .attr("stroke", "white")
        .attr("paint-order", "stroke");

    // Transition nodes to their new position.
    const nodeUpdate = node.merge(nodeEnter).transition(transition)
        .attr("transform", d => `translate(${d.y},${d.x})`)
        .attr("fill-opacity", 1)
        .attr("stroke-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    const nodeExit = node.exit().transition(transition).remove()
        .attr("transform", d => `translate(${source.y},${source.x})`)
        .attr("fill-opacity", 0)
        .attr("stroke-opacity", 0);

    // Update the links…
    const link = gLink.selectAll("path")
        .data(links, d => d.target.id);

    // Enter any new links at the parent's previous position.
    const linkEnter = link.enter().append("path")
        .attr("d", d => {
          const o = {x: source.x0, y: source.y0};
          return diagonal({source: o, target: o});
        });

    // Transition links to their new position.
    link.merge(linkEnter).transition(transition)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition(transition).remove()
        .attr("d", d => {
          const o = {x: source.x, y: source.y};
          return diagonal({source: o, target: o});
        });

    // Stash the old positions for transition.
    root.eachBefore(d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  // Do the first update to the initial configuration of the tree — where a number of nodes
  // are open (arbitrarily selected as the root, plus nodes with 7 letters).
  root.x0 = dy / 2;
  root.y0 = 0;
  root.descendants().forEach((d, i) => {
    d.id = i;
    d._children = d.children;
    if (d.depth && d.data.name.length !== 7) d.children = null;
  });

  update(null, root);

  return svg.node();
}

// Made async to handle data loading with proper error handling
document.addEventListener('DOMContentLoaded', async function() {
  const chartContainer = document.getElementById('chart-container');
  try {
    const chart = await createChart();
    if (chart) {
      chartContainer.appendChild(chart);
      createLegend(); // Create legend after successful chart creation
    } else {
      chartContainer.innerHTML = '<p>Failed to load chart. Please check console for details.</p>';
    }
  } catch (error) {
    console.error('Error creating chart:', error);
    chartContainer.innerHTML = '<p>Error creating chart. Please check console for details.</p>';
  }
});






