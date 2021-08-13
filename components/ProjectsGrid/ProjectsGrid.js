import React from "react"
import Link from "next/link"
import { projects } from "../../data/projects.data"

import {
  ProjectGrid,
  ProjectsItem,
  ProjectImage,
  MoreProjects,
} from "./ProjectsGrid.styles"

export default function ProjectsGrid() {
  return (
    <>
      <ProjectGrid>
        {projects.map((project, i) => (
          <ProjectsItem key={i}>
            <Link href={`/projectDetails/${project.id}`}>
              <a>
                <ProjectImage img={project.image} />
                <p className='name'>{project.name}</p>
                <p className='desc'>{project.desc}</p>
              </a>
            </Link>
          </ProjectsItem>
        ))}
      </ProjectGrid>
      <MoreProjects>
        <Link href='/projects'>
          <a> View all Products</a>
        </Link>
      </MoreProjects>
    </>
  )
}
