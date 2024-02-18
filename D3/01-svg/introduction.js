import * as d3 from "d3";

  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

  d3.select("body").selectAll("h3")
  .data(dataset)
  .enter()
  .append("h2")
  .text("New Title")
  .text((d) => (d + " USD"))
  .style("color", d => d < 20 ? "red" : "green")

