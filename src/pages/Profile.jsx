import { motion } from "framer-motion";
import Perfil from "../media/Perfil.png";
import Email from "../media/Email.png";
import GithubContact from "../media/GithubContact.png";
import Linkedin from "../media/Linkedin.png";
import Resume from "../media/Resume.png";
import ContactIcon from "../components/ContactIcon";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Profile() {
  const [about, setAbout] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="xl:grid xl:grid-rows-2 xl:grid-cols-2 flex flex-col xl:gap-y-10 bg-white text-blue-900 max-w-screen min-h-screen pb-36 font-Montserrat"
    >
      <Link
        className="absolute md:top-10 top-5 md:left-5 text-blue-950 font-bold md:text-2xl"
        to="/"
      >
        {" "}
        ⏮ Volver
      </Link>
      {/* Title */}
      <motion.div
        initial={
          isMobile
            ? { y: "30vw", scale: 1.5 }
            : { x: "22vw", y: "30%", scale: 1.5 }
        }
        animate={isMobile ? { y: 0, scale: 1 } : { x: 0, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 3 }}
        className="mx-auto xl:col-start-1 flex flex-col xl:h-full h-1/2 2xl:ml-20 2xl:mt-20 xl:ml-16 xl:mt-16 place-content-center text-center"
      >
        <span className="2xl:text-8xl xl:text-7xl text-2xl font-bold">
          Ramiro Millan
        </span>
        <span className="2xl:text-6xl xl:text-5xl text-xl  text-orange-400">
          Data Analyst
        </span>
      </motion.div>

      {/* Picture */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.3 }}
        className=" xl:h-full xl:w-10/12 h-64 xl:row-start-1 xl:row-end-3 xl:m-auto xl:mt-10"
      >
        <img
          className="bg-orange-400 py-1 h-full w-[80%] shadow-lg shadow-orange-400 rounded-md m-auto"
          src={Perfil}
          alt="German Gabriel"
        />
      </motion.div>

      {/* About me */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.3 }}
        className=" xl:row-start-2 xl:col-start-1 xl:grid xl:grid-cols-2 h-full w-full text-center xl:mx-auto m-auto xl:ml-16 mt-5 xl:gap-x-2 place-content-center"
      >
        {/* Me */}
        <motion.div className="h-full w-full px-5">
          <span className="2xl:text-3xl text-2xl font-semibold text-orange-400">
            {about === 0 && "About"}
            {about === 1 && "My stack"}
            {about === 2 && "Contact"}
          </span>
          <div
            className={
              about === 0
                ? "relative m-auto xl:h-48"
                : "opacity-0 absolute invisible"
            }
          >
            <div className="flex flex-col text-start">
              <span>
                I like to work in a team based enviorment learning from
                everything and everyone.
              </span>
              <span>
                Competitive in a healthy manner pushing to improve myself.
              </span>
              <span>
                Independent, but ready to help others and ask for help if
                needed.
              </span>
            </div>
          </div>

          <div
            className={
              about === 1
                ? "relative m-auto xl:h-48"
                : "opacity-0 absolute invisible"
            }
          >
            <div className="flex flex-col text-start">
              <span>
                Capable understanding of programming techniques and common
                logics.
              </span>
              <span>Advanced english, writing, speaking, etc.</span>
              <span>
                Clever usage of languages and libraries documentations.
              </span>
            </div>
          </div>

          <div
            className={
              about === 2
                ? "relative m-auto xl:h-48 visible"
                : "opacity-0 absolute invisible"
            }
          >
            <div className="flex flex-col text-start my-auto">
              <div className="flex flex-row mt-10 gap-x-3">
                <ContactIcon
                  link={"https://github.com/GermanGab1781"}
                  name="Github"
                  img={GithubContact}
                />
                <ContactIcon
                  link={
                    "https://drive.google.com/drive/folders/1mYA43BqnqKkW0BNrH9wuLwdnhcs66qZ3?usp=sharing"
                  }
                  name="Resume"
                  img={Resume}
                />
                <ContactIcon
                  link={"mailto:germangabriel1998@gmail.com"}
                  name="Email"
                  img={Email}
                />
                <ContactIcon
                  link={
                    "https://www.linkedin.com/in/germ%C3%A1n-gabriel-9b3b1a160/"
                  }
                  name="Linkedin"
                  img={Linkedin}
                />
              </div>
            </div>
          </div>

          <div className="flex place-content-center whitespace-nowrap gap-x-2">
            <button
              className={
                about === 0
                  ? "border pointer-events-none border-orange-400 rounded-md p-1 w-fit m-auto mt-2 bg-orange-400"
                  : "border border-orange-400 rounded-md p-1 transition-all text-white bg-orange-400 w-fit m-auto mt-2"
              }
              onClick={() => setAbout(0)}
            >
              About me
            </button>
            <button
              className={
                about === 1
                  ? "border pointer-events-none border-orange-400 rounded-md p-1 w-fit m-auto mt-2 bg-orange-400"
                  : "border border-orange-400 rounded-md p-1 transition-all text-white bg-orange-400 w-fit m-auto mt-2"
              }
              onClick={() => setAbout(1)}
            >
              My stack
            </button>
            <button
              className={
                about === 2
                  ? "border pointer-events-none border-orange-400 rounded-md p-1 w-fit m-auto mt-2 bg-orange-400"
                  : "border border-orange-400 rounded-md p-1 transition-all text-white bg-orange-400 w-fit m-auto mt-2"
              }
              onClick={() => setAbout(2)}
            >
              Contact/Resume
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}