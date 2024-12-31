import React from "react";
import Navbar from "../navbar/Navbar";
import hi from "../../assets/hi.png";
import CV from "./CV.pdf";
import myNew1 from "../../assets/myNew1.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      <div className="h-[960px] w-[880px] md:h-[720px] md:w-[640px] absolute right-0 bg-gradient-to-r from-orange-500 via-yellow-300 to-purple-500 rounded-full transform rotate-12 -top-20 shadow-[0_10px_20px_rgb(255,140,0,0.4),_0_-10px_20px_rgb(255,69,0,0.4),_5px_15px_25px_rgb(0,0,255,0.3)] p-8 bg-gray-900 text-white " />
      <Navbar />
      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
            <img
              src={hi}
              data-aos="fade-up"
              data-aos-delay="400"
              className="absolute top-[350px] left-72 md:top-[-30px] md:left-[450]px transform-translate-x-1/2 -translate-y-1/2 w-20 h-20"
            />
            <h1 className="title-font sm:text-4xl mb-4 font-bold text-white">
              Hi! I'm MAHESH
            </h1>
            <p className="mb-8 leading-relaxed">
              I'm a highly motivated and dedicated front-end developer with a
              growing passion for mastering full-stack development. I thrive on
              solving complex challenges, creating dynamic user experiences, and
              continuously pushing the boundaries of my technical expertise.
              With a strong commitment to lifelong learning, I actively seek
              opportunities to expand my skillset and deliver innovative
              solutions. My journey is fueled by curiosity, creativity, and the
              drive to build impactful web applications.
            </p>
            <div className="flex justify-center">
              <a href={CV} download>
                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-lg">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
            <img
              src={myNew1}
              alt="hero"
              className="object-cover object-center rounded-md w-70 h-80 shadow-[0_0_40px_rgba(25,25,20,0.5)] "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
