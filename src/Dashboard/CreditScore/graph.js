import React, { Component } from "react";
import * as d3 from "d3";

export default class Section422 extends Component {
  componentDidMount() {
    const dims = { height: 300, width: 300, radius: 150 };
    const cent = { x: dims.width / 2 + 5, y: dims.height / 2 + 5 };

    this.drawArc(dims, cent);
  }
  drawArc(dims, cent) {
    const svg = d3
      .select(".canvas")
      .append("svg")
      .attr("width", dims.width + 150)
      .attr("height", dims.height + 150);

    const graph = svg
      .append("g")
      .attr("transform", `translate(${cent.x}, ${cent.y})`);

    const pie = d3
      .pie()
      .sort(null)
      .value(d => d.cost);

    const arcPath = d3
      .arc()
      .outerRadius(dims.radius)
      .innerRadius(dims.radius / 4);
    const data =
      ({ name: "rent", cost: 500 },
      { name: "bills", cost: 300 },
      { name: "gaming", cost: 200 });
    //update function
    const update = data => {
      //join enhanced (pie) data to path elements
      const paths = graph.selectAll("path").data(pie(data));

      paths
        .enter()
        .append("path")
        .attr("class", "arc")
        .attr("d", arcPath)
        .attr("stroke", "#fff")
        .attr("stroke-widht", 3);
    };
    update(data);
  }

  render() {
    return <div ref="canvas">hello</div>;
  }
}
