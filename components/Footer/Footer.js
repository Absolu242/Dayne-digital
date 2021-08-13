import React from "react"
import Link from "next/link"

import {
  FooterContainer,
  FooterTop,
  FooterLeft,
  FooterRight,
  Input,
  FooterButton,
  FooterBottomOne,
  FooterBottomTwo,
  Logo,
} from "./Footer.styles"

import twitter from "../../public/assets/icons/Twitter.svg"
import facebook from "../../public/assets/icons/Facebook.svg"

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterTop>
          <FooterLeft>
            <h1>Let's Work</h1>
            <p>
              Let’s make something good together! Just enter your details and we
              will reply within 24 hours.
            </p>
          </FooterLeft>
          <FooterRight>
            <Input placeholder='Enter your email' />
            <FooterButton>Get Started</FooterButton>
          </FooterRight>
        </FooterTop>

        <FooterBottomOne>
          <Logo>
            <p>
              Dayne<span>Digital</span>
            </p>
          </Logo>

          <div className='infos'>
            <div className='infoItem'>
              <p>Email us</p>
              <p>info@daynedigital.com</p>
            </div>

            <div className='infoItem'>
              <p>Call us</p>
              <p>+1 321 22 45 567</p>
            </div>
          </div>
        </FooterBottomOne>
        <FooterBottomTwo>
          <p className='copy'>2021, DayneDigital &copy; Copyright</p>
          <div className='social-media'>
            <img src={twitter} alt='twitter' />

            <img src={facebook} alt='twitter' />
          </div>
        </FooterBottomTwo>
      </FooterContainer>
    </>
  )
}
