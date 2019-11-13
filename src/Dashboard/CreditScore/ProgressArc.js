import React, { Component } from "react";
import * as d3 from "d3";
import styled from "styled-components";

export default class ProgressArc extends Component {
  constructor() {
    super();
    this.state = {
      value: 70
    };
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.drawArc();
  }

  drawArc() {
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
  }

  setContext() {
    return d3
      .select(this.refs.arc)
      .append("svg")
      .attr("height", 300)
      .attr("height", 300)
      .attr("id", "d3-arc")
      .append("g")
      .attr("transform", `translate(150,150)`);
  }

  setBackground(context) {
    return context
      .append("path")
      .datum({ endAngle: this.tau })
      .style("fill", "#e6e6e6")
      .attr("d", this.arc());
  }

  tau = Math.PI * 2;
  arc() {
    return d3
      .arc()
      .innerRadius(100)
      .outerRadius(110)
      .startAngle(0);
  }

  setForeground(context) {
    return context
      .append("path")
      .datum({ endAngle: this.tau * 0.3 })
      .style("fill", "#00ff00")
      .attr("d", this.arc());
  }

  render() {
    return (
      <WidgetWrapper>
        <HeaderWrapper>Credit Score</HeaderWrapper>
        <div ref="arc" className="chart-container"></div>
      </WidgetWrapper>
    );
  }
}

const WidgetWrapper = styled.div`
  margin: 0 auto;
  width: 350px;
`;
const HeaderWrapper = styled.section`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: normal;
  & .chart-container {
    padding: 25px;
  }
`;
