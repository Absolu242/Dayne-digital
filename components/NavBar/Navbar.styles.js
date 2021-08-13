import styled from "styled-components"
import { colors } from "../../styles/global.styles"

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;

  .menu {
    display: none;
  }

  @media (max-width: 768px) {
    background-color: #fff;
    position: fixed;
    flex-wrap: wrap;
    width: 100%;
    z-index: 999;
    .menu {
      display: block;

      @media (max-width: 768px) {
        width: 40%;
        text-align: right;
        padding-right: 4rem;
      }
    }
  }
`
export const NavLogo = styled.div`
  p {
    color: ${colors.primaryColor1};
    font-size: 2.5rem;
    span {
      color: ${colors.primaryColor2};
    }
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`
export const NavItems = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    align-items: left;
    width: 90%;
    padding: 2rem 0;
    background-color: #fff;
    transition: all 0.5s ease;

    &.open {
      transform: translateY(60%);
    }

    &.close {
      transform: translateY(-120%);
    }

    .btn {
      width: 100%;
      padding: 1rem 0;
    }

    border-bottom: 0.5px solid ${colors.grey2};
  }
`
export const NavList = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
    align-items: left;
    width: 100%;
  }
`
export const NavLink = styled.div`
  padding: 0 3rem;
  a {
    color: ${colors.grey2};
    font-size: 1.8rem;
    font-family: "SFProRounded";
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`
export const NavButton = styled.button`
  padding: 1rem 4rem;
  font-size: 1.4rem;
  font-family: "SFProRounded";
  border-radius: 2.4rem;
  border: none;
  background-color: ${colors.primaryColor1};
  color: ${colors.primaryColor2};
  cursor: pointer;

  @media (max-width: 768px) {
    text-align: left;
  }
`
