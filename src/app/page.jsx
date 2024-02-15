"use client"

import Image from "next/image";



const Homepage = () => {
  return (
  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"> 
  { /* image container */ }
  <div className="h-1/2 lg:h-full lg:w-1/2 relative">
  <Image src="/space.png" alt="" fill className="object-contain"/>

  </div>
  {/*text-container*/}
  <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-white">
{/* Title */}
<h1 className="text-4xl font-bold text-center ">Welcome to My Digital Universe</h1>
{/* Description */}
<p className="text-center">Welcome to my digital universe, where creativity meets technology and innovation knows no bounds. 
Here, I craft digital solutions that push the boundaries of what's possible. 
Join me on a journey through code and creativity, where we explore the endless possibilities of the digital realm.</p>

{/* Buttons */}
<div className="flex gap-4 justify-center">
<button className="rounded-lg ring-1 ring-white bg-nebulaBlue text-white px-4 py-2 ">Explore My Work</button>
<button className=" ring-1 ring-white px-4 py-2 rounded-lg">Contact</button>

  </div>
  </div>
  </div>

  )
  
  ;
};

export default Homepage;
