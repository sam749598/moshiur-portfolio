import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Function to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="bg-gray-900 w-full h-20 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8 text-white">
        {/* Logo */}
        <div className="flex items-center">
          <motion.h1 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            LoGo
          </motion.h1>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          {["Home", "About", "Skills", "Projects", "Testimonials"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative font-medium hover:text-amber-300 transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={handleLinkClick}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
        
        {/* Desktop Hire Me Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <motion.button
              className="relative z-10 px-6 py-2 bg-gray-900 text-white font-medium rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    "linear-gradient(90deg, #4ade80, #22d3ee, #818cf8, #c084fc, #f472b6, #4ade80)",
                    "linear-gradient(90deg, #22d3ee, #818cf8, #c084fc, #f472b6, #4ade80, #22d3ee)",
                    "linear-gradient(90deg, #818cf8, #c084fc, #f472b6, #4ade80, #22d3ee, #818cf8)",
                    "linear-gradient(90deg, #c084fc, #f472b6, #4ade80, #22d3ee, #818cf8, #c084fc)",
                    "linear-gradient(90deg, #f472b6, #4ade80, #22d3ee, #818cf8, #c084fc, #f472b6)",
                    "linear-gradient(90deg, #4ade80, #22d3ee, #818cf8, #c084fc, #f472b6, #4ade80)"
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  padding: "2px",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "exclude"
                }}
              />
            </motion.button>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <HiX className="h-8 w-8" />
            ) : (
              <HiMenu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-gray-800 text-white px-4 py-6 absolute top-20 left-0 right-0 z-40 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {["Home", "About", "Skills", "Projects", "Testimonials"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="font-medium hover:text-amber-300 transition-colors duration-300 py-2"
                onClick={handleLinkClick}
              >
                {item}
              </a>
            ))}
           
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;



