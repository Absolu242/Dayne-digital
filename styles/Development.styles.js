import styled from "styled-components"
import { colors } from "./global.styles"

export const DevContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1197px;
  margin: 0 auto;
  background-color: ${(props) => (props.bkg ? props.bkg : "none")};
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: 5rem 0;
`

export const DevHeading = styled.div`
  position: relative;
  font-family: "Nexa-Bold";
  font-size: 3.4rem;
  color: ${colors.primaryColor2};
  width: ${(props) => (props.width ? props.width : "40rem")};
  p {
    text-align: center;
  }
`

export const DevFlex = styled.div`
  position: relative;
  display: flex;
  align-items: "flex-start";
  padding: ${(props) => (props.pd ? props.pd : "8rem 0")};
  justify-content: ${(props) => (props.jc ? props.jc : "center")};

  .info {
    font-size: 1.8rem;
    max-width: 58rem;

    .text {
      font-size: 2rem;
    }
  }

  @media (max-width: 765px) {
    flex-wrap: wrap;
  }
`
export const DevGrid3 = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 5rem;
  width: 100%;
  padding: 8rem 0;
`

export const DevItem = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.bkg};
    width: 206px;
    height: 206px;
    border-radius: 50%;
  }
`
