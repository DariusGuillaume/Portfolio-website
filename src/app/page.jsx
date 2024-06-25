"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaApple, FaReact, FaServer, FaProjectDiagram } from 'react-icons/fa';

const Homepage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"> 
        {/* image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/space.png" alt="" fill className="object-contain"/>
        </div>
        {/* text-container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-white">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center">Welcome to My Digital Universe</h1>
          {/* Description */}
          <p className="text-center">Welcome to my digital universe, where creativity meets technology and innovation knows no bounds. 
          Here, I craft digital solutions that push the boundaries of what's possible. 
          Join me on a journey through code and creativity, where we explore the endless possibilities of the digital realm.</p>
          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <Link href="/projects">
              <button className="rounded-lg ring-1 ring-white bg-nebulaBlue text-white px-4 py-2">Explore My Work</button>
            </Link>
            <Link href="/contact">
              <button className="ring-1 ring-white px-4 py-2 rounded-lg">Contact</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Project Development */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaProjectDiagram className="text-6xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-4">Project Development</h3>
            <p>Technologies: Agile, Scrum, Jira, Git</p>
          </div>
          {/* iOS Development */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaApple className="text-6xl mb-4 text-gray-800" />
            <h3 className="text-xl font-semibold mb-4">iOS Development</h3>
            <p>Technologies: Swift, SwiftUI, Xcode, CocoaPods</p>
          </div>
          {/* Front-end Development */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaReact className="text-6xl mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-4">Front-end Development</h3>
            <p>Technologies: React, Next.js, HTML, CSS, JavaScript</p>
          </div>
          {/* Back-end Development */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaServer className="text-6xl mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-4">Back-end Development</h3>
            <p>Technologies: Node.js, Express, MongoDB, SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;