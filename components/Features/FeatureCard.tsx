import React from "react"

const FeatureCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative -mb-[60px] ">
        <div className=" absolute -z-10 mb-[15px] flex h-[93px] w-[93px]  items-center justify-center rounded-full border-[#F7931A] bg-[#DD7F0D]"></div>

        <div
          className=" relative z-10 mb-[15px] flex h-[93px] w-[93px] items-center  justify-center rounded-full border-[#F7931A] bg-[#DD7F0D]
        before:absolute before:-z-10 before:h-[40px]  before:w-[40px]
        "
        >
          <img src="images/home/bitcoin.svg" alt="bitcoin" />
        </div>
      </div>
      {/* bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  */}
      <div className=" isolate  z-0 mx-[5px]  flex flex-col items-center  justify-center rounded-lg bg-gradient-to-b  from-white/10 to-white/5 px-[20px] pb-[40px]  pt-[20px] backdrop-blur-lg ">
        <h4 className="pt-[30px] text-[32px] font-bold ">Invest Crypto</h4>
        <p className="text-center">
          Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform.
        </p>
        <div className="flex flex-row items-center pt-[15px] text-[#6200EE]">
          <a href="#" className="pr-[5px]">
            Get Started
          </a>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
