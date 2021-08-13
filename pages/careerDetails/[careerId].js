import React, { useState } from "react"
import { useRouter } from "next/dist/client/router"
//styles
import {
  CareerContainer,
  CareerHeading,
  CareerGrid2,
  CareerFlex,
  CareerItem,
  CareerButton,
} from "../../styles/Career.styles"

//components
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"

import ApplyPopup from "../../components/ApplyPopup/ApplyPopup"
//assets
import icon from "../../public/assets/images/iconvacancy.svg"

import arrow from "../../public/assets/icons/indicator.svg"

//data
import { careers } from "../../data/careers.data"

export default function Career() {
  const router = useRouter()
  const { careerId } = router.query

  const career = careers.filter((item) => item.id === careerId)

  const check = career.length !== 0 ? career[0] : ""

  const [btnClick, setBtnClick] = useState(false)

  const headerProps = {
    heading: check.name,
    text: `Currently we are looking for a ${check.name} in our ${check.location} location.`,
    height: "20vh",
  }

  return (
    <Layout>
      <CareerContainer>
        <ApplyPopup btnClick={btnClick} setBtnClick={setBtnClick} />
        <CareerFlex>
          <div className='job-description'>
            <Header headerProps={headerProps} />

            <div className='job-container'>
              <CareerHeading fs='2.4rem' mg='2rem 0'>
                <p> Job summary</p>
              </CareerHeading>

              <p className='text'>
                The candidate is expected to possess high-level data analysis
                skills and to be competent to work with various teams and under
                minimal supervision carrying out all essential data-related
                tasks.
              </p>
            </div>

            <div className='job-container'>
              <CareerHeading fs='2.4rem' mg='2rem 0'>
                <p> Main responsabilities</p>
              </CareerHeading>
              <ul className='value-list'>
                <li className='value-item'>
                  <img src={arrow} alt='arrow' />
                  <span>
                    quick and efficient development with deep researches
                  </span>
                </li>

                <li className='value-item'>
                  <img src={arrow} alt='arrow' />
                  <span>
                    fully functional MVP for presentation to investors and ready
                    to market launch
                  </span>
                </li>

                <li className='value-item'>
                  <img src={arrow} alt='arrow' />
                  <span>
                    try to find new ways and experiment with different unique
                    approaches
                  </span>
                </li>
              </ul>
            </div>

            <div className='job-container'>
              <CareerHeading fs='2.4rem' mg='2rem 0'>
                <p>Main Requirements</p>
              </CareerHeading>
              <ul className='value-list'>
                <li className='value-item'>
                  <img src={arrow} alt='arrow' />
                  <span>
                    quick and efficient development with deep researches
                  </span>
                </li>

                <li className='value-item'>
                  <img src={arrow} alt='arrow' />
                  <span>
                    fully functional MVP for presentation to investors and ready
                    to market launch
                  </span>
                </li>

                <li className='value-item'>
                  <img src={arrow} alt='arrow' />
                  <span>
                    try to find new ways and experiment with different unique
                    approaches
                  </span>
                </li>
              </ul>
            </div>

            <div className='job-container'>
              <CareerHeading fs='2.4rem' mg='2rem 0'>
                <p>What you will get with DayneDigital</p>
              </CareerHeading>
              <ul className='value-list'>
                <li className='value-item'>
                  <img src={arrow} alt='arrow' />
                  <span>
                    quick and efficient development with deep researches
                  </span>
                </li>

                <li className='value-item'>
                  <img src={arrow} alt='arrow' />
                  <span>
                    fully functional MVP for presentation to investors and ready
                    to market launch
                  </span>
                </li>

                <li className='value-item'>
                  <img src={arrow} alt='arrow' />
                  <span>
                    try to find new ways and experiment with different unique
                    approaches
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className='join-section'>
            <img src={icon} alt='' />
            <p className='heading'>Interested in Vacancy ?</p>
            <p> Join us or refer a friend</p>

            <div className='buttons'>
              <CareerButton
                className=' btn-join'
                onClick={() => setBtnClick(true)}
              >
                {" "}
                Join DayneDigital{" "}
              </CareerButton>{" "}
              <br />
              <CareerButton
                className=' btn-refer'
                onClick={() => setBtnClick(true)}
              >
                {" "}
                Refer a friend
              </CareerButton>
            </div>
          </div>
        </CareerFlex>
        <>
          <CareerContainer>
            <CareerHeading>
              <p> You may Find interesting</p>
            </CareerHeading>

            <CareerGrid2>
              {career
                .filter((item) => item.location === check.location)
                .map((job, i) => (
                  <CareerItem key={i}>
                    <p className='job-name'>{job.name}</p>
                    <p className='job-location'>{job.location}</p>
                  </CareerItem>
                ))}
            </CareerGrid2>
          </CareerContainer>
        </>
      </CareerContainer>
    </Layout>
  )
}
