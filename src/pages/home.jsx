import React, { useEffect } from "react";
import bgImage from "../assets/images/pokemon_hero.png";
import "./index.css";
import { motion } from "framer-motion";

const Homepage = () => {
  useEffect(() => {
    const container = document.getElementById("homepage-container");
    if (container) {
      container.style.backgroundImage = `url(${bgImage})`;
      container.style.backgroundSize = "cover";
    }
  }, []);

  return (
    <div
      id="homepage-container"
      className="h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-white opacity-10"></div>
      <div className="absolute inset-0">
        <div className="h-full w-full flex flex-col items-center justify-center text-[#66CCFF]">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)] unselectable">
            Pokémon
          </h1>
          <motion.button
            className="bg-[#66CCFF] px-4 py-2 md:px-6 md:py-4 rounded-lg shadow-lg uppercase tracking-wider text-gray-800 font-bold"
            whileHover={{ scale: 1.03 }}
            onClick={() => {
              window.location.href = "/pokedex";
            }}
          >
            Get started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
