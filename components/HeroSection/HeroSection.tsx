import { Button } from "components/Button/Button"
import React from "react"

const HeroSection = () => {
  return (
    <div className="container">
      <div className="flex flex-row justify-between">
        <div className="left">
          <h1 className="text-[64px] font-semibold text-white">
            Explore The Largest{" "}
            <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">NFT</span>{" "}
            Marketplaces
          </h1>
          <p>Buy, Sell & Trade Cryptocurrency Easily and Securely</p>
          <div>
            <Button href="#">Connect Wallet</Button>
            <Button href="#" intent="secondary">
              Learn More
            </Button>
          </div>
          <div>
            <p>Our Members</p>
            <div className="avatars"></div>
          </div>
        </div>
        <div className="right">
          <img src="/images/home/home_hero.png" alt="hero_image" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
