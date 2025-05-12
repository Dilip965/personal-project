import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-20 px-8  border-t-4 border-cyan-500">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 text-center md:text-left"
      >
        {/* Developer Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold text-cyan-500 font-serif mb-4 tracking-widest">Dilip Nandiwale</h2>
          <p className="text-lg text-gray-300 mb-4 font-light">
            Full-stack Developer | Innovator | Passionate Creator
          </p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            I create innovative tech solutions, turning your ideas into impactful products. Let's build the future together.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start gap-6 mt-8 md:mt-0">
          <h3 className="text-xl font-semibold text-cyan-400 font-serif mb-4">Connect with Me</h3>
          <div className="flex gap-8 text-3xl text-gray-200 hover:text-cyan-400 transition">
            <a
              href="https://www.linkedin.com/in/dilipnandiwale/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Dilip965/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/dilipnandiwale965"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Utilities */}
        <div className="flex flex-col items-center md:items-end justify-between">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-cyan-500 text-black font-serif rounded-xl shadow-xl transform transition-all duration-300 hover:bg-cyan-400 text-lg tracking-wide"
          >
            Go to Top
          </motion.button>
          <p className="text-xs text-gray-400 mt-6 md:mt-10">
            © 2025 Dilip Nandiwale. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
