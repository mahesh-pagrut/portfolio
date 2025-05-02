import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import snapnest from "../../assets/slider1/snapnest.png";
import coinpulse from "../../assets/slider1/coin-pulse.png";
import neoAi from "../../assets/slider1/neo-ai.png";

import foodvilla from "../../assets/slider2/food-villa.png";
import cyberWeb from "../../assets/slider2/cyber-web.png";
import nutriPro1 from "../../assets/slider1/nutri-pro.png";
import recipesApp from "../../assets/slider2/recipes-app.png";
import rentIt from "../../assets/slider2/rent-it.png";

export default function Projects() {
  const [showFullDescription, setShowFullDescription] = useState({});

  const toggleDescription = (slider, id) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [`${slider}-${id}`]: !prevState[`${slider}-${id}`],
    }));
  };

  const listProjects1 = [
    {
      id: 1,
      image: snapnest,
      title: "SnapNest(under development)",
      description:
        "SnapNest is a personalized media library like Google Photos, built with Next.js, Cloudinary, and Tanstack Query. It allows users to seamlessly upload, organize, and edit photos and videos with AI-powered enhancements, creative effects, and optimization features. Perfect for creators and developers looking for a smart media management solution.",
      liveLink: "https://snap-nest-seven.vercel.app/",
      githubLink: "https://github.com/mahesh-pagrut/snap-nest",
    },
    {
      id: 2,
      image: neoAi,
      title: "Neo - AI Assistant",
      description:
        "Neo is an AI-powered virtual assistant designed to answer your queries, solve problems, and add a fun twist to your conversations. Built with HTML, CSS, React.js, and the powerful Gemini API, Neo not only provides smart responses but also comes with a good UI and comes with some savage replies to common questions/conversation starters !",
      liveLink: "https://neo-ai-pi.vercel.app/",
      githubLink: "https://github.com/mahesh-pagrut/neo-ai",
    },
    {
      id: 3,
      image: coinpulse,
      title: "CoinPulse",
      description:
        "CoinPulse is a sleek crypto tracking app built with React.js, Vite, and Context API for a fast and interactive experience. I integrated Google Charts to visualize real-time data from the CoinGecko API, ensuring accurate market trends. With react-icons for UI elements and a futuristic dark theme, the app allows users to track cryptocurrencies, switch between USD, EUR, and INR, and stay updated effortlessly.",
      liveLink: "https://stock-plan.vercel.app/",
      githubLink: "https://github.com/mahesh-pagrut/CoinPulse",
    },
  ];

  const listProjects2 = [
    {
      id: 1,
      image: rentIt,
      title: "RentIt – Real Estate Rental Platform",
      description:
        "RentIt is a modern, responsive real estate rental platform inspired by Airbnb. Built using React.js, Vite, and modern UI libraries, RentIt provides an elegant and interactive user experience for exploring, searching, and discovering rental properties. Whether you're looking for a cozy apartment or a luxurious villa, RentIt is your gateway to the perfect place.",
      liveLink: "https://rent-it-vert.vercel.app/",
      githubLink: "https://github.com/mahesh-pagrut/RentIt",
    },
    {
      id: 2,
      image: nutriPro1,
      title: "NutriPro: 48 Hour Hackathon",
      description:
        "NutriPro offers an AI Nutritionist, a Nutrition Calculator, recipe QR codes, and the Gemini AI tool to analyze food images for instant nutritional insights. Create, update, and personalize recipes effortlessly. Your all-in-one platform for healthy eating and wellness.",
      liveLink: "https://pronutritions.netlify.app/",
      githubLink: "https://github.com/mahesh-pagrut/6395-hackathon",
    },
    {
      id: 3,
      image: foodvilla,
      title: "FoodVilla - Food Delivery App",
      description:
        "FoodVilla is a dynamic and responsive food delivery web application built with React.js, Context API, Express.js, and MongoDB and Stripe. It enables users to browse a curated food menu, add items to cart, and make secure payments via Stripe Checkout. Admins can manage food items and orders through a separate dashboard.",
      liveLink: "https://food-villa-eight-delta.vercel.app/",
      githubLink: "https://github.com/mahesh-pagrut/food-villa",
    },
    {
      id: 4,
      image: cyberWeb,
      title: "Cyber-Web",
      description:
        "Cyber-Web is a simple landing page featuring a portrait animation created from 300 images. The animation is triggered on scroll, bringing the visuals to life. It is built using HTML, CSS, and JavaScript, with GSAP (CDN), ScrollTrigger, and Locomotive Scroll for smooth animations and scrolling effects.",
      liveLink: "https://anime-web-ashen.vercel.app/",
      githubLink: "https://github.com/mahesh-pagrut/anime-web",
    },
    {
      id: 5,
      image: recipesApp,
      title: "The Recipes App",
      description:
        "The Recipes App is a responsive web application built with Next.js, TypeScript, and Tailwind CSS. It features server-side rendering for optimized performance, a mobile-first design for seamless usability, dynamic routing for fast content loading, and detailed recipe pages for an enriched user experience.",
      liveLink: "https://recipes-app-beige-alpha.vercel.app",
      githubLink: "https://github.com/mahesh-pagrut/Recipes-App",
    },
  ];

  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
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
      id="projects"
      data-aos="fade-up"
      data-aos-delay="400"
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">My Projects</h2>
        <p className="text-lg text-center mb-12 text-gray-500">
          I have worked on a wide range of projects. Adding here some of my good
          projects.
        </p>
        <Slider {...settings1} className="mb-5">
          {listProjects1.map((project) => (
            <div key={project.id} className="p-4">
              <div className="h-full border-2 border-orange-400 hover:shadow-[0_0_20px_rgb(255,165,0,0.3)] border-opacity-60 rounded-lg overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-md title-font font-medium text-gray-400 mb-1">
                    {project.title}
                  </h2>
                  <p
                    className={`leading-relaxed mb-3 ${
                      showFullDescription[`slider1-${project.id}`]
                        ? "line-clamp-none"
                        : "line-clamp-1"
                    }`}
                  >
                    {project.description}
                  </p>
                  <button
                    onClick={() => toggleDescription("slider1", project.id)}
                    className="text-orange-500 font-semibold underline"
                  >
                    {showFullDescription[`slider1-${project.id}`]
                      ? "Read Less"
                      : "Read More"}
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold text-sm py-1 px-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
                  >
                    <FaGithub />
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

        <Slider {...settings2}>
          {listProjects2.map((project) => (
            <div key={project.id} className="p-4">
              <div className="h-full border-2 border-orange-400 hover:shadow-[0_0_20px_rgb(255,165,0,0.3)] border-opacity-60 rounded-lg overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto lg:h-38 md:h-36 sm:h-24 object-cover object-center"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                    {project.title}
                  </h2>
                  <p
                    className={`leading-relaxed text-xs mb-2 ${
                      showFullDescription[`slider2-${project.id}`]
                        ? "line-clamp-none"
                        : "line-clamp-1"
                    }`}
                  >
                    {project.description}
                  </p>
                  <button
                    onClick={() => toggleDescription("slider2", project.id)}
                    className="text-orange-500 text-sm font-semibold underline"
                  >
                    {showFullDescription[`slider2-${project.id}`]
                      ? "Read Less"
                      : "Read More"}
                  </button>
                </div>
                <div className="absolute bottom-5 right-3 flex gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold text-md py-1 px-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
                  >
                    <FaGithub />
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
