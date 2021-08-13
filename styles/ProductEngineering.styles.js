import styled from "styled-components"
import { colors } from "./global.styles"

export const PdeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1197px;
  margin: 0 auto;
  background-color: ${(props) => (props.bkg ? props.bkg : "none")};
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: 5rem 0;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-content {
      p {
        font-size: 3.4rem;
        padding: 0 5rem;
      }
      @media (max-width: 765px) {
        p {
          padding: 0 2rem;
          font-size: 2.4rem;
        }
      }
    }
  }
`

export const PdeHeading = styled.div`
  position: relative;
  font-family: "Nexa-Bold";
  font-size: 3.4rem;
  color: ${colors.primaryColor2};
  width: ${(props) => (props.width ? props.width : "40rem")};
  padding: ${(props) => (props.pd ? props.pd : "0")};

  .bar {
    width: 40px;
    height: 3px;
    background-color: ${colors.primaryColor1};
    margin: 2rem 0;
  }

  span {
    position: absolute;
    top: 0px;
    font-size: 162px;
    color: ${colors.primaryColor1Variant};
    z-index: -1;
    opacity: 10%;
  }

  p {
    text-align: center;
  }
  @media (max-width: 765px) {
    padding: 3rem 0;
  }
`

export const PdeFlex = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  padding-top: ${(props) => (props.pd ? props.pd : "8rem")};
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
export const PdeGrid2 = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100vh;
  width: 100%;

  .grid-image {
    width: 100%;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .grid-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f8fd;

    &-content {
      p {
        font-size: 2rem;
        max-width: 37rem;
        text-align: justify;
      }
      div {
        padding: 1.5rem 0;
        width: fit-content;
      }
    }
  }

  @media (max-width: 765px) {
    grid-template-columns: 1fr;

    .grid-image {
      display: none;
    }

    .grid-info {
      padding: 2rem;
    }
  }
`

export const PdeItem = styled.div`
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
