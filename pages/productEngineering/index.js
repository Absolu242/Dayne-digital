import React from "react"

//components
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"

//assets
import image from "../../public/assets/images/06.svg"
import icon from "../../public/assets/icons/03.svg"

//styles
import {
  PdeContainer,
  PdeFlex,
  PdeHeading,
  PdeGrid2,
  PdeItem,
} from "../../styles/ProductEngineering.styles"

export default function ProductEngineering() {
  const headerProps = {
    heading: "Product <br/> engineering ",
    text: "Our software product Pdeelopment services ensure <br/> iterative Pdeelopment using a sharp technologies for <br/> faster time to market, robustness, and scale.",
    image: image,
  }
  return (
    <>
      <Layout>
        <Header headerProps={headerProps} />

        <PdeContainer>
          <div className='text'>
            <div className='text-content'>
              <img src={icon} alt='icon' />
              <p>
                Solve real problems and improve your vital business <br />{" "}
                metrics through beautiful and intuitive interfaces.{" "}
              </p>
            </div>
          </div>
        </PdeContainer>
        <>
          <PdeContainer>
            <PdeHeading width='100%' pd='5rem 0'>
              <p>Principles we follow</p>
            </PdeHeading>

            <PdeGrid2 img='/assets/images/image5.png'>
              <div className='grid-image'></div>
              <div className='grid-info'>
                <div className='grid-info-content'>
                  <img src={icon} alt='icon' />
                  <PdeHeading>Knowledge is power</PdeHeading>
                  <p>
                    Every moment significant changes happen in the world. Things
                    that used to be universal truth are replaced with modern and
                    updated notions and ideas. Hence, it is necessary to keep up
                    with the flow of global information to be successful and
                    competitive.
                    <br /> <br />
                    We maintain knowledge-sharing environment and constantly
                    develop ourselves to provide our customers with the advanced
                    solutions.
                  </p>
                </div>
              </div>
            </PdeGrid2>
          </PdeContainer>
        </>

        <>
          <PdeContainer>
            <PdeHeading width='100%'>
              <p>Our working methods</p>
            </PdeHeading>

            <PdeFlex>
              <PdeHeading>
                <div className='bar'></div>
                <span>01</span>
                Individual Approach
              </PdeHeading>
              <div className='info'>
                <p className='text'>
                  Using the same template is not about us, we stick to an
                  individual approach to each project and customer. So you can
                  always contact our managers with your ideas and needs, and we
                  will find a way to implement them.
                </p>
              </div>
            </PdeFlex>

            <PdeFlex>
              <PdeHeading>
                <div className='bar'></div>
                <span>02</span>
                Regular communication
              </PdeHeading>
              <div className='info'>
                <p className='text'>
                  We understand the customer’s need to monitor and control the
                  working process. Therefore, we provide the possibility to keep
                  track on the project in any convenient form – written reports,
                  audio and video meetings.
                </p>
              </div>
            </PdeFlex>

            <PdeFlex>
              <PdeHeading>
                <div className='bar'></div>
                <span>03</span>
                Change management
              </PdeHeading>
              <div className='info'>
                <p className='text'>
                  Every working process can be interrupted by some external and
                  internal changes. In the development process, which is highly
                  creative and people-dependent, alterations occur rather often.
                  We take responsibility for change management and guarantee
                  immediate response to ensure the highest performance.
                </p>
              </div>
            </PdeFlex>

            <PdeFlex>
              <PdeHeading>
                {" "}
                <div className='bar'></div>
                <span>04</span>
                Quality assurance
              </PdeHeading>

              <div className='info'>
                <p className='text'>
                  Every working process can be interrupted by some external and
                  internal changes. In the development process, which is highly
                  creative and people-dependent, alterations occur rather often.
                  We take responsibility for change management and guarantee
                  immediate response to ensure the highest performance.
                </p>
              </div>
            </PdeFlex>

            <PdeFlex>
              <PdeHeading>
                {" "}
                <div className='bar'></div>
                <span>05</span>
                Result on time
              </PdeHeading>

              <div className='info'>
                <p className='text'>
                  Deadline is a keyword for every our employee. Violation of the
                  agreed timescales is inappropriate, and the company always
                  strives to meet them and avoid any schedule delays.
                </p>
              </div>
            </PdeFlex>
          </PdeContainer>
        </>
      </Layout>
    </>
  )
}
