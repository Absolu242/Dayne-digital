import styled from "styled-components"
import { colors } from "./global.styles"

export const AboutContainer = styled.div`
  position: relative;
  max-width: 1196px;
  width: 100%;
  margin: 0 auto;
  //min-height: 100vh;
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: 5rem 0;
`

export const AboutHeading = styled.div`
  position: relative;
  font-family: "Nexa-Bold";
  font-size: 3.4rem;

  margin: 8rem 0;
  color: ${colors.primaryColor2};

  p {
    text-align: center;
  }
`

export const AboutFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .stats {
    text-align: center;
    padding: 1rem 0;
    &-numbers {
      font-size: 3.4rem;
      font-weight: bold;
      font-family: "Nexa-Bold";
      color: ${colors.primaryColor2};
    }

    &-name {
      font-size: 20px;
    }
  }

  .image-cp {
    width: 45%;
  }

  .our-vision {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .vision {
      width: 50%;
      align-item: left;
      p {
        font-size: 2rem;
        text-align: justify;
      }
    }

    @media (max-width: 765px) {
      .vision {
        width: 100%;
      }
      img {
        display: none;
      }
    }
  }

  .item {
    text-align: center;
    padding: 1rem 0;
    p {
      font-size: 2.4rem;

      &.about {
        font-size: 1.6rem;
        padding: 1rem 2rem;
      }
    }
  }

  @media (max-width: 765px) {
    flex-direction: column;
    justify-content: center;

    .image-cp {
      width: 100%;
      padding: 1rem 0;
    }
  }
`

export const AboutGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 5rem;
  grid-template-rows: auto;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`

export const AboutGrid2 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  grid-template-rows: auto;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`

export const AboutItem = styled.div`
  position: relative;
  display: block;
  background-color: ${(props) => props.color};
  width: ${(props) => (props.width !== "" ? props.width : "100%")};
  height: ${(props) => (props.height !== "" ? props.height : "280px")};
  cursor: pointer;
  transition: all 0.3s ease;

  &.unique {
    opacity: 0.5;
  }

  p {
    color: ${colors.primaryColor2};
    text-transform: capitalize;
    font-family: "SFProRounded";

    &.item-name {
      font-size: 2.4rem;
      color: ${colors.primaryColor2};
      padding: 1rem 0;
    }

    &.item-desc {
      font-size: 1.8rem;
      color: #000;
    }
  }

  button.item-btn {
    position: relative;
    padding: 0.8rem 4rem;
    font-size: 1.4rem;
    font-family: "SFProRounded";
    border-radius: 2.4rem;
    border: 2px solid ${colors.primaryColor1};
    background: none;
    color: ${colors.primaryColor2};
    margin-top: 2rem;
    cursor: pointer;
    opacity: 0;
  }

  &.serviceItem {
    opacity: 1;
    padding: 5rem 8rem;
    border-radius: 16px;
    p.item-name {
      padding: 2rem 0;
    }
  }

  &:hover {
    opacity: 1;
    button {
      opacity: 1;
    }
  }

  @media (max-width: 765px) {
    flex-wrap: wrap;
  }
`
