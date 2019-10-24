import React, { Component } from "react";
import styled from "styled-components";
import GoodCreditScore from "./GoodCreditScore";
import BadCreditScore from "./BadCreditScore";
import DonutChart from "../../assets/images/CreditScoreDonut.jpg";
import BarChart from "../../assets/images/CreditScoreBar.png";

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
            <p>TransUnion Credit Score</p>
            <img src={DonutChart} />
            <span>
              As of {this.state.date}.Based on Credit Vision Risk. Next update
              available on {this.state.nextDate}{" "}
            </span>
          </DonutBarChart>
          <DonutBarChart>
            <p>Where You Stand</p>
            <img src={BarChart} />
          </DonutBarChart>
        </SectionsWrapper>
      </CreditScoreWrapper>
    );
  }
}

//-----------------------------------------------STYLES-----------------------------------------------//

const CreditScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const SectionsWrapper = styled.div`
  margin: 0rem auto;
  width: 100rem;
  display: flex;
`;

const DonutBarChart = styled.div`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.color.text2};
  font-weight: 300;
  display: flex;
  flex-direction: column;
  flex: 2 1 20px;
  padding: 3rem;
  & p {
    font-size: ${props => props.theme.fontSize.large};
  }
  & span {
    font-size: ${props => props.theme.fontSize.small};
  }
`;
