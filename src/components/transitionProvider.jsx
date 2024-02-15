"use client";
import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  const [isHomePage, setIsHomePage] = useState(pathName === "/");
  useEffect(() => {
    setIsHomePage(pathName === "/");
  }, [pathName]);

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-nebulaBlue to-cosmicPurple"
      >
        {!isHomePage && ( // Add this condition to skip animation on the homepage
          <>
            <motion.div
              className="h-screen w-screen fixed bg-white rounded-b-[100px] z-40"
              animate={{ height: "0vh" }}
              exit={{ height: "140vh" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
            <motion.div
              className="fixed m-auto top-0 bottom-0 left-0 right-0 text-black text-8xl cursor-default z-50 w-fit h-fit"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {pathName.substring(1)}
            </motion.div>
            <motion.div
              className="h-screen w-screen fixed bg-white rounded-t-[100px] bottom-0 z-30"
              initial={{ height: "140vh" }}
              animate={{ height: "0vh", transition: { delay: 0.5 } }}
            />
          </>
        )}
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;