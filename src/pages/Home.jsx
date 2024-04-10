import React from "react";
import landingImg from "../media/DataPC.jpg";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-100"
    >
      <Navbar />
      {/* Landing section */}
      <section className="flex relative">
        <div className="absolute z-10 md:top-1/2 top-1/4 md:left-3 left-1/2 transform rounded-xl md:-translate-y-1/2 -translate-y-auto md:-translate-x-0 -translate-x-1/2  md:text-4xl text-2xl md:w-1/2 w-[85%] md:text-start text-center p-3 bg-gradient-to-r from-gray-100 to-orange-500 ">
          <div className="font-bold text-blue-900">
            Simplifique la forma como monitorea y evalúa sus proyectos
          </div>
          <div className="text-blue-800">
            Una herramienta digital para que tu organizacion genere un impacto
            positivo
          </div>
        </div>
        <a
          href="mailto:ramirogmillan@gmail.com "
          className="absolute z-10 bottom-2 left-1/2 transform -translate-x-1/2 rounded-md p-4 bg-orange-400 text-white font-bold"
        >
          Contacto
        </a>
        <span className="bg-gradient-to-b from-slate-100 to-orange-500">
          <img
            className="opacity-85 md:h-auto h-[75vh]"
            alt="Gente Trabajando con un tablero de información en su notebook"
            src={landingImg}
          />
        </span>
      </section>
      {/*  */}
    </motion.div>
  );
}
