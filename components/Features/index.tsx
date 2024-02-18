import React from "react"

import FeatureCard from "./FeatureCard"

const Features = () => {
  return (
    <div className="container  text-white">
      <div className=" flex flex-col items-center  pb-[60px]">
        <h2>Secure & Private</h2>
        <p>24/7 Dedicated Support Team</p>
      </div>
      <div className="flex-item flex">
        {[1, 2, 3].map((item) => (
          <FeatureCard key={item} />
        ))}
      </div>
    </div>
  )
}

export default Features
