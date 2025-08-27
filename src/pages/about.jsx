import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-20 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Title with golden accent and underline */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 relative inline-block group">
          About Me
          <span className="block w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-2 group-hover:w-24 transition-all duration-500 rounded"></span>
        </h2>

        {/* Intro text */}
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          I'm <strong>Dilip Nandiwale</strong>, a passionate software engineer from Solapur, India.
          I specialize in building modern, responsive, and scalable web applications that make an impact.
        </p>

        {/* Skills and Education Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-yellow-400 pl-4">
              Skills & Technologies
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-8">
              <li><strong>Frontend:</strong> React, HTML5, CSS3, Tailwind</li>
              <li><strong>Backend:</strong> Node.js, Express.js</li>
              <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB</li>
              <li><strong>Languages:</strong> Python, Java, C++,Javascript</li>
              <li><strong>Tools:</strong> Git, GitHub, Postman</li>
              <li><strong>Cloud:</strong> AWS, Render, Netlify</li>
              <li><strong>Systems:</strong> DBMS, OS, CN</li>
            </ul>
          </motion.div>

          {/* Education & Objective */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-yellow-400 pl-4">
              Education & Objective
            </h3>
            <p className="text-gray-700 mb-4">
              🎓 B.Tech in Computer Science & Engineering at Punyashlok Ahilyadevi Holkar Solapur University (2021–2025) — <strong>CGPA: 9.5</strong>
            </p>
            <p className="text-gray-700">
              My goal is to build innovative tech solutions that solve real-world problems while continuously improving my skills and contributing to impactful projects.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
