// Global variables for debugging and state management
let originalData = null;
let currentData = null;

// Load data and initialize
async function loadDataAndCreateChart() {
  try {
    // console.log('🔹 Loading data...');
    const data = await d3.json('./files/data_eng.json');
    // console.log('🔹 Original data loaded:', data);

    // Store original data
    originalData = data;

    // Initialize with collapsed state
    currentData = initializeCollapsedState(JSON.parse(JSON.stringify(data)));
    // console.log('🔹 Data after collapse initialization:', currentData);

    // Clear loading message
    document.getElementById('chart-container').innerHTML = '';

    // Create the chart
    createChart();

    // Create legend
    createLegend(originalData);

  } catch (error) {
    console.error('Error loading data:', error);
    document.getElementById('chart-container').innerHTML =
        '<div class="error">Error loading data. Please make sure the file "files/example_ua_settlements.json" exists and is accessible.</div>';
  }
}

// Fixed collapse initialization - collapse ALL children initially
function initializeCollapsedState(data) {
  // console.log('🔹 Initializing collapsed state for:', data.name);

  function collapseAllChildren(node) {
    if (node.children && node.children.length > 0) {
      // Store original children in _children
      node._children = node.children;
      // Remove children so they're not visible
      node.children = null;
      // console.log(`🔸 Collapsed node: ${node.name}, children moved to _children:`, node._children.length);

      // Recursively collapse all descendants
      node._children.forEach(collapseAllChildren);
    }
  }

  // Collapse ALL children from root - start completely collapsed
  if (data.children && data.children.length > 0) {
    // Move all top-level children to _children (collapsed)
    data._children = data.children;
    data.children = null;
    // console.log(`🔸 Root collapsed: ${data._children.length} top-level children moved to _children`);

    // Recursively collapse all descendants
    data._children.forEach(collapseAllChildren);
  }

  return data;
}

// Fixed toggle function to work with data structure
function toggleNode(d) {
  // console.log('🔹 Toggle clicked for node:', d.data.name);
  // console.log('🔹 Node state - children:', !!d.children, '_children:', !!d.data._children);

  // Work with the original data object, not the hierarchy node
  const dataNode = d.data;

  if (dataNode._children) {
    // Expand: move from _children to children
    dataNode.children = dataNode._children;
    dataNode._children = null;
    // console.log(`🔸 Expanded ${dataNode.name}`);
  } else if (dataNode.children) {
    // Collapse: move from children to _children
    dataNode._children = dataNode.children;
    dataNode.children = null;
    // console.log(`🔸 Collapsed ${dataNode.name}`);
  }

  // Update the chart
  createChart();
}

// Fixed chart creation with proper children accessor
function createChart() {
  // console.log('🔹 Creating chart with current data...');

  const format = d3.format(",");
  const nodeSize = 25;

  // Use custom children accessor that respects collapsed state
  // This is the key fix - only show children if they exist, ignore _children
  const root = d3.hierarchy(currentData, d => d.children);
  // console.log('🔹 Hierarchy created, total visible nodes:', root.descendants().length);

  // Add index to each node for positioning
  root.eachBefore((d, i) => d.index = i);

  const nodes = root.descendants();
  const width = 1000;
  const height = (nodes.length + 1) * nodeSize;

  // Color scale
  const colorScale = d3.scaleOrdinal()
      .domain([0, 1, 2, 3, 4, 5])
      .range(['#2c3e50', '#3498db', '#e74c3c', '#f39c12', '#27ae60', '#9b59b6']);

  const columns = [
    {
      label: "Population 2001",
      value: d => d.value,
      format,
      x: 320
    },
    {
      label: "Count",
      value: d => d.children ? 0 : 1,
      format: (value, d) => d.children ? format(value) : "-",
      x: 400
    }
  ];

  // Clear and create new SVG
  const container = document.getElementById('chart-container');
  container.innerHTML = '';

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-nodeSize / 2, -nodeSize * 3 / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 12px sans-serif; overflow: visible;");

  // Links
  const link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 1.5)
      .selectAll()
      .data(root.links())
      .join("path")
      .attr("d", d => `
        M${d.source.depth * nodeSize},${d.source.index * nodeSize}
        V${d.target.index * nodeSize}
        h${nodeSize}
      `);

  // Node groups
  const node = svg.append("g")
      .selectAll()
      .data(nodes)
      .join("g")
      .attr("class", "tree-node")
      .attr("transform", d => `translate(0,${d.index * nodeSize})`);

  // Fixed node state detection - check data._children
  node.each(function(d) {
    const hasChildren = !!(d.children || d.data._children);
    const isExpanded = !!d.children;
    // console.log(`🔸 Node ${d.data.name}: hasChildren=${hasChildren}, isExpanded=${isExpanded}, _children count=${d.data._children?.length || 0}`);
  });

  const circles = node.append("circle")
      .attr("class", "node-circle")
      .attr("cx", d => d.depth * nodeSize)
      .attr("r", d => (d.children || d.data._children) ? 8 : 3) // CHANGE: Increased expandable circle size from 6 to 8
      .attr("fill", d => {
        if (d.data._children) return "#fff"; // Collapsed - white
        if (d.children) return "#fff";       // Expanded - white
        return colorScale(d.depth);          // Leaf - colored
      })
      .attr("stroke", d => colorScale(d.depth))
      .attr("stroke-width", d => (d.children || d.data._children) ? 2 : 1)
      .style("cursor", d => (d.children || d.data._children) ? "pointer" : "default")
      .on("click", function(event, d) {
        // console.log('🔹 Circle clicked!', d.data.name);
        event.stopPropagation();
        if (d.children || d.data._children) {
          toggleNode(d);
        }
      });

  // Improved plus/minus indicators with perfect centering
  const indicators = node.append("text")
      .attr("class", "expand-text")
      .attr("x", d => d.depth * nodeSize) // Center horizontally on circle
      .attr("y", 0) // Center vertically (0 is baseline center)
      .attr("dy", "0.35em") // Fine-tune vertical alignment
      .attr("text-anchor", "middle") // Ensure horizontal centering
      .attr("fill", d => colorScale(d.depth))
      .attr("font-size", "14px") // Slightly larger font for better visibility
      .attr("font-weight", "bold")
      .style("pointer-events", "none")
      .text(d => {
        if (d.data._children) {
          // console.log(`🔸 Adding + indicator for ${d.data.name}`);
          return "+";
        }
        if (d.children) {
          // console.log(`🔸 Adding - indicator for ${d.data.name}`);
          return "-";
        }
        return "";
      })
      .style("display", d => (d.children || d.data._children) ? "block" : "none");

  // Node labels
  node.append("text")
      .attr("class", "tree-text")
      .attr("dy", "0.35em")
      .attr("x", d => d.depth * nodeSize + 14) // Increased spacing from 12 to 14 for larger circles
      .attr("fill", d => colorScale(d.depth))
      .attr("font-weight", d => (d.children || d.data._children) ? "600" : "400")
      .text(d => d.data.name);

  // Tooltips
  node.append("title")
      .text(d => {
        const path = d.ancestors().reverse().map(d => d.data.name).join("/");
        let status = "";
        if (d.data._children) status = " (collapsed)";
        else if (d.children) status = " (expanded)";
        else status = " (leaf)";
        return path + status;
      });

  // Column headers and data
  for (const {label, value, format, x} of columns) {
    svg.append("text")
        .attr("dy", "0.35em")
        .attr("y", -nodeSize)
        .attr("x", x)
        .attr("text-anchor", "end")
        .attr("font-weight", "bold")
        .attr("font-size", "13px")
        .attr("fill", "#2c3e50")
        .text(label);

    node.append("text")
        .attr("class", "tree-text")
        .attr("dy", "0.35em")
        .attr("x", x)
        .attr("text-anchor", "end")
        .attr("fill", d => (d.children || d.data._children) ? "#2c3e50" : "#666")
        .attr("font-weight", d => (d.children || d.data._children) ? "600" : "400")
        .data(root.copy().sum(value).descendants())
        .text(d => format(d.value, d));
  }

  // Append to container
  container.appendChild(svg.node());
  // console.log('🔹 Chart created and appended to DOM');
}

// Create legend
function createLegend(data) {
  const colorScale = d3.scaleOrdinal()
      .domain([0, 1, 2, 3, 4, 5])
      .range(['#2c3e50', '#3498db', '#e74c3c', '#f39c12', '#27ae60', '#9b59b6']);

  // CHANGED: Define custom labels for each administrative level
  const levelLabels = [
    'Country',      // Level 0 - Root level
    'Region',       // Level 1 - Oblast
    'District',     // Level 2 - Raion
    'Hromada',      // Level 3 - Hromada
    'Settlement / Count'    // Level 4 - Settlement
  ];

  const root = d3.hierarchy(data);
  const maxDepth = d3.max(root.descendants(), d => d.depth);

  const legendContainer = document.getElementById('legend-items');
  legendContainer.innerHTML = ''; // Clear existing

  for (let i = 0; i <= maxDepth; i++) {
    const legendItem = document.createElement('div');
    legendItem.className = 'legend-item';

    const colorBox = document.createElement('span');
    colorBox.className = 'legend-color';
    colorBox.style.backgroundColor = colorScale(i);

    const label = document.createElement('span');
    // CHANGED: Use custom label from array instead of generic "Level ${i}"
    label.textContent = levelLabels[i] || `Level ${i}`; // Fallback to generic if index exceeds array

    legendItem.appendChild(colorBox);
    legendItem.appendChild(label);
    legendContainer.appendChild(legendItem);
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  // console.log('🔹 DOM loaded, initializing chart...');
  loadDataAndCreateChart();
});

// Added expand all functionality
function expandAll() {
  // console.log('🔹 Expanding all nodes...');

  function expandRecursively(node) {
    if (node._children) {
      // Move from _children to children (expand)
      node.children = node._children;
      node._children = null;
      // console.log(`🔸 Expanded: ${node.name}`);
    }

    // Recursively expand all children
    if (node.children) {
      node.children.forEach(expandRecursively);
    }
  }

  // Expand from root
  if (currentData) {
    expandRecursively(currentData);
    createChart();
    // console.log('🔹 All nodes expanded');
  }
}

// CHANGE: Added collapse all functionality
function collapseAll() {
  // console.log('🔹 Collapsing all nodes...');

  function collapseRecursively(node) {
    if (node.children) {
      // Move from children to _children (collapse)
      node._children = node.children;
      node.children = null;
      // console.log(`🔸 Collapsed: ${node.name}`);
    }

    // Recursively collapse all descendants
    if (node._children) {
      node._children.forEach(collapseRecursively);
    }
  }

  // Collapse all except root (keep root expanded so we can see first level)
  if (currentData && currentData.children) {
    currentData.children.forEach(collapseRecursively);
    createChart();
    // console.log('🔹 All nodes collapsed');
  }
}
