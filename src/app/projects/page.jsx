"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-cosmicPurple to-nebulaBlue",
    title: "BlockChain DApp",
    desc: "Explore the decentralized world of blockchain technology with an innovative DApp. Discover the power of smart contracts and decentralized finance.",
    img: "https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/",
    itemgithubLink: "/",
  },
  {
    id: 2,
    color: "from-nebulaBlue to-violet-300",
    title: "Pizza Shop Website",
    desc: "Indulge in an exquisite time with an exclusive pizza shop site. Explore amazing food from curated resturants.",
    img: "https://images.pexels.com/photos/7142968/pexels-photo-7142968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/",
    itemgithubLink: "https://github.com/DariusGuillaume/pizza-site",
  },
  {
    id: 3,
    color: "from-violet-300 to-lime-300",
    title: "Car Rental Website",
    desc: "Immerse yourself in the world of cars. Discover new releases, classics, and personalized recommendations.",
    img: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/",
    itemgithubLink: "/",
  },
  {
    id: 4,
    color: "from-lime-300 to-nebula",
    title: "Spotify Music App",
    desc: "Experience the ultimate music streaming platform with the Spotify app. Explore millions of songs, playlists, and podcasts tailored to your taste.",
    img: "https://assets.materialup.com/uploads/bc3aa35b-e13d-4c3f-addd-8883c89ddd2c/attachment.png",
    link: "/",
    itemgithubLink: "/",
  },
];

const ProjectsPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center">
          <div className="text-8xl mb-4">Projects</div>
          <div className="text-sm text-white">Scroll For More</div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-cosmicPurple to-nebulaBlue" />
            {items.map((item) => (
  <div
    className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
    key={item.id}
  >
    <div className="flex flex-col gap-8 text-white">
      <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
        {item.title}
      </h1>
      <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
        <Image src={item.img} alt="" fill />
      </div>
      <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
        {item.desc}
      </p>
      <div className="flex justify-end">
        <Link href={item.link}>
          <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
            See Demo
          </button>
        </Link>
        <a
          href={item.itemgithubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-black text-white font-semibold m-4 rounded">
            See Code
          </button>
        </a>
      </div>
    </div>
  </div>
))}

          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Software Engineer and UI Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;