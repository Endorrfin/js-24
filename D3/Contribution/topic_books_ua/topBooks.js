// Chart configuration
const margin = { top: 20, right: 80, bottom: 60, left: 250 };
const width = 1100 - margin.left - margin.right;
const height = 600 - margin.bottom - margin.top;

// Create SVG
const svg = d3.select("#chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Create tooltip
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("display", "none");

let data = [];
let currentGenre = "Духовні книги";

// Load and process data
d3.csv("data/top_books.csv").then(function(csvData) {
  // Process data - Added data parsing and cleaning
  data = csvData.map(d => ({
    id: +d["#"],
    genre: d["Жанр"].trim(),
    title: d["Найменування"].trim(),
    author: d["Автор"].trim(),
    pages: d["# Сторінок"] ? +d["# Сторінок"] : 0, // Handle missing pages
    audioDuration: d["# Тривалість аудіо"] ? +d["# Тривалість аудіо"] : 0
  }));

  // Populate genre dropdown - Added genre extraction and sorting
  const genres = [...new Set(data.map(d => d.genre))].sort();
  const select = d3.select("#genreSelect");

  select.selectAll("option")
      .data(genres)
      .enter()
      .append("option")
      .attr("value", d => d)
      .text(d => d)
      .property("selected", d => d === currentGenre);

  // Add change event listener
  select.on("change", function() {
    currentGenre = this.value;
    updateChart();
  });

  // Initial chart render
  updateChart();
}).catch(function(error) {
  console.error("Error loading CSV:", error);
});

function updateChart() {
  // Filter data by genre - Added genre filtering logic
  const filteredData = data.filter(d => d.genre === currentGenre)
      .filter(d => d.pages > 0) // Only show books with page data
      .sort((a, b) => b.pages - a.pages); // Sort by pages descending

  // Clear previous chart
  g.selectAll("*").remove();

  if (filteredData.length === 0) {
    g.append("text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .text("No data available for this genre");
    return;
  }

  // Update SVG height based on data - Added dynamic height calculation
  const barHeight = 40;
  const newHeight = Math.max(filteredData.length * barHeight + margin.top + margin.bottom, 400);
  svg.attr("height", newHeight);

  // Scales - Added proper scale configuration
  const xScale = d3.scaleLinear()
      .domain([0, d3.max(filteredData, d => d.pages)])
      .range([0, width]);

  const yScale = d3.scaleBand()
      .domain(filteredData.map(d => d.id))
      .range([0, filteredData.length * barHeight])
      .padding(0.1);

  // Create bars - Added bar creation with proper positioning
  const bars = g.selectAll(".bar")
      .data(filteredData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("y", d => yScale(d.id))
      .attr("width", d => xScale(d.pages))
      .attr("height", yScale.bandwidth())
      .on("mouseover", function(event, d) {
        // Added comprehensive tooltip with all required information
        tooltip.style("display", "block")
            .html(`
                            <strong>Найменування:</strong> ${d.title}<br>
                            <strong>Автор:</strong> ${d.author}<br>
                            <strong>Сторінок:</strong> ${d.pages}<br>
                            <strong>Тривалість аудіо:</strong> ${d.audioDuration} hours<br>
                            <strong>Жанр:</strong> ${d.genre}
                        `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
      })
      .on("mousemove", function(event) {
        tooltip.style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseout", function() {
        tooltip.style("display", "none");
      });

  // Add book titles and authors - Added proper text positioning and styling
  g.selectAll(".book-title")
      .data(filteredData)
      .enter()
      .append("text")
      .attr("class", "book-title")
      .attr("x", -10)
      .attr("y", d => yScale(d.id) + yScale.bandwidth() / 2 - 5)
      .attr("text-anchor", "end")
      .text(d => d.title);

  g.selectAll(".book-author")
      .data(filteredData)
      .enter()
      .append("text")
      .attr("class", "book-author")
      .attr("x", -10)
      .attr("y", d => yScale(d.id) + yScale.bandwidth() / 2 + 8)
      .attr("text-anchor", "end")
      .text(d => d.author);

  // Add page values on bars - Added value labels with proper positioning
  g.selectAll(".pages-value")
      .data(filteredData)
      .enter()
      .append("text")
      .attr("class", "pages-value")
      .attr("x", d => xScale(d.pages) + 5)
      .attr("y", d => yScale(d.id) + yScale.bandwidth() / 2 - 2)
      .text(d => `${d.pages} 📄`);

  // Add audio duration values - Added audio duration display
  g.selectAll(".audio-value")
      .data(filteredData.filter(d => d.audioDuration > 0))
      .enter()
      .append("text")
      .attr("class", "audio-value")
      .attr("x", d => xScale(d.pages) + 5)
      .attr("y", d => yScale(d.id) + yScale.bandwidth() / 2 + 12)
      // .text(d => `${d.audioDuration}год. mp3`);
      .text(d => `${d.audioDuration} год.🎧`);

  // Add X axis - Added axis with proper scale markers
  const xAxis = d3.axisBottom(xScale)
      .tickValues(d3.range(0, d3.max(filteredData, d => d.pages) + 100, 100))
      .tickFormat(d => d);

  g.append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0,${filteredData.length * barHeight})`)
      .call(xAxis);

  // Add X axis label - Added axis labeling
  g.append("text")
      .attr("class", "axis-label")
      .attr("x", width / 2)
      .attr("y", filteredData.length * barHeight + 40)
      .attr("text-anchor", "middle")
      .text("Кількість сторінок");

  // Update summary statistics - Added comprehensive summary calculation
  updateSummary(filteredData);
}

function updateSummary(data) {
  // Calculate summary statistics - Added all required summary metrics
  const totalBooks = data.length;
  const totalPages = d3.sum(data, d => d.pages);
  const totalAudio = d3.sum(data, d => d.audioDuration);
  const avgPages = totalBooks > 0 ? Math.round(totalPages / totalBooks) : 0;
  const avgAudio = totalBooks > 0 ? (totalAudio / totalBooks).toFixed(1) : 0;

  // Update summary display - Added formatted summary display
  const summary = d3.select("#summary");
  summary.html(`
                <h3>Підсумок для: ${currentGenre}</h3>
                <div class="summary-grid">
                    <div class="summary-item">
                        <div class="summary-label">Всього книг</div>
                        <div class="summary-value">${totalBooks}</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-label">Всього сторінок</div>
                        <div class="summary-value">${totalPages.toLocaleString()}</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-label">Всього аудіо</div>
                        <div class="summary-value">${totalAudio.toFixed(1)}h</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-label">В середньому сторінок</div>
                        <div class="summary-value">${avgPages}</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-label">В середньому аудіо</div>
                        <div class="summary-value">${avgAudio}h</div>
                    </div>
                </div>
            `);
}
