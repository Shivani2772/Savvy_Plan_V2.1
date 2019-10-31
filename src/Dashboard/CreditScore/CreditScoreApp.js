<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../Styles/Themes";
import CreditScore from "./CreditScore";

const CreditScoreApp = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CreditScoreAppWrapper>
        <CreditScore />
      </CreditScoreAppWrapper>
    </ThemeProvider>
  );
};

export default CreditScoreApp;

//-----------------------------------------------STYLES-----------------------------------------------/
export const CreditScoreAppWrapper = styled.div`
  grid-area: m;
  background-color: ${props => props.theme.color.background1};
  /*   display: grid;
  grid-template: repeat() (2, 50px) / 1fr 1fr 1fr;
  grid-gap: 3px; */
`;

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
//blank slate
=======
import React, { Component } from 'react'
import BadCreditScore from "./BadCreditScore"
import GoodCreditScore from "./GoodCreditScore"
import styled from "styled-components"

export default class CreditScoreApp extends Component {

    state = {
        creditScore: 650
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.creditScore);
    }


    render() {
        return (
            <CreditScore>
                <DonutChartWrapper/>
                <BottomChartWrapper/>
                <BarGraphWrapper/>
                <BadCreditScore/>
                <GoodCreditScore/>
                
            </CreditScore>
        )
    }
}





//-----------------------------------------------STYLES-----------------------------------------------/
export const CreditScore = styled.div`
    grid-area: m;
    display: grid;
    width: 80%;
    margin: 0 auto;
    grid-template-columns: repeat(16, minmax(5rem, 10rem));
    grid-template-rows: 4rem minmax(12rem, 14rem) 4rem repeat(2, minmax(12rem, 24rem));
grid-template-areas: '
   h h h c c c c c c
   h h h c c c c c c
   h h h c c c c c c
   d d d d d d d d d
   d d d d d d d d d
   d d d d d d d d d
'
`
const DonutChartWrapper = styled.div`
    grid-area: h;
    background: blue;
`
const BottomChartWrapper = styled.div`
    grid-area: d;
    background: grey;
`
const BarGraphWrapper = styled.div`
    grid-area: c;
    background: green;
`

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
//blank slate`
>>>>>>> BenMcLoughlin/master
