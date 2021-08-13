import styled from "styled-components"
import { colors } from "../../styles/global.styles"
import image from "../../public/assets/images/02.svg"

export const ProcessBannerContainer = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  background-color: #edf4f4;
  height: 360px;
  margin-top: 15rem;
  padding: 0 1rem;
`

export const ProcessBannerContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 765px) {
    flex-wrap: wrap;
  }
`
export const ProcessBannerMain = styled.div`
  position: relative;
  width: 100%;
`

export const ProcessBannerHeading = styled.p`
  color: ${colors.primaryColor2};
  font-family: "Nexa-Bold";
  font-size: 3.4rem;
`
export const ProcessBannerText = styled.p`
  position: relative;
  width: 475px;
  color: #0e101a;
  font-family: "SFProRounded";
  font-size: 2rem;
  margin: 2rem 0;

  @media (max-width: 765px) {
    width: 100%;
  }
`
export const ProcessBannerButton = styled.button`
  padding: 1rem 6rem;
  font-size: 1.4rem;
  font-family: "SFProRounded";
  border-radius: 2.4rem;
  border: 2px solid ${colors.primaryColor1};
  background: none;
  color: ${colors.primaryColor2};
  margin-top: 2rem;
`

export const ProcessBannerImage = styled.div`
  position: relative;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 50%;
  background-position-y: 50%;
  height: 475px;
  width: 100%;
  top: -5rem;
  @media (max-width: 765px) {
    display: none;
  }
`
