import React, { Component } from "react";
import styled from "styled-components";
import GoodCreditScore from "./GoodCreditScore";
import BadCreditScore from "./BadCreditScore";
import DonutChart from "../../assets/images/CreditScoreDonut.jpg";
import BarChart from "../../assets/images/CreditScoreBar.png";
import GraphChart from "../../assets/images/CreditGraph.png";

export default class CreditScore extends Component {
  state = {
    Score: 742,
    date: "",
    nextDate: ""
  };

  componentDidMount() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var nextm = new Date().getMonth() + 2;

    this.setState({
      //Setting the value of the date time
      date: date + "/" + month + "/" + year,
      nextDate: date + "/" + nextm + "/" + year
    });
  }

  renderSection() {
    if (this.state.Score >= 743 && this.state.Score <= 900) {
      return <GoodCreditScore Score={this.state.Score} />;
    } else if (this.state.Score >= 300 && this.state.Score <= 742) {
      return <BadCreditScore Score={this.state.Score} />;
    }
  }
  render() {
    return (
      <CreditScoreWrapper>
        <SectionsWrapper>
          <DonutBarChart>
            <h1>Credit Score</h1>
            <img src={DonutChart} alt="donut" />
            <p>
              <u>Score Factors</u>
            </p>
            <span>
              As of {this.state.date}.Based on Credit Vision Risk. Next update
              available on {this.state.nextDate}{" "}
            </span>
          </DonutBarChart>
          <ProgressBarContainer>
            <h1>Where You Stand</h1>
            {/* <img src={BarChart} alt="bar" /> */}
            <ProgressBar>
              <BarLines style="--bar-value:85%;"></BarLines>
              <Barlines style="--bar-value:45%;"></BarLines>
              <BarLines style="--bar-value:15%;"></BarLines>
            </ProgressBar>
          </ProgressBarContainer>
        </SectionsWrapper>
        <SectionsWrapper>
          <DonutBarChart>
            <h1>My Score History</h1>
            <img src={GraphChart} alt="graph" />
          </DonutBarChart>
        </SectionsWrapper>
      </CreditScoreWrapper>
    );
  }
}

//-----------------------------------------------STYLES-----------------------------------------------//

const CreditScoreWrapper = styled.div`
  justify-content: space-around;
  text-align: center;
`;

const SectionsWrapper = styled.div`
  margin: 0rem auto;
  width: 100rem;
  display: flex;
  flex-direction: row;
`;

const DonutBarChart = styled.div`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.color.text2};
  font-weight: 300;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  & h1 {
    font-size: ${props => props.theme.fontSize.medium};
    font-weight: normal;
  }
  & span {
    font-size: ${props => props.theme.fontSize.small};
  }
  > img {
    display: flex;
    flex: 1 1 250px;
  }
`;

const ProgressBarContainer = styled(DonutBarChart)``;

const ProgressBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: centre;
  border-bottom: 2px solid #f16335;
`;

const BarLines = styled(ProgressBar)`
  background-color: #f16335;
  width: 45px;
  height: var(--bar-value);
  align-self: flex-end;
  margin: 0 auto;
  border-radius: 3px;
  position: relative;
`;
