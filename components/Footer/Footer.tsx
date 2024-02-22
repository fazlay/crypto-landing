import ReactIcon from "components/Icon"
import { Typography } from "components/Typography/Typography"
import React from "react"
import { FaRegEnvelope } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi"

const Footer = () => {
  return (
    <div className="container">
      <div className=" flex flex-row">
        <div className="left w-1/2">
          <img src="/images/logo.png" alt="logo" />
          <Typography tag="p" intent={"subtitle"}>
            Cryptocurrency is a digital form of currency that utilizes cryptography to secure transactions, control the
            creation of new units, and verify the transfer of assets.
          </Typography>
          <div className="flex flex-row">
            <div className="flex flex-row">
              <ReactIcon>
                <FiPhoneCall />
              </ReactIcon>
              <div>
                <Typography tag="p" intent={"subtitle"}>
                  have a Question?
                </Typography>
                <Typography tag="p" intent={"subtitle"}>
                  +91 1234567890
                </Typography>
              </div>
            </div>
            <div className="flex flex-row">
              <ReactIcon>
                <FiPhoneCall />
              </ReactIcon>
              <div>
                <Typography tag="p" intent={"subtitle"}>
                  have a Question?
                </Typography>
                <Typography tag="p" intent={"subtitle"}>
                  +91 1234567890
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="right w-1/2">
          <Typography tag="h2" intent={"paragraphTitle"}>
            Quick Links
          </Typography>
          <Typography tag="h2" intent={"subtitle"}>
            stay Tuned
          </Typography>

          {/* <div className="relative flex flex-row">
            <input
              type="text"
              placeholder="Enter your email"
              className=" absolute h-[40px] w-full rounded-full px-[10px]"
            />
            <input
              type="submit"
              value="Submit"
              className=" bg-primary-dark-violate absolute right-0 mr-2 mt-1 h-[30px] rounded-full px-5 text-white"
            />
          </div> */}

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6  text-[24px] text-gray-500">
              <FaRegEnvelope />
            </div>
            <input
              type="search"
              id="default-search"
              className=" w-full rounded-full px-6 py-3 pl-14 "
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="absolute bottom-1 right-2 rounded-full bg-primary-dark-violate px-4 py-2 text-white "
            >
              Search
            </button>
          </div>

          <div className="flex flex-row justify-end gap-x-3">
            <ReactIcon>
              <FiPhoneCall />
            </ReactIcon>
            <ReactIcon>
              <FiPhoneCall />
            </ReactIcon>
            <ReactIcon>
              <FiPhoneCall />
            </ReactIcon>
            <ReactIcon>
              <FiPhoneCall />
            </ReactIcon>
          </div>
        </div>
      </div>
      <div className="copyright">
        <Typography tag="p" intent={"subtitle"}>
          © 2021 All rights reserved
        </Typography>
      </div>
    </div>
  )
}

export default Footer
