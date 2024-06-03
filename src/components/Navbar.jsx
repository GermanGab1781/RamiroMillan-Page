import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { showAlert } from "../utils/SwalContact";

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex md:px-10 p-2 md:p-0 place-items-center justify-between top-0 z-20 h-fit bg-slate-100 text-slate-400"
    >
      <Link to="/perfil" className="md:text-2xl text-xl text-blue-950 font-bold text-center">
        Ramiro Millan
      </Link>
      <span className="flex gap-x-3 place-items-center md:text-xl text-md">
        <span onClick={showAlert} className="font-bold text-orange-400 cursor-pointer">Contacto</span>
        <Link to="/perfil" className="font-bold text-blue-950">
          Mi perfil
        </Link>
      </span>
    </motion.div>
  );
}
