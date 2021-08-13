import styled from "styled-components"
import { colors } from "../../styles/global.styles"

export const ProjectGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  grid-template-rows: auto;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectsItem = styled.div`
  position: relative;
  text-align: left;
  background-color: ${(props) => props.color};
  width: 100%;

  p {
    text-transform: capitalize;
    padding: 1rem 0;
    &.name {
      font-size: 3.4rem;
      color: ${colors.primaryColor2};
    }

    &.desc {
      font-size: 2.4rem;
      color: ${colors.grey2};
    }
  }
`
export const ProjectImage = styled.div`
  position: relative;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 50%;
  background-position-y: 50%;
  height: 475px;
  width: 100%;
  box-shadow: 2px 4px 16px 1px rgba(37, 42, 90, 0.08);
  box-shadow: 4px 8px 48px rgba(10, 4, 51, 0.11);
  border-radius: 20px;
`
export const MoreProjects = styled.div`
  position: relative;
  padding: 3rem 0;
  color: ${colors.primaryColor2};
  font-size: 1.5rem;
`
