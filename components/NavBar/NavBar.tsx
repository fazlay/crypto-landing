import { Button } from "components/Button/Button"
import React from "react"

const NavBar = () => {
  return (
    <div>
      <div className="container pt-[23px] ">
        <div className="flex h-[74px] flex-row items-center justify-between ">
          <div className="logo h-[70px]">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="menu_list text-lg text-white">
            <ul className=" flex flex-row ">
              <li className="px-5">Home </li>
              <li className="px-5">NFT Markets</li>
              <li className="px-5">Shop</li>
              <li className="px-5">About Us</li>
            </ul>
          </div>
          <div className="call-to-action">
            <Button href="#">Explore Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
