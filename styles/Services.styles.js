import styled from "styled-components"
import { colors } from "./global.styles"

export const ServicesContainer = styled.div`
  position: relative;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  //min-height: 100vh;
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: 5rem 0;
`

export const ServicesHeading = styled.div`
  position: relative;
  font-family: "Nexa-Bold";
  font-size: 3.4rem;
  text-align: center;
  margin: 8rem 0;
  color: ${colors.primaryColor2};
`

export const ServicesFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 765px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const ServicesGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 5rem;
  grid-template-rows: auto;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`

export const ServicesGrid2 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  grid-template-rows: auto;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`

export const ServicesItem = styled.div`
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

  &.serviceItem,
  &.processItem {
    opacity: 1;
    padding: 5rem 8rem;
    border-radius: 16px;

    p.item-name {
      padding: 2rem 0;
    }
  }

  &.processItem {
    .item-desc {
      width: 50%;
      font-size: 2rem;
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
    padding: 2rem 0;
  }
`
