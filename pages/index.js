//styles
import {
  SectionContainer,
  SectionHeading,
  SectionGrid3,
  SectionFlex,
  SectionItem,
} from "../styles/Home.styles"

//components
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import ProcessBanner from "../components/ProcessBanner/ProcessBanner"
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid"

//assets
import image from "../public/assets/images/01.svg"

//data
import { services } from "../data/services.data"
import { values } from "../data/values.data"
import { clients } from "../data/clients.data"
import ContactPopup from "../components/ContactPopup/ContactPopup"

export default function Home() {
  const headerProps = {
    greet: "Hey Hello",
    heading: `We are a software <br/>  development and <br/> design company`,
    text: ` High-quality digital resources which make <br/>
    your design workflow faster and easier!`,
    buttonText: "About us",
    buttonLink: "about",
    image: image,
  }

  return (
    <Layout>
      <Header headerProps={headerProps} />
      <>
        <SectionContainer>
          <SectionHeading>
            <p> We develop and deliver</p>
          </SectionHeading>

          <SectionGrid3>
            {services.map((service, i) => (
              <SectionItem key={i} color={service.color}>
                <img src={service.icon} alt={service.name} />
                <p>{service.name}</p>
              </SectionItem>
            ))}
          </SectionGrid3>
        </SectionContainer>
      </>

      <>
        <SectionContainer height='50%'>
          <SectionHeading>
            <p> Our Values</p>
          </SectionHeading>

          <SectionFlex>
            {values.map((value, i) => (
              <SectionItem width='266px' key={i}>
                <img className='value-img' src={value.icon} alt={value.name} />
                <p className='value-name'>{value.name}</p>
                <p className='value-desc'>{value.desc}</p>
              </SectionItem>
            ))}
          </SectionFlex>
        </SectionContainer>
      </>
      <ProcessBanner />
      <>
        <SectionContainer>
          <SectionHeading>
            <p> Our Clients</p>
          </SectionHeading>

          <SectionFlex>
            {clients.map((value, i) => (
              <SectionItem className='clientItem' key={i}>
                <img src={value.logo} alt='client logo' />
              </SectionItem>
            ))}
          </SectionFlex>
        </SectionContainer>
      </>

      <>
        <SectionContainer>
          <SectionHeading>
            <p> Our Projects</p>
          </SectionHeading>

          <ProjectsGrid />
        </SectionContainer>
      </>
    </Layout>
  )
}
