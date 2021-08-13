import styled from "styled-components"
import { colors } from "../../styles/global.styles"

export const CtContainer = styled.div`
  position: fixed;
  display: ${(props) => (props.open ? "block" : "none")};
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  z-index: 9999;
  background-color: #fff;
  top: 0rem;
`

export const CtClose = styled.div`
  position: absolute;
  right: 2rem;
  top: 1rem;
  z-index: 9999;

  button {
    border: none;
    background-color: ${colors.secondaryColor1};
    cursor: pointer;
    border-radius: 50%;
    padding: 1rem;

    img {
      cursor: pointer;
    }
  }
`

export const CtMain = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1150px;
  min-height: inherit;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`
export const CtImage = styled.div`
  position: relative;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 50%;
  background-position-y: 50%;
  height: 80vh;
  width: 100%;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const CtForm = styled.form`
  position: relative;
  width: 50%;

  @media (max-width: 765px) {
    width: 90%;
  }
`

export const CtHeading = styled.h1`
  position: relative;
  color: ${colors.primaryColor2};
  font-family: "Nexa-Bold";
  font-size: 3.4rem;
  padding-bottom: 3rem;
  width: 100%;

  @media (max-width: 765px) {
    font-size: 3.4rem;
  }
`

export const CtButtons = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;

  @media (max-width: 765px) {
    // flex-wrap: wrap;
  }
`

export const CtButton = styled.div`
  padding: 0.8rem 2rem;
  border-radius: 20px;
  border: 2px solid ${colors.primaryColor1};
  background: none;
  color: ${colors.grey2};
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;

  input {
    display: none;
  }

  #check:checked ~ p {
    color: ${colors.primaryColor2};
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.secondaryColor1};
    color: ${colors.primaryColor2};
    border: hidden;
  }
`

export const CtInputs = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  .ct-error-msg {
    font-size: 1.3rem;
    color: ${colors.primaryColor4};
  }
`
export const CtInput = styled.input`
  width: 100%;
  padding: 1.5rem 2rem;
  margin-top: 1rem;
  border-radius: 5px;
  border: none;
  background-color: ${colors.secondaryColor1};
`

export const CtTextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem 2rem;
  margin-top: 1rem;
  border-radius: 5px;
  border: none;
  background-color: ${colors.secondaryColor1};
  height: 120px;
`

export const CtSendBtn = styled.button`
  position: relative;
  padding: 1rem 7rem;
  font-size: 1.4rem;
  font-family: "SFProRounded";
  border-radius: 2.4rem;
  border: none;
  background-color: ${colors.primaryColor1};
  color: ${colors.primaryColor2};
  margin-top: 1rem;
  width: 100%;
`
