import React from "react"

//components
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Header/Header"

//assets
import image from "../../public/assets/images/07.svg"
import icon1 from "../../public/assets/icons/java.svg"
import icon2 from "../../public/assets/icons/node.svg"
import icon3 from "../../public/assets/icons/php.svg"
import icon4 from "../../public/assets/icons/net.svg"
import icon5 from "../../public/assets/icons/python.svg"
import icon6 from "../../public/assets/icons/windows.svg"

//styles
import {
  DevContainer,
  DevFlex,
  DevHeading,
  DevGrid3,
  DevItem,
} from "../../styles/Development.styles"
import { colors } from "../../styles/global.styles"

//data
import { clients } from "../../data/clients.data"

//services list
export const teachstack = [
  {
    name: "java",
    icon: icon1,
    color: colors.secondaryColor1,
  },
  {
    name: "nodejs",
    icon: icon2,
    color: colors.secondaryColor2,
  },
  {
    name: "php",
    icon: icon3,
    color: colors.secondaryColor3,
  },
  { name: "net", icon: icon4, color: colors.secondaryColor4 },
  {
    name: "python",
    icon: icon5,
    color: colors.secondaryColor5,
  },
  {
    name: "windows",
    icon: icon6,
    color: colors.secondaryColor1,
  },
]

export default function Development() {
  const headerProps = {
    heading: "Development ",
    text: "With ImproveIT you can get full cycle services <br/> to build custom software for a broad range of <br/> verticals and functional areas.",
    image: image,
    width: "fit-content",
  }
  return (
    <>
      <Layout>
        <Header headerProps={headerProps} />

        <>
          <DevContainer>
            <DevFlex>
              <DevHeading>
                {" "}
                Custom web <br /> application
              </DevHeading>
              <div className='info'>
                <p className='text'>
                  If you want to shift your commercial activity to a new
                  advanced level, a custom web app is a proper way to discover
                  new horizons. If you need to build a new solution or improve
                  the functions of the existing one, our team is ready to
                  accomplish the task in a quick and cost-efficient way.
                </p>
              </div>
            </DevFlex>

            <DevFlex>
              <DevHeading>
                {" "}
                Mobile-first <br /> websites
              </DevHeading>
              <div className='info'>
                <p className='text'>
                  Today people say that if your site is not mobile-friendly,
                  it’s not on the internet. This fact caused the necessity to
                  adapt web products to advanced criteria such as dimension or
                  resolution of the screen. It’s necessary to adjust your
                  website and make it look fascinating and work smoothly on each
                  type of device to keep and increase the number of your
                  audience.
                </p>
              </div>
            </DevFlex>

            <DevFlex>
              <DevHeading>
                {" "}
                Startup software <br /> products
              </DevHeading>
              <div className='info'>
                <p className='text'>
                  You have already chalked out a niche and an idea, but have
                  doubts in the following steps? The best way is to rely on our
                  team that has rich experience in start-up MVPs and products
                  creation. We will not only help you reduce time-to-market, but
                  will also save your budget and protect the code.
                </p>
              </div>
            </DevFlex>

            <DevFlex>
              <DevHeading> Cloud development</DevHeading>
              <div className='info'>
                <p className='text'>
                  Advanced cloud computing is the ticket to your business
                  expansion associated with the growth of users. Naturally, you
                  will require a sophisticated solution that can be provided by
                  our experts. Their skills and experience will contribute to
                  the prosperity of your business.
                </p>
              </div>
            </DevFlex>
          </DevContainer>

          <DevContainer>
            <DevHeading width='100%'>
              <p>Top acquirements</p>
            </DevHeading>

            <DevGrid3>
              {teachstack.map((item, i) => (
                <DevItem key={i} bkg={item.color}>
                  <div className='item'>
                    <img src={item.icon} alt={item.name} />
                  </div>
                </DevItem>
              ))}
            </DevGrid3>
          </DevContainer>
        </>

        <>
          <DevContainer>
            <DevHeading width='100%'>
              <p> Our Clients</p>
            </DevHeading>

            <DevFlex jc='space-between'>
              {clients.map((value, i) => (
                <DevItem className='clientItem' key={i}>
                  <img src={value.logo} alt='client logo' />
                </DevItem>
              ))}
            </DevFlex>
          </DevContainer>
        </>
      </Layout>
    </>
  )
}
