import React from "react";
import landingImg from "../media/DataPC.jpg";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ExampleImg1 from "../media/Ejemplo1.jpg";
import ExampleImg2 from "../media/Ejemplo2.jpg";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-orange-600 pb-10"
    >
      <Navbar />
      {/* Presentation */}
      <section className="flex relative mb-5">
        <div
          className="absolute  z-10 md:top-1/2 top-1/4 md:left-3 left-1/2 transform rounded-xl md:-translate-y-1/2 -translate-y-auto md:-translate-x-0 -translate-x-1/2  md:text-4xl text-2xl md:w-1/2 w-[85%] md:text-start text-center p-3 
        bg-gradient-to-r from-transparent  to-orange-500 bg-orange-600 bg-opacity-80"
        >
          <div className="font-bold text-blue-700">
            Simplifique la forma como monitorea y evalúa sus proyectos
          </div>
          <div className="text-blue-800">
            Una herramienta digital para que tu organizacion genere un impacto
            positivo
          </div>
        </div>
        <a
          href="mailto:ramirogmillan@gmail.com "
          className="absolute z-10 bottom-2 left-1/2 transform -translate-x-1/2 rounded-md p-4 bg-orange-500 text-white text-md font-bold"
        >
          Contacto
        </a>
        <span className="bg-gradient-to-b from-slate-100 to-orange-500 rounded-b-[50px]">
          <img
            className="opacity-85 md:h-auto h-[75vh] rounded-b-[50px]"
            alt="Gente Trabajando con un tablero de información en su notebook"
            src={landingImg}
          />
        </span>
      </section>
      {/* App Example1 */}
      <section className="relative flex ">
        <span className="bg-gradient-to-bl from-slate-100 to-transparent ml-10 rounded-xl">
          <img
            className="opacity-95 w-[70vw] h-[75vh] rounded-xl"
            alt="Tipos de filtraciones de los datos en el tablero"
            src={ExampleImg2}
          />
        </span>
        <div
          className="absolute z-10 md:top-1/2 top-1/4 md:right-3 right-1/2 transform rounded-xl md:-translate-y-1/2 -translate-y-auto md:-translate-x-0 -translate-x-1/2  md:text-4xl text-2xl md:w-1/2 w-[85%] md:text-start text-center p-6 
        bg-gradient-to-l  from-transparent  to-orange-500 bg-orange-600 bg-opacity-60 "
        >
          <div className="font-bold text-blue-600">Tablero dinamico</div>
        </div>
      </section>
      {/* App Example 2 */}
      <section className="relative flex place-content-end mt-10">
        <span className="bg-gradient-to-tl from-slate-100 to-transparent mr-10 rounded-xl">
          <img
            className="opacity-95 w-[70vw] h-[75vh] rounded-xl "
            alt="Vista principal del tablero"
            src={ExampleImg1}
          />
        </span>
        <div
          className="absolute z-10 md:top-1/2 top-1/4 md:left-3  left-1/2 transform rounded-xl md:-translate-y-1/2 -translate-y-auto md:-translate-x-0 -translate-x-1/2  md:text-4xl text-2xl md:w-1/2 w-[85%] md:text-end text-center p-6 
        bg-gradient-to-r from-transparent  to-orange-500 bg-orange-600 bg-opacity-60 "
        >
          <div className="font-bold text-blue-600">Vista principal</div>
        </div>
      </section>
    </motion.div>
  );
}
