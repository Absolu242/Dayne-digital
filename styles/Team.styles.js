import styled from "styled-components"
import { colors } from "./global.styles"

export const TeamContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1197px;
  margin: 0 auto;
  background-color: ${(props) => (props.bkg ? props.bkg : "none")};
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: 5rem 0;
`

export const TeamHeading = styled.div`
  position: relative;
  font-family: "Nexa-Bold";
  font-size: 3.4rem;
  color: ${colors.primaryColor2};
  width: 100%;
  padding: 3rem 0;

  @media (max-width: 765px) {
    padding: 3rem 0;
  }
  p {
    text-align: center;
  }
`

export const TeamFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: ${(props) => (props.pd ? props.pd : "8rem")};
  justify-content: space-between;

  .benef {
    text-align: center;

    &-name {
      padding: 2rem 0;
      font-size: 2.4rem;
    }
  }

  @media (max-width: 765px) {
    flex-wrap: wrap;
  }
`
export const TeamGrid2 = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 413px);
  width: 100%;
  gap: 5rem;
  padding: 5rem 0;
  justify-content: center;
  .step {
    &-name {
      padding: 2rem 0;
      font-size: 2.4rem;
      color: ${colors.primaryColor2};

      span {
        color: ${colors.primaryColor1};
      }
    }
    &-desc {
      font-size: 1.6rem;
      max-width: 413px;
    }
  }

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`

export const TeamItem = styled.div`
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
