"use client"
import Link from 'next/link'
import {useState} from 'react'
import Image from 'next/image'
import NavLink from './NavLink';

const links = [
{url: '/', title: 'Home'},
{url: '/about', title: 'About'},
{url: '/projects', title: 'Projects'},
{url: '/contact', title: 'Contact'},
];





const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl text-white"> 
<div className='hidden md:flex gap-4 w-1/3'>
    {links.map((link) => (
    <NavLink link={link} key={link.title} />))}
        
</div>
   
    {/* LOGO */}
    <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center items-center text-center"> 
    <Link href = "/" className=" bg-black w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-md text-white"> 
    <span > DG  </span>
    </Link>
     
    </div>   
{/* SOCIAL MEDIA ICONS */}
    <div className="hidden md:flex gap-4 w-1/3 items-center">
      <Link href = "https://github.com/DariusGuillaume">
      <Image src ="/github.png" alt="github" width={25} height={25} />
      </Link>
      <Link href = "https://www.linkedin.com/in/darius-guillaume-483101212/">
      <Image src ="/linkedin.png" alt="linkedin" width={40} height={40} />
      </Link>
    </div>

   {/* RESPONSIVE MENU */}
   <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        > 

          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>

         </button>
         {/* MENU */}
         {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-nebulaBlue text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              
              
                <Link href={link.url} key ={link.title}> {link.title} </Link>
             
            ))} </div>
         )}
      </div>
    </div>
  );
};

export default Navbar;