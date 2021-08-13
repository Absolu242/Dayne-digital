import React from "react"

//components
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"

//assets
import image from "../../public/assets/images/team.svg"
import icon1 from "../../public/assets/icons/01.svg"
import icon2 from "../../public/assets/icons/02.svg"
import icon3 from "../../public/assets/icons/03.svg"
import icon4 from "../../public/assets/icons/04.svg"
import icon5 from "../../public/assets/icons/05.svg"

//styles
import {
  TeamContainer,
  TeamFlex,
  TeamHeading,
  TeamGrid2,
} from "../../styles/Team.styles"

export default function Team() {
  const headerProps = {
    heading: "Dedicated <br/> Team ",
    backgroundColor: "#F0E4FF",
    image: image,
  }
  return (
    <>
      <Layout>
        <Header headerProps={headerProps} />
        <>
          <TeamContainer>
            <TeamHeading>
              <p>Benefits of the dedicated team model</p>
            </TeamHeading>

            <TeamFlex>
              <div className='benef'>
                <img src={icon1} className='benef-icon' />
                <p className='benef-name'>Flexibility and scalability</p>
              </div>

              <div className='benef'>
                <img src={icon2} className='benef-icon' />

                <p className='benef-name'>Visual communication</p>
              </div>

              <div className='benef'>
                <img src={icon3} className='benef-icon' />

                <p className='benef-name'>Efficiency</p>
              </div>

              <div className='benef'>
                <img src={icon4} className='benef-icon' />

                <p className='benef-name'>Team integration</p>
              </div>

              <div className='benef'>
                <img src={icon5} className='benef-icon' />

                <p className='benef-name'>control</p>
              </div>
            </TeamFlex>
          </TeamContainer>
        </>

        <>
          <TeamContainer>
            <TeamHeading>
              <p>How does the recruiter model work?</p>
            </TeamHeading>

            <TeamGrid2>
              <div className='step'>
                <p className='step-name'>
                  <span>First </span>step
                </p>
                <p className='step-desc'>
                  First, the customer’s demands as to the quantity and
                  qualifications of personnel for the project should be
                  outlined.
                </p>
              </div>

              <div className='step'>
                <p className='step-name'>
                  <span>Second </span>step
                </p>
                <p className='step-desc'>
                  The next step - ImproveIT assembles and provides a dedicated
                  team according to those demands. The customer sets the project
                  requirements, work load and schedule for the team.
                </p>
              </div>

              <div className='step'>
                <p className='step-name'>
                  <span>Third </span>step
                </p>
                <p className='step-desc'>
                  The project itself and the team’s operation are fully
                  controlled and managed by the customer. At the same time, the
                  dedicated team is supervised by ImproveIT to achieve the
                  highest performance.
                </p>
              </div>

              <div className='step'>
                <p className='step-name'>
                  <span>Four </span>step
                </p>
                <p className='step-desc'>
                  The scheduled operation starts when the engineering team is
                  assembled by ImproveIT and the project scope is outlined by
                  the customer.
                </p>
              </div>
            </TeamGrid2>
          </TeamContainer>
        </>
      </Layout>
    </>
  )
}
