//styles
import {
  CareerContainer,
  CareerHeading,
  CareerGrid2,
  CareerItem,
} from "../../styles/Career.styles"

//components
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"

//assets
import Link from "next/link"
import { careers } from "../../data/careers.data"

//data

export default function Career() {
  const headerProps = {
    heading: `Join`,
    text: `We are always excited about meeting new people <br/> and growing our team, so feel free to get in touch if <br/> you are a skilled or promising team player.`,
    buttonText: "Join our team",
    buttonLink: "#jobs",
    image: "/assets/images/image8.png",
  }

  return (
    <Layout>
      <Header headerProps={headerProps} />
      <>
        <CareerContainer id='jobs'>
          <CareerHeading>
            <p> Vacancies</p>
          </CareerHeading>

          <CareerGrid2>
            {careers.map((job, i) => (
              <Link href={`/careerDetails/${job.id}`} key={i}>
                <a>
                  <CareerItem>
                    <p className='job-name'>{job.name}</p>
                    <p className='job-location'>{job.location}</p>
                  </CareerItem>
                </a>
              </Link>
            ))}
          </CareerGrid2>
        </CareerContainer>
      </>
    </Layout>
  )
}
