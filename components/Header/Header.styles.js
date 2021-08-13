import styled from "styled-components"
import { colors } from "../../styles/global.styles"

export const HeaderContainer = styled.div`
  position: relative;
  background-color: ${(props) => (props.bkgcolor ? props.bkgcolor : "none")};
  align-items: center;
  min-height: ${(props) =>
    props.height !== undefined ? props.height : "80vh"};
  width: 100%;
`

export const HeaderContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  min-height: ${(props) =>
    props.height !== undefined ? props.height : "80vh"};

  @media (max-width: 765px) {
    min-height: 80vh;
  }
`

export const HeaderMain = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
`
export const HeaderGreet = styled.p`
  font-size: 2rem;
  font-weight: 400;
`
export const HeaderHeading = styled.h1`
  position: relative;
  color: ${colors.primaryColor2};
  font-family: "Nexa-Bold";
  font-size: 6.4rem;
  padding: 3rem 0;
  width: 100%;

  @media (max-width: 765px) {
    font-size: 3.4rem;
  }
`
export const HeaderText = styled.p`
  position: relative;
  width: 100%;
  color: #0e101a;
  font-family: "SFProRounded";
  font-size: 2rem;
`
export const HeaderButton = styled.button`
  position: relative;
  padding: 1rem 7rem;
  font-size: 1.4rem;
  font-family: "SFProRounded";
  border-radius: 2.4rem;
  border: 2px solid ${colors.primaryColor1};
  background: none;
  color: ${colors.primaryColor2};
  margin-top: 2rem;
`

export const HeaderImage = styled.div`
  position: relative;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 50%;
  background-position-y: 50%;
  height: 80vh;
  width: 100%;

  @media (max-width: 765px) {
    display: none;
  }
`
