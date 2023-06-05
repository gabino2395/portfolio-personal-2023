import React from "react";
import Projects from "../Proyects/Projects";
import "../../data/projetcs.json";
import { results } from "../../data/projects";
import Waves from "../waves/Waves";
console.log(results);

const HeroSection = () => {
  return (
    <div>
      <main className="p-4 border-solid  ">
        <div className="flex flex-col gap-4 mb-10">
          <h1 className=" text-3xl sm:text-5xl w-2/3">
            Hello! I’m{" "}
            <span className="bg-yellow-200 font-bold">
              Gabino Mendez Acosta{" "}
            </span>{" "}
            , a Full-stack developer who bridges people with devices, spaces,
            services.
          </h1>
          <p className="py-6 font-light text-xs sm:text-3xl color-blue	">
            Scroll to explore
          </p>
        </div>
        {/* <img className="w-max h-[500px] " src="/hero-img.webp" alt="alguna foto interesante" /> */}
        <div className="flex  min-w-full gap-x-10 items-center justify-evenly  flex-col md:flex-row  ">
          <img
            className="w-max h-[300px] lg:h-[500px] mb-8 mt-8"
            src="/Coder.svg"
            alt="alguna foto interesante"
          />
          <div className=" flex flex-col gap-4 justify-center items-center">
            <div className="block-text mb-4 sm:text-[12px] lg:text-[18px] w-5/6 		">
              I'm a self-taught front-end designer and developer who enjoys
              creating modern designs with Tailwind CSS. I have customers
              worldwide and have had successful projects. Recently, two of my
              projects were acquired, and I'm currently working on Lexington
              Themes. I also curate Colors & Fonts and create VS Code Themes. I
              am currently available for Enquires. If you need a landing page or
              redesign something that you already have, do not hesitate to get
              in contact. michael@andreuzza.com
            </div>
            <div className="block-text sm:text-[12px] lg:text-[20px] w-5/6  ">
              As a solo developer, I offer a unique and personalized approach to
              design and build exclusively and responsive landing pages using
              Astro and Tailwind CSS. My singular focus on your project ensures
              efficient and effective results, delivering a stunning website
              tailored to your specific business needs and goals. Trust on my
              expertise allows to craft anything that will help you stand out
              and convert visitors into customers.
            </div>
          </div>
        </div>
        <section className="flex flex-col gap-5 pt-4 sm:flex-row">
          <div className="block-text text-xl sm:text-xs sm:w-1/2"></div>
        </section>
        <Waves />

        <div id="projects-container">
          <Projects />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
