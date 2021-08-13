import Link from "next/link"
import React from "react"

import {
  HeaderContainer,
  HeaderContent,
  HeaderMain,
  HeaderGreet,
  HeaderHeading,
  HeaderText,
  HeaderButton,
  HeaderImage,
} from "./Header.styles"

export default function Header({ headerProps }) {
  //This are the elements which can be include in the header
  const {
    greet,
    heading,
    text,
    buttonText,
    image,
    width,
    height,
    backgroundColor,
    buttonLink,
  } = headerProps

  return (
    <>
      <HeaderContainer
        bkgcolor={backgroundColor !== undefined && backgroundColor}
        height={height}
      >
        <HeaderContent height={height}>
          <HeaderMain width={width}>
            {greet === undefined ||
              (greet !== "" && <HeaderGreet>{greet} </HeaderGreet>)}
            {heading === undefined ||
              (heading !== "" && (
                <HeaderHeading dangerouslySetInnerHTML={{ __html: heading }} />
              ))}
            {text === undefined ||
              (text !== "" && (
                <HeaderText dangerouslySetInnerHTML={{ __html: text }} />
              ))}

            {buttonText === undefined ||
              (buttonText !== "" && (
                <Link href={buttonLink}>
                  <a>
                    <HeaderButton>{buttonText}</HeaderButton>
                  </a>
                </Link>
              ))}
          </HeaderMain>
          {image === undefined || (image !== "" && <HeaderImage img={image} />)}
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}
