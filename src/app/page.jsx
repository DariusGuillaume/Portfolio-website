"use client"
import { useState, useEffect } from "react";
import { FaLaptopCode, FaBuilding, FaSmile, FaProjectDiagram, FaPalette, FaApple, FaAndroid, FaReact, FaServer } from 'react-icons/fa';

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



    const skills = [
      { id: 'pm', icon: FaProjectDiagram, title: "PROJECT MANAGEMENT", tech: "PMO, Agile, Scrum, Resource/ Communications/ Risk Management" },
      { id: 'ux', icon: FaPalette, title: "UX/UI DESIGN", tech: "User experience, Visual Design, Animation, Atomic design, Prototyping" },
      { id: 'ios', icon: FaApple, title: "IOS DEVELOPMENT", tech: "Objective-C/ Swift" },
      { id: 'android', icon: FaAndroid, title: "ANDROID DEVELOPMENT", tech: "Java, Kotlin, ARCore, Dagger, RxAndroid, Jetpack" },
      { id: 'frontend', icon: FaReact, title: "FRONT-END", tech: "Angular, React, Vue, Vanilla, TypeScript," },
      { id: 'backend', icon: FaServer, title: "BACK-END", tech: "Java/Spring, Python/ Django/ Flask," },
    ];
    

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Innovative Web Solutions</h1>
            <p className="text-lg mb-6">
              Welcome to my world of cutting-edge web development. As a skilled Software Engineer with expertise in React, 
              Google Cloud Platform, and Firebase, I craft responsive websites and applications that drive engagement and results.
            </p>
            <p className="text-green-600 font-semibold mb-8">
              Elevating businesses through strategic web and mobile app development
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <FaLaptopCode className="text-9xl text-green-500" />
          </div>
        </div>
      </div>

      {/* Project Boxes */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-2 cursor-pointer">
              <FaBuilding className="text-6xl mb-4 text-green-500" />
              <h3 className="text-2xl font-semibold mb-2">Example</h3>
              <p>A brief description of the Example project goes here.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-2 cursor-pointer">
              <FaSmile className="text-6xl mb-4 text-green-500" />
              <h3 className="text-2xl font-semibold mb-2">Smile</h3>
              <p>A brief description of the Smile project goes here.</p>
            </div>
          </div>
        </div>
      </div>

{/* Skills Section */}
<div className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill) => (
        <a 
          href={`/${skill.id}`} 
          key={skill.id} 
          className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col justify-between aspect-square relative overflow-hidden hover:bg-green-100 transition-colors duration-300"
        >
          <skill.icon className="text-4xl text-gray-700 absolute top-6 left-6" />
          <div className="mt-auto">
            <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
            <p className="text-sm text-gray-600">{skill.tech}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
</div>
    </div>
  );
};

export default Homepage;