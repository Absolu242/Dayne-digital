import Link from "next/link"
import React from "react"

//components
import {
  ProcessBannerContainer,
  ProcessBannerContent,
  ProcessBannerMain,
  ProcessBannerHeading,
  ProcessBannerText,
  ProcessBannerButton,
  ProcessBannerImage,
} from "./ProcessBanner.styles"

export default function ProcessBanner() {
  return (
    <>
      <ProcessBannerContainer>
        <ProcessBannerContent>
          <ProcessBannerMain>
            <ProcessBannerHeading>Work Process</ProcessBannerHeading>
            <ProcessBannerText>
              We've perfected a simple and time-tested processes <br /> for
              delivering high-quality products that your users will love.
            </ProcessBannerText>

            <Link href='/services#process'>
              <a>
                <ProcessBannerButton>See how we do it</ProcessBannerButton>
              </a>
            </Link>
          </ProcessBannerMain>
          <ProcessBannerImage />
        </ProcessBannerContent>
      </ProcessBannerContainer>
    </>
  )
}
