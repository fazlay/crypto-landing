import { Button } from "components/Button/Button"
import React from "react"

const NavBar = () => {
  return (
    <div>
      <div className="container">
        <div className="flex h-[74px] flex-row items-center justify-between">
          <div className="log font-black text-white">Logo</div>
          <div className="menu_list text-lg text-white">
            <ul className=" flex flex-row">
              <li className="px-5">Home</li>
              <li className="px-5">ABOUT ME</li>
              <li className="px-5">Contact</li>
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
