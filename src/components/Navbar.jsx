import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex md:px-10 p-2 md:p-0 place-items-center justify-between top-0 z-20 h-fit bg-slate-100 text-slate-400"
    >
      <span className="md:text-2xl text-xl text-blue-950 font-bold text-center">
        Ramiro Millan
      </span>
      <span className="flex gap-x-3 place-items-center md:text-xl text-md">
        <span className="font-bold text-orange-400">Contacto</span>
        <Link to="/profile" className="font-bold text-blue-950">
          Mi perfil
        </Link>
      </span>
    </motion.div>
  );
}