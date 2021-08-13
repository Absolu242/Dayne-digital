import styled from "styled-components"
import { colors } from "./global.styles"

export const SectionContainer = styled.div`
  position: relative;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  //min-height: 100vh;
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: 5rem 0;
`

export const SectionHeading = styled.div`
  position: relative;
  font-family: "Nexa-Bold";
  font-size: 3.4rem;
  text-align: center;
  margin: 8rem 0;
  color: ${colors.primaryColor2};
`

export const SectionFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 765px) {
    flex-wrap: wrap;
  }
`

export const SectionGrid2 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  grid-template-rows: auto;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`

export const SectionGrid3 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  grid-template-rows: auto;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`

export const SectionItem = styled.div`
  position: relative;
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.color};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 280px;

  .value-img {
    text-align: center;
  }

  p {
    color: ${colors.primaryColor2};
    font-size: 2.4rem;
    text-transform: capitalize;
    text-align: center;

    &.value-name {
      font-size: 2.4rem;
      color: ${colors.primaryColor2};
      padding: 1rem 0;
    }

    &.value-desc {
      font-size: 1.8rem;
      color: #000;
    }
  }

  &.clientItem {
    height: unset;
    padding: 1.5rem 0;
  }

  @media (max-width: 765px) {
    flex-wrap: wrap;
  }
`
