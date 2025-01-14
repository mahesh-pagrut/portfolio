import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const navbarLinks = [
        { name: 'Home', link: '#' },
        { name: 'Skills', link: '#skills' },
        { name: 'Experience', link: '#experience' },
        { name: 'Language', link: '#language' },
        { name: 'Projects', link: '#projects' },
    ];

    return (
        <footer className="bg-gray-800 text-gray-200 relative">
            <div className="container mx-auto p-6 md:flex md:justify-between md:items-center">
                {/* Branding and Contact */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-xl font-semibold text-white">Mahesh Pagrut</h2>
                    <p className="text-sm text-gray-400">©2024 All rights reserved</p>
                    <p className="text-sm text-gray-400">maheshdpmayshu@gmail.com</p>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                    {navbarLinks.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                className="hover:text-orange-400 transition-colors"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Social Media Icons */}
                <div className="flex justify-center mt-4 md:mt-0 space-x-6">
                    <a
                        href="www.linkedin.com/in/mahesh-pagrut-🎮-887535274"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-transform duration-300"
                        style={{ fontSize: 24 }}
                    >
                        <FaLinkedin className="hover:scale-125" />
                    </a>
                    <a
                        href="https://github.com/mahesh-pagrut"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 transition-transform duration-300"
                        style={{ fontSize: 24 }}
                    >
                        <FaGithub className="hover:scale-125" />
                    </a>
                    <a
                        href="https://www.instagram.com/imaxvibe?igsh=bHJkcG8yM2ZnNmEx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-400 transition-transform duration-300"
                        style={{ fontSize: 24 }}
                    >
                        <FaInstagram className="hover:scale-125" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
