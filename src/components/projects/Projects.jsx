import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

export default function Projects() {
  const listProjects = [
    {
      id: 1,
      image: image,
      title: "MavericksCV",
      description:
        "MavericksCV is a React-based single-page application tagged as the ultimate resume builder. It uses the Harvard letter format to create CVs and is designed to be user-friendly and efficient.",
      liveLink: "https://mavericks-cv.netlify.app/",
    },
    {
      id: 2,
      image: image2,
      title: "The Recipes App",
      description:
        "The Recipes App is a responsive web application built with Next.js, TypeScript, and Tailwind CSS. It features server-side rendering for optimized performance, a mobile-first design for seamless usability, dynamic routing for fast content loading, and detailed recipe pages for an enriched user experience.",
      liveLink: "https://recipes-app-beige-alpha.vercel.app",
    },
    {
      id: 3,
      image: image3,
      title: "NutriPro: Nutrition Companion",
      description: "NutriPro offers an AI Nutritionist, a Nutrition Calculator, recipe QR codes, and the Gemini AI tool to analyze food images for instant nutritional insights. Create, update, and personalize recipes effortlessly. Your all-in-one platform for healthy eating and wellness.",
      liveLink: "pronutritions.netlify.app/",
    },
    {
      id: 4,
      image: image4,
      title: "Project 4",
      description: "Photo description for project",
      liveLink: "https://mavericks-cv.netlify.app/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">My Projects</h2>
        <p className="text-lg text-center mb-12 text-gray-500">
          I have worked on a wide range of projects. Adding here some of my good
          projects.
        </p>
        <Slider {...settings}>
          {listProjects.map((project) => (
            <div key={project.id} className="p-4">
              <div className="h-full border-2 border-orange-400 hover:shadow-[0_0_20px_rgb(255,165,0,0.3)] border-opacity-60 rounded-lg overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed mb-3">{project.description}</p>
                </div>
                {/* Live Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-1 px-3 rounded-full shadow-lg transition-all duration-300"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
