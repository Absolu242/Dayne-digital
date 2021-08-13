import React from "react"
import { useRouter } from "next/router"

//components
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"

//assets
import img1 from "../../public/assets/images/detail.svg"
import img2 from "../../public/assets/images/detail2.svg"
import icon1 from "../../public/assets/icons/09.svg"
import icon2 from "../../public/assets/icons/10.svg"
import icon3 from "../../public/assets/icons/11.svg"
import icon4 from "../../public/assets/icons/12.svg"
import arrow from "../../public/assets/icons/indicator.svg"
import profile from "../../public/assets/images/profile.svg"
import tag from "../../public/assets/images/tag.svg"

//data
import { projects } from "../../data/projects.data"

//styles
import {
  ChangeBtn,
  SectionContainer,
  SectionFlex,
  SectionHeading,
} from "../../styles/ProjectDetails.styles"

export default function ProjectDetails() {
  const router = useRouter()
  const { projectId } = router.query

  const project = projects.filter((item) => item.id === projectId)

  const check = project.length !== 0 ? project[0] : ""

  console.log(projects)

  const headerProps = {
    heading: check.name,
    text: "Ready solutions for creating any idea",
    image: check.image,
    width: "60%",
  }

  const previousItem = () => {
    if (parseInt(projectId) !== 1) {
      router.push(`/projectDetails/${projectId - 1}`)
    }
  }

  const nextItem = () => {
    if (projectId !== projects.length) {
      router.push(`/projectDetails/${parseInt(projectId) + 1}`)
    }
  }

  const shortInfos = [
    {
      icon: icon1,
      title: "Location",
      value: "USA",
    },
    {
      icon: icon2,
      title: "Industry",
      value: "IT",
    },
    {
      icon: icon3,
      title: "Technologies",
      value: "Node , Reactjs",
    },
    {
      icon: icon4,
      title: "Team size",
      value: "5 developpers <br/> 2 designers",
    },
  ]

  return (
    <>
      <Layout>
        <Header headerProps={headerProps} />

        <>
          <SectionContainer>
            <SectionFlex>
              <SectionHeading> About</SectionHeading>
              <div className='info'>
                <p className='text'>
                  Ad.IQ is a digital marketing solutions for self-starter
                  spirits and established legacy brands. They help growing and
                  supporting their customer’s business. We work with a web
                  builder for Ad.IQ.
                </p>
              </div>
            </SectionFlex>

            <SectionFlex>
              <SectionHeading> Business challange</SectionHeading>
              <div className='info'>
                <p className='text'>
                  Our business challenge was to build very simple and
                  understandable web builder for landings, online shopping blogs
                  and others. We use settings pop ups that users can simply and
                  fast find all features they need.
                </p>
              </div>
            </SectionFlex>

            <SectionFlex>
              <SectionHeading> Short Info</SectionHeading>
              <div className='info shortInfo'>
                {shortInfos.map((item, i) => (
                  <div className='shortInfo-item' key={i}>
                    <img src={item.icon} alt='icon' className='icon' />
                    <p className='title'>{item.title}</p>
                    <p
                      className='value'
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    />
                  </div>
                ))}
              </div>
            </SectionFlex>

            <SectionFlex>
              <SectionHeading> Product overview</SectionHeading>
              <div className='info'>
                <p>Here's some screens of our work.</p>
                <img src={check.image} alt='work' />
              </div>
            </SectionFlex>

            <SectionContainer bkg='#EDF4F4'>
              <SectionFlex>
                <SectionHeading>
                  {" "}
                  Values delivered by <br /> our team
                </SectionHeading>
                <div className='info'>
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
                        fully functional MVP for presentation to investors and
                        ready to market launch
                      </span>
                    </li>

                    <li className='value-item'>
                      <img src={arrow} alt='arrow' />
                      <span>
                        try to find new ways and experiment with different
                        unique approaches
                      </span>
                    </li>
                  </ul>
                  <div className='value-images'>
                    <img src={img1} alt='value' />
                    <img src={img2} alt='value' />
                  </div>
                </div>
              </SectionFlex>
            </SectionContainer>

            <SectionFlex>
              <SectionHeading> Client Review</SectionHeading>
              <div className='info review'>
                <img src={profile} alt='review' className='review-img' />
                <div>
                  <p>Stephane</p>
                  <p>CEO</p>
                  <div>
                    <img src={tag} alt='tag' className='tag' />
                    <p>
                      I just wanted to share a quick note and let you know that
                      you guys do a really good job. I’m glad I decided to work
                      with you. It’s really great how easy your websites are to
                      update and manage. I never have any problem at all.
                    </p>
                  </div>
                </div>
              </div>
            </SectionFlex>

            <SectionContainer bkg='#EDF4F4' pd='3rem 0'>
              <SectionFlex pd='1rem 0'>
                <ChangeBtn disabled={parseInt(projectId) === 1 ? true : false}>
                  <button onClick={() => previousItem()}>
                    Previous project
                  </button>
                </ChangeBtn>

                <ChangeBtn
                  disabled={
                    parseInt(projectId) === projects.length ? true : false
                  }
                >
                  <button onClick={() => nextItem()}>Next project</button>
                </ChangeBtn>
              </SectionFlex>
            </SectionContainer>
          </SectionContainer>
        </>
      </Layout>
    </>
  )
}
