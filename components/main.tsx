import Image from "next/image";

import tempPic from "../assets/me.jpg";

import {
  BsFillMoonStarsFill,
  BsGlobe,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillDatabase } from "react-icons/ai";

export default function Main() {
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl text-teal-500 font-poppins">Portfolio</h1>
        <ul className="flex items-center">
          <li>
            <a
              className="bg-teal-500 text-gray-800 px-4 py-2 rounded-md ml-10 "
              href="https://drive.google.com/file/d/1fA0Z3LisAqXXyXjHXioWRfjCuG9tE-3K/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="text-right p-10 ">
          <h2 className="text-5xl py-2 text-teal-500 font-medium">
            Wilfredo E Recinos
          </h2>
          <h3 className="text-2xl text-gray-400 py-2">
            {" "}
            Developer and Programmer.
          </h3>
          <p className="text-md  py-5 leading-6 text-gray-500">
            {" "}
            Writing side projects and on the hunt for a job in development!
          </p>
        </div>
        <div className="relative py-2 left-7">
          <Image
            src={tempPic}
            alt="profile pic "
            className="rounded-full mt-2 h-66 w-60"
          />
        </div>
      </div>
      <div className="text-5xl flex justify-center gap-10 cursor-pointer text-gray-400">
        <a href="https://www.linkedin.com/in/wilfredo-recinos-09a663181/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin />
        </a>
        <a  href="https://github.com/Wilfred0zz" target="_blank" rel="noopener noreferrer">
        <AiFillGithub />
        </a>
      </div>
      <div className="text-white text-center">
        <h3 className="text-2xl text-center py-1 pt-40">Scroll Down </h3>
        <div className=" motion-reduce:animate-bounce  w-10 h-10 py-20 text-5xl mx-auto justify-center text-teal-500">
          <BsFillArrowDownCircleFill />
        </div>
      </div>
    </div>
  );
}
