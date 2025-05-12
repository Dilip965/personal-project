import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-purple-700 text-white min-h-screen flex flex-col items-center px-6 py-16">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-6xl font-bold leading-tight">
          Welcome to My Portfolio
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-2xl mt-6 font-light"
        >
          I'm Dilip Nandiwale, a passionate software developer. I create innovative solutions that drive results and transform ideas into reality.
        </motion.p>

        <motion.a
          href="#about"
          className="inline-block mt-8 px-8 py-4 text-xl font-semibold text-gray-800 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More About Me
        </motion.a>
      </motion.div>

      {/* About Section */}
      <div id="about" className="mt-32 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-400">About Me</h2>
        <p className="text-lg md:text-xl font-light leading-relaxed">
          I’m a full-stack developer with a passion for building web applications that are both functional and aesthetically pleasing. I have experience working with front-end and back-end technologies, and I am always excited to take on new challenges and learn new skills.
        </p>
      </div>

      {/* Skills Section */}
      <div id="skills" className="mt-32 text-center bg-gray-800 p-16 w-full">
        <h2 className="text-3xl font-semibold mb-8 text-yellow-400">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-white text-center">
            <h3 className="font-semibold text-xl mb-2">React</h3>
            <p className="font-light">Building modern UIs and single-page applications.</p>
          </div>
          <div className="text-white text-center">
            <h3 className="font-semibold text-xl mb-2">Node.js</h3>
            <p className="font-light">Creating server-side applications and APIs.</p>
          </div>
          <div className="text-white text-center">
            <h3 className="font-semibold text-xl mb-2">PostgreSQL</h3>
            <p className="font-light">Developing reliable and scalable databases.</p>
          </div>
          <div className="text-white text-center">
            <h3 className="font-semibold text-xl mb-2">AWS</h3>
            <p className="font-light">Leveraging cloud services for scalable and resilient applications.</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="mt-32 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-yellow-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-yellow-400">Project Name</h3>
            <p className="font-light mt-2">
              This is a description of the project. It showcases the technologies and methods used, as well as the problem it solved.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-300 mt-4 inline-block">View Project</a>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-yellow-400">Project Name</h3>
            <p className="font-light mt-2">
              A brief description of another project showcasing your expertise. Highlight any notable achievements or results.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-300 mt-4 inline-block">View Project</a>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="mt-32 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-yellow-400">What People Say</h2>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-xl font-light italic">
            "Dilip is an exceptional developer. He has a great understanding of both front-end and back-end technologies, and his work always exceeds expectations."
          </p>
          <p className="mt-4 font-semibold text-yellow-400">John Doe, CEO at Company</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6">
        <a href="https://github.com/dilip" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-3xl hover:text-yellow-400 transition duration-300" />
        </a>
        <a href="https://linkedin.com/in/dilip" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-3xl hover:text-yellow-400 transition duration-300" />
        </a>
        <a href="https://twitter.com/dilip" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-3xl hover:text-yellow-400 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Home;
