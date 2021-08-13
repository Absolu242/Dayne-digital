import React from "react"
//components
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid"

//assets
import image from "../../public/assets/images/07.svg"

//styles
import { SectionContainer } from "../../styles/Home.styles"

export default function Projects() {
  const headerProps = {
    heading: "Our Work",
    text: "We have been building top quality software products for over 10 years ",
    height: "30vh",
  }
  return (
    <>
      <Layout>
        <Header headerProps={headerProps} />
        <>
          <SectionContainer>
            <ProjectsGrid />
          </SectionContainer>
        </>
      </Layout>
    </>
  )
}
