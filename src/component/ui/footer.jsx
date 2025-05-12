import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/dilipnandiwale/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Dilip965/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/dilipnandiwale965",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-20 px-8">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 text-center md:text-left"
      >
        {/* Developer Info */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center md:items-start space-y-4"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Dilip Nandiwale
          </h2>
          <p className="text-lg text-gray-300 font-light">
            Full-stack Developer | Innovator | Passionate Creator
          </p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            I create innovative tech solutions, turning your ideas into impactful products. Let's build the future together.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center md:items-start gap-6"
        >
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Connect with Me
          </h3>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow me on ${social.name}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <social.icon className="text-2xl text-gray-400 group-hover:text-yellow-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Utilities */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center md:items-end justify-between"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-medium rounded-lg shadow-lg transition-all duration-300"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <FaArrowUp className="transform group-hover:-translate-y-1 transition-transform" />
          </motion.button>
          
          <div className="mt-8 text-center md:text-right">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Dilip Nandiwale
            </p>
            <p className="text-xs text-gray-500 mt-1">
              All Rights Reserved
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
