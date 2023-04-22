import { DiReact, DiDatabase } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { GoGist } from "react-icons/go";

export default function Technologies() {
  return (
    <div>
      <h3 className="text-3xl py-5 text-white text-center pt-8">
        Technologies
      </h3>
      <p className="text-md  py-2 leading-2 text-gray-100 text-center">
        {" "}
        Ive worked with a range of technolgies for both web developement and
        general coding/programming.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <div className="text-center shadow-lg shadow-gray-800 p-10 rounded-xl my-10">
          <div className="text-5xl text-white flex py-3 justify-center">
            <DiReact />
          </div>
          <h3 className="text-2xl font-medium pb-1.5 text-teal-600 ">
            Front-End
          </h3>
          <p className="text-gray-300 py-1">React.js</p>
          <p className="text-gray-300 py-1">Three.js</p>
          <p className="text-gray-300 py-1">Html/CSS</p>
        </div>

        <div className="text-center  shadow-lg shadow-gray-800 p-10 rounded-xl my-10">
          <div className="text-5xl  text-white flex py-3 justify-center">
            <DiDatabase />
          </div>
          <h3 className="text-2xl font-medium pb-1.5  text-teal-600 ">
            Back-End
          </h3>
          <p className="text-gray-300 py-1">Flask</p>
          <p className="text-gray-300 py-1">Node</p>
          <p className="text-gray-300 py-1">PostgreSQL</p>
        </div>

        <div className="text-center  shadow-lg shadow-gray-800 p-10 rounded-xl my-10">
          <div className="text-5xl text-white flex py-3 justify-center">
            <SiCplusplus />
          </div>
          <h3 className="text-2xl font-medium pb-1.5 text-teal-600 ">
            Languages
          </h3>
          <p className="text-gray-300 py-1">C++</p>
          <p className="text-gray-300 py-1">JavaScript</p>
          <p className="text-gray-300 py-1">Python</p>
          <p className="text-gray-300 py-1">Kotlin</p>
        </div>

        <div className="text-center  shadow-lg shadow-gray-800 p-10 rounded-xl my-10">
          <div className="text-5xl text-white flex py-3 justify-center">
            <GoGist />
          </div>
          <h3 className="text-2xl font-medium pb-1.5 text-teal-600 ">
            {" "}
            Other skills
          </h3>
          <div className="grid grid-cols-2 gap-2 ">
            <p className="text-gray-300 py-1">Git</p>
            <p className="text-gray-300 py-1">Bash</p>
            <p className="text-gray-300 py-1">AWS RDS</p>
            <p className="text-gray-300 py-1">Heroku</p>
            <p className="text-gray-300 py-1">GCP</p>
            <p className="text-gray-300 py-1">Spanish</p>
          </div>
        </div>
      </div>
    </div>
  );
}
