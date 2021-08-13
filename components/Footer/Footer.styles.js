import styled from "styled-components"
import { colors } from "../../styles/global.styles"

export const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  height: 30vh;
`
export const FooterTop = styled.div`
  position: relative;
  max-width: 994px;
  margin: 0 auto;
  padding: 10rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 765px) {
    flex-wrap: wrap;
  }
`
export const FooterLeft = styled.div`
  position: relative;
  width: 100%;
  h1 {
    color: ${colors.primaryColor2};
    font-family: "Nexa-Bold";
    font-size: 6.4rem;
    font-weight: 400;
  }
  p {
    font-family: "SFProRounded";
    font-size: 2rem;
  }
`
export const FooterRight = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  border: none;
  border-radius: 4px;
  background: #e6e8f0;
  margin: 2rem 0;
`
export const FooterButton = styled.button`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 24px;
  background: ${colors.primaryColor1};
  color: ${colors.primaryColor2};
  border: none;
`
export const FooterBottomOne = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (max-width: 765px) {
    flex-wrap: wrap !important;
  }

  .infos {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: space-between;

    .infoItem {
      p {
        font-size: 1.6rem;
        padding: 1rem;
      }
    }
    @media (max-width: 765px) {
      flex-wrap: wrap;
      width: 100%;

      .infoItem {
        p {
          padding: 1rem 0;
        }
      }
    }
  }
`

export const FooterBottomTwo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  .copy {
    font-size: 1.6rem;
    color: ${colors.grey2};
    padding: 1rem 0;
  }

  .social-media {
    img {
      padding-left: 1rem;
      cursor: pointer;
    }
  }
  @media (max-width: 765px) {
    flex-wrap: wrap;
  }
`

export const Logo = styled.div`
  width: 50%;
  p {
    color: ${colors.primaryColor1};
    font-size: 1.8rem;
    span {
      color: ${colors.primaryColor2};
    }
  }

  @media (max-width: 765px) {
    padding: 2rem 0;
  }
`
