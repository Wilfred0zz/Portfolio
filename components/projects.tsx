import Image from "next/image";

import aitaPic from "../assets/Aita-Demo.gif";
import campusCuisineMobile from "../assets/CampusCuisineMobile.gif";
import capture from "../assets/Capture.png";
import solarsystemPic from "../assets/SolarSystem.gif";

export default function Projects() {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-2 text-white text-center ">Projects</h3>
        <p className="text-md  py-5 leading-8 text-gray-100 text-center">
          {" "}
          Below are projects I have worked on with other people and on my own.
          If you click on the gifs they will take you to the source code.
        </p>
      </div>

      <div className="grid grid-cols-3 shadow-sm shadow-gray-800 pb-5">
        <div>
          <h4 className="text-2xl py-1 text-center text-teal-500">Summary</h4>
          <p className="text-md leading-8 text-white text-center pt-6">
            {" "}
            Aita is a site where a user can purchase a seed and then you can
            grow that seed. After which you can then after the day and proper
            care sell the plant to then buy more seeds of different prices from
            the store. Each user starts off with a certain balance and can
            create their own account.
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-2xl py-1  text-teal-500">Tech Stack</h4>
          <p className="text-gray-400 py-1 pt-6"> JavaScript</p>
          <p className="text-gray-400 py-1"> React</p>
          <p className="text-gray-400 py-1"> Python</p>
          <p className="text-gray-400 py-1"> Flask</p>
          <p className="text-gray-400 py-1"> AWS RDS</p>
          <p className="text-gray-400 py-1"> MySQL</p>
        </div>
        <div className="relative py-3 ">
          <div>
            <h4 className="text-2xl py-1 text-center text-teal-500">Aita</h4>
            <a href="https://github.com/Wilfred0zz/Aita" target="_blank" rel="noopener noreferrer">
              <Image
                src={aitaPic}
                alt="aita application gif"
                className="object-scale-down h-80 w-90 mx-auto pt-4"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 shadow-sm shadow-gray-800 pt-8 pb-5">
        <div>
          <h4 className="text-2xl py-1 text-center text-teal-500">Summary</h4>
          <p className="text-md leading-8 text-white text-center pt-6">
            {" "}
            Campus Cuisine is an andorid app where college students can order
            food straight to where they are sitting. It allows also for students
            to become deliverers. The difference between this app and other apps
            is that the deliverers can enter the campus building since they are
            also students unlike other food delivery apps.
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-2xl py-1  text-teal-500">Tech Stack</h4>
          <p className="text-gray-400 py-1 pt-6"> Kotlin</p>
          <p className="text-gray-400 py-1"> Java</p>
          <p className="text-gray-400 py-1"> Google Maps API</p>
          <p className="text-gray-400 py-1"> Google Places API</p>
        </div>
        <div className="relative py-3 ">
          <div>
            <h4 className="text-2xl py-1 text-center text-teal-500">
              Campus Cuisine{" "}
            </h4>
            <a href="https://github.com/Wilfred0zz/CampusCuisine" target="_blank" rel="noopener noreferrer">
            <Image
              src={campusCuisineMobile}
              alt="campusCuisineMobile Application gif"
              className="object-scale-down h-80 w-90 mx-auto pt-4"
            />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 shadow-lg shadow-gray-800 pt-8 pb-5">
        <div>
          <h4 className="text-2xl py-1 text-center text-teal-500">Summary</h4>
          <p className="text-md leading-8 text-white text-center pt-6">
            {" "}
            Solar System Education is a site where you can interact by moving
            around and seeing the planets. Along with it one can gain
            information on them. It also comes with the feature of practicing
            ones knowledge with Quizzes.
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-2xl py-1  text-teal-500">Tech Stack</h4>
          <p className="text-gray-400 py-1 pt-6"> TypeScript</p>
          <p className="text-gray-400 py-1 "> React</p>
          <p className="text-gray-400 py-1"> Three.js</p>
          <p className="text-gray-400 py-1"> Python</p>
          <p className="text-gray-400 py-1"> MongoDB</p>
        </div>
        <div className="relative py-3 ">
          <div>
            <h4 className="text-2xl py-1 text-center text-teal-500">
              Solar System Education{" "}
            </h4>
            <a href="https://github.com/Wilfred0zz/Solar-System-Education" target="_blank" rel="noopener noreferrer">
            <Image
              src={solarsystemPic}
              alt="solar system education gif"
              className="object-scale-down h-80 w-90 mx-auto pt-4 "
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
