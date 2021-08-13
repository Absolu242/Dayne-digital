import React from "react"
import Link from "next/link"

//styled-copmonents
import {
  ServicesContainer,
  ServicesHeading,
  ServicesGrid,
  ServicesGrid2,
  ServicesFlex,
  ServicesItem,
} from "../../styles/Services.styles"

//components
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"

//assets
import image from "../../public/assets/images/04.svg"

//data
import { values } from "../../data/values.data"
import { services } from "../../data/services.data"
import { process } from "../../data/process.data"

export default function Services() {
  const headerProps = {
    greet: "",
    heading: "Yes , we can <br/> build it ",
    text: "We build strong relationships with our clients by <br/> doing three things: being accountable for our <br/>  projects, making our processes transparent, and <br/>  delivering excellent results.",
    buttonText: "",
    image: image,
  }
  return (
    <>
      <Layout>
        <Header headerProps={headerProps} />
        <>
          <ServicesContainer height='100%'>
            <ServicesFlex>
              <Link href='/team'>
                <a>
                  <ServicesItem className='unique' width='266px'>
                    <p className='item-name'>Dedicated team</p>
                    <p className='item-desc'>
                      The notion of a dedicated team comprises a customer and
                      DevGroup company, that acts as an intermediary to find
                      personnel for the customer’s project.
                    </p>
                    <button className='item-btn'>Learn more</button>
                  </ServicesItem>
                </a>
              </Link>

              <Link href='/ProductEngineering'>
                <a>
                  <ServicesItem className='unique' width='266px'>
                    <p className='item-name'>Product engineering</p>
                    <p className='item-desc'>
                      To create a successful product it is necessary to combine
                      profound technical experience and understanding of
                      advanced business strategies.
                    </p>
                    <button className='item-btn'>Learn more</button>
                  </ServicesItem>
                </a>
              </Link>

              <Link href='/development'>
                <a>
                  <ServicesItem className='unique' width='266px'>
                    <p className='item-name'>Development</p>
                    <p className='item-desc'>
                      With DevGroup you can get full cycle services to build
                      custom software for a broad range of verticals and
                      functional areas.
                    </p>
                    <button className='item-btn'>Learn more</button>
                  </ServicesItem>
                </a>
              </Link>
            </ServicesFlex>
          </ServicesContainer>
        </>
        <>
          <ServicesContainer height='100%'>
            <ServicesHeading>
              <p> We develop and deliver</p>
            </ServicesHeading>

            <ServicesGrid2>
              {services.map((service, i) => (
                <ServicesItem
                  width='100%'
                  height='40rem'
                  key={i}
                  color={service.color}
                  className='serviceItem'
                >
                  <img src={service.icon} alt={service.name} />
                  <p className='item-name'>{service.name}</p>
                  <p className='item-desc'>
                    Productive, engaging and reliable solutions for <br />{" "}
                    business outcomes you deserve.
                  </p>
                </ServicesItem>
              ))}
            </ServicesGrid2>
          </ServicesContainer>
        </>

        <>
          <ServicesContainer height='100%'>
            <ServicesHeading>
              <p> Cooperation methods</p>
            </ServicesHeading>

            <ServicesFlex>
              {values.map((value, i) => (
                <ServicesItem width='37rem' key={i}>
                  <img src={value.icon} alt='' />
                  <p className='item-name'>{value.name}</p>
                  <p className='item-desc'>{value.desc}</p>
                </ServicesItem>
              ))}
            </ServicesFlex>
          </ServicesContainer>
        </>

        <>
          <ServicesContainer height='100%' id='#process'>
            <ServicesHeading>
              <p>Our Process</p>
            </ServicesHeading>

            <ServicesGrid>
              {process.map((item, i) => (
                <ServicesItem
                  width='100%'
                  key={i}
                  color={item.color}
                  className='processItem'
                >
                  <p className='item-name'>{item.name}</p>
                  <p className='item-desc'>{item.desc}</p>
                </ServicesItem>
              ))}
            </ServicesGrid>
          </ServicesContainer>
        </>
      </Layout>
    </>
  )
}
