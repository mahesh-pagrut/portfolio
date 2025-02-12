import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

export default function Projects() {
  const [showFullDescription, setShowFullDescription] = useState({});

  const toggleDescription = (id) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const listProjects = [
    {
      id: 1,
      image: image,
      title: "SnapNest(under development)",
      description:
        "SnapNest is a personalized media library like Google Photos, built with Next.js, Cloudinary, and Tanstack Query. It allows users to seamlessly upload, organize, and edit photos and videos with AI-powered enhancements, creative effects, and optimization features. Perfect for creators and developers looking for a smart media management solution.",
      liveLink: "https://snap-nest-seven.vercel.app/",
      githubLink: "https://github.com/mahesh-pagrut/snap-nest",
    },
    {
      id: 2,
      image: image2,
      title: "The Recipes App",
      description:
        "The Recipes App is a responsive web application built with Next.js, TypeScript, and Tailwind CSS. It features server-side rendering for optimized performance, a mobile-first design for seamless usability, dynamic routing for fast content loading, and detailed recipe pages for an enriched user experience.",
      liveLink: "https://recipes-app-beige-alpha.vercel.app",
      githubLink: "https://github.com/mahesh-pagrut/Recipes-App",
    },
    {
      id: 3,
      image: image3,
      title: "NutriPro: 48 Hour Hackathon",
      description:
        "NutriPro offers an AI Nutritionist, a Nutrition Calculator, recipe QR codes, and the Gemini AI tool to analyze food images for instant nutritional insights. Create, update, and personalize recipes effortlessly. Your all-in-one platform for healthy eating and wellness.",
      liveLink: "https://pronutritions.netlify.app/",
      githubLink: "https://github.com/mahesh-pagrut/6395-hackathon",
    },
    {
      id: 4,
      image: image4,
      title: "Project 4",
      description: "Photo description for project",
      liveLink: "https://mavericks-cv.netlify.app/",
      githubLink: "https://github.com/example/project-4",
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
                  <p
                    className={`leading-relaxed mb-3 ${
                      showFullDescription[project.id]
                        ? "line-clamp-none"
                        : "line-clamp-4"
                    }`}
                  >
                    {project.description}
                  </p>
                  <button
                    onClick={() => toggleDescription(project.id)}
                    className="text-orange-500 font-semibold underline"
                  >
                    {showFullDescription[project.id]
                      ? "Read Less"
                      : "Read More"}
                  </button>
                </div>
                {/* Buttons */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold text-sm py-1 px-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold text-sm py-1 px-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
