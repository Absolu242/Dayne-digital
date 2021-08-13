import React from "react"
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"
import image from "../../public/assets/images/07.svg"
import { SectionContainer } from "../../styles/Home.styles"
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid"

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
