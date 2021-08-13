import React from "react"

//components
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"

//styles
import {
  AboutContainer,
  AboutFlex,
  AboutHeading,
} from "../../styles/About.styles"

//assests
import icon1 from "../../public/assets/icons/07.svg"
import icon2 from "../../public/assets/icons/05.svg"
import icon3 from "../../public/assets/icons/06.svg"

export default function About() {
  const headerProps = {
    heading:
      "We put our hearts into the <br/> development by applying our <br/> talents and intellect ",
    backgroundColor: "#F4FDFF",
  }
  return (
    <>
      <Layout>
        <Header headerProps={headerProps} />

        <AboutContainer>
          <AboutFlex>
            <div className='stats'>
              <p className='stats-numbers'>50.000+</p>
              <p className='stats-name'>Works hours</p>
            </div>

            <div className='stats'>
              <p className='stats-numbers'>80</p>
              <p className='stats-name'>Satisfied customers</p>
            </div>

            <div className='stats'>
              <p className='stats-numbers'>300</p>
              <p className='stats-name'>Team members</p>
            </div>

            <div className='stats'>
              <p className='stats-numbers'>400</p>
              <p className='stats-name'>Released projects</p>
            </div>

            <div className='stats'>
              <p className='stats-numbers'>55</p>
              <p className='stats-name'>Dedicated teams</p>
            </div>

            <div className='stats'>
              <p className='stats-numbers'>6000+</p>
              <p className='stats-name'>Hours per month</p>
            </div>
          </AboutFlex>
        </AboutContainer>

        <AboutContainer>
          <AboutHeading>
            <p>Company life</p>
          </AboutHeading>
          <AboutFlex>
            <img
              className='image-cp'
              src='/assets/images/image6.png'
              alt='about'
            />
            <img
              className='image-cp'
              src='/assets/images/image6.png'
              alt='about'
            />
          </AboutFlex>
        </AboutContainer>

        <AboutContainer>
          <AboutFlex>
            <div className='our-vision'>
              <div className='vision'>
                <AboutHeading>Our Vision</AboutHeading>
                <p>
                  Start it strong with our all‑in‑one Marketing Platform so you
                  can market smarter, build your audience, and grow your
                  business.
                  <br />
                  <br />
                  Our belief in creating tangible value for our customers is
                  what we think is different about ImproveIt. Our attention to
                  detail and quality is unmatched in the industry. We’re not
                  just a resource provider. We value our customers’ success as
                  much as our own – sharing development risk, so that they can
                  be bold in their adoption of new technologies.
                </p>
              </div>

              <div>
                <img src='/assets/images/image7.png' alt='about' />
              </div>
            </div>
          </AboutFlex>
        </AboutContainer>

        <AboutContainer>
          <AboutHeading>
            <p>What you get with DevGroup</p>
          </AboutHeading>
          <AboutFlex>
            <div className='item'>
              <img src={icon1} className='item-icon' alt='about-icon' />
              <p>High-quality development experience</p>
            </div>

            <div className='item'>
              <img src={icon2} className='item-icon' alt='about-icon' />
              <p>Flexible, cost-efficient cooperation models</p>
            </div>

            <div className='item'>
              <img src={icon3} className='item-icon' alt='about-icon' />
              <p>Extensive technology consulting expertise</p>
            </div>
          </AboutFlex>
        </AboutContainer>

        <AboutContainer>
          <AboutHeading>
            <p>What's different about us ?</p>
          </AboutHeading>
          <AboutFlex>
            <div className='item'>
              <p className='item-title'>Engeneering with passion</p>
              <p className='about'>
                We devise bold solutions to the most intricate client
                challenges. It’s our ability to explore new technologies to
                design best-fit solutions.
              </p>
            </div>

            <div className='item'>
              <p className='item-title'>Performance focus</p>
              <p className='about'>
                We become your dedicated partner. Which means we won’t finish a
                project until both we, and you, are 100% happy.{" "}
              </p>
            </div>

            <div className='item'>
              <p className='item-title'>Dedication to success</p>
              <p className='about'>
                We drive innovations that help our clients stay ahead of the
                curve. We care about your immediate needs and your long-term
                goals.{" "}
              </p>
            </div>
          </AboutFlex>
        </AboutContainer>
      </Layout>
    </>
  )
}
