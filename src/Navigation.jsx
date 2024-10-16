import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
      <nav className=" p-4 h-16 w-full shadow bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600  fixed z-10 ">
    <div className="mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold ">
        LabXperience
      </div>
      <div>
        <ul className="flex space-x-4 font-bold">
          <li>
            <Link to={"/"} className="text-black hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
          <Link to={"/about"} className="text-black hover:text-gray-200">
              About Us
            </Link>
          </li>
          <li>
          <Link to={"/lab"} className="text-black hover:text-gray-200">
               Lab
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
