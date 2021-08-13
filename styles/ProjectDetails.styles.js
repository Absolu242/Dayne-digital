import styled from "styled-components"
import { colors } from "./global.styles"

export const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${(props) => (props.bkg ? props.bkg : "none")};
  height: ${(props) => (props.height ? props.height : "100%")};
  padding: ${(props) => (props.pd ? props.pd : "5rem 0")};
`

export const SectionHeading = styled.div`
  position: relative;
  font-family: "Nexa-Bold";
  font-size: 2.4rem;
  color: ${colors.primaryColor2};
  width: 40rem;
`

export const SectionFlex = styled.div`
  display: flex;
  align-items: "flex-start";
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => (props.pd ? props.pd : "8rem 0")};

  .info {
    font-size: 1.8rem;
    max-width: 88rem;

    .value-list {
      list-style: none;

      .value-item {
        padding: 1rem 0;
        img {
          padding-right: 1rem;
        }
      }
    }

    .value-images {
      padding-top: 5rem;
      display: flex;

      img {
        width: 50%;
        padding-right: 3rem;
      }
    }
  }

  .shortInfo {
    display: flex;
    justify-content: space-between;
    width: 100%;

    &-item {
      text-align: center;
      padding-right: 2rem;
      font-size: 1.4rem;

      .title {
        padding: 1rem 0;
      }
    }
  }

  .review {
    position: relative;
    display: flex;
    align-items: flex-start;

    .review-img {
      width: 200px;
      height: 100px;
      border: 50%;
    }
    p {
      padding: 0.5rem 0;
    }

    div {
      position: relative;
      padding: 2rem 0;
      .tag {
        position: absolute;
        left: -3rem;
        z-index: -1;
      }
    }
  }

  @media (max-width: 765px) {
    flex-wrap: wrap;
  }
`
export const ChangeBtn = styled.div`
  text-align: center;
  width: 50%;

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: ${colors.primaryColor2};
    cursor: pointer;
    opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  }
`
