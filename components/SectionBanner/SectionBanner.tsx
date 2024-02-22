import { GradientButton } from "components/Button/GradientButton"
import { Typography } from "components/Typography/Typography"
import React from "react"

interface SectionBannerProps {
  index: number
}
const SectionBanner: React.FC<SectionBannerProps> = ({ index }) => {
  return (
    <div className={`flex ${index % 2 == 0 ? "flex-row-reverse" : "flex-row"}`}>
      <div className="left flex flex-row items-center">
        <div>
          <Typography tag="h2" intent={"paragraphTitle"}>
            Trade with confidence with Our platform and easy to use.
          </Typography>
          <Typography tag="p" intent={"subtitle"}>
            Stay up-to-date with the latest news and trends in the crypto space. Follow our market insights to make
            informed decisions.
          </Typography>
          <GradientButton>Explore Now</GradientButton>
        </div>
      </div>
      <div className="right  ">
        <img src="/images/home/platform_service.png" alt="platform_service" className="w-[591px]" />
      </div>
    </div>
  )
}

export default SectionBanner
