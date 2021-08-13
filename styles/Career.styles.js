import styled from "styled-components"
import { colors } from "./global.styles"

export const CareerContainer = styled.div`
  position: relative;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  //min-height: 100vh;
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: 5rem 0;
`

export const CareerHeading = styled.div`
  position: relative;
  font-family: "Nexa-Bold";
  font-size: ${(props) => (props.fs ? props.fs : "3.4rem")} !important;

  text-align: center;
  margin: ${(props) => (props.mg ? props.mg : "8rem 0")};
  color: ${colors.primaryColor2};
`

export const CareerFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  .job-description {
    max-width: 785px;
    p {
      text-align: left;
      font-size: 1.8rem;
    }

    .job-container {
      padding-top: 5rem;

      .value-list {
        list-style: none;
        font-size: 1.8rem;
        .value-item {
          padding: 1rem 0;
          img {
            padding-right: 1rem;
          }
        }
      }
    }
  }

  .join-section {
    text-align: center;

    p {
      padding: 1rem 0;
      font-size: 1.4rem;
    }

    .heading {
      font-family: "Nexa-Bold";
      font-size: 2rem;
      text-align: center;
      color: ${colors.primaryColor2};
    }
    /* .burrons{
       display:flex;
    } */

    @media (max-width: 765px) {
      width: 100%;
      padding-top: 5rem;
    }
  }

  @media (max-width: 765px) {
    width: 100%;
  }
`

export const CareerGrid2 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  grid-template-rows: auto;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`

export const CareerItem = styled.div`
  position: relative;
  text-align: center;
  background-color: ${colors.secondaryColor3};
  width: 100%;
  padding: 2rem 0;
  cursor: pointer;
  border-radius: 16px;

  .job-name {
    color: ${colors.primaryColor2};
    font-size: 2.4rem;
  }

  .job-location {
    color: ${colors.grey3};
    font-size: 1.6rem;
    padding: 0.5rem 0;
  }

  &:hover {
    background-color: ${colors.secondaryColor4};
    box-shadow: 0px 12px 17px 2px rgba(14, 7, 68, 0.05);
    box-shadow: 0px 6px 40px rgba(18, 9, 84, 0.06);
  }
`

export const CareerButton = styled.button`
  position: relative;
  padding: 1rem 5rem;
  font-size: 1.4rem;
  font-family: "SFProRounded";
  border-radius: 2.4rem;
  border: 2px solid ${colors.primaryColor1};
  background: none;
  color: ${colors.primaryColor2};
  margin: 1rem 0;
  width: 242px;

  &.btn-join {
    background-color: ${colors.primaryColor1};
    border: none;
  }
`
