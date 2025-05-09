import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-purple-700 text-white min-h-screen flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto"
      >
        {/* Hero Title */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Welcome to My Portfolio
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-2xl mt-4 font-light"
        >
          I'm Dilip Nandiwale, a passionate software developer. I create innovative solutions that drive results and transform ideas into reality.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#about"
          className="inline-block mt-8 px-8 py-4 text-xl font-semibold text-gray-800 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More About Me
        </motion.a>
      </motion.div>

      {/* Optional Background Elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.3, duration: 1.5 }}
      >
        <svg
          className="w-16 md:w-32 text-white opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="currentColor"
        >
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="8" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Home;
