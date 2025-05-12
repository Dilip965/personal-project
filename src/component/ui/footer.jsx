import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-16 mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Footer Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-300 leading-tight">
          Let's Connect &amp; Collaborate
        </h2>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-10 mb-8">
          <motion.a
            href="https://www.linkedin.com/in/dilipnandiwale/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Dilip965/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/dilipnandiwale965"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <FaInstagram />
          </motion.a>
        </div>

        {/* Copyright Information */}
        <p className="text-gray-500 text-md mb-8">© 2025 Dilip Nandiwale. All Rights Reserved.</p>

        {/* Scroll to Top Button */}
        <motion.a
          href="#home"
          className="text-xl text-yellow-400 mt-8 block hover:underline"
          whileHover={{ scale: 1.05 }}
        >
          Back to Top
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;
