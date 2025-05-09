import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-20 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Title with golden accent */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 relative inline-block group">
          Resume
          <span className="block w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-2 group-hover:w-24 transition-all duration-500 rounded"></span>
        </h2>

        {/* Resume Text */}
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Download my detailed resume to explore my journey in software development and view my skills, experiences, and qualifications.
        </p>

        {/* Resume Download Button */}
        <div className="text-center">
          <motion.a
            href="/path-to-your-resume.pdf" // Update this with the correct path to your resume
            download="Dilip_Nandiwale_Resume"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-lg text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume
          </motion.a>
        </div>

        {/* Experience & Education Section */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-yellow-400 pl-4">
              Experience
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-8">
              <li>
                <strong>Software Developer Intern</strong> | ABC Tech Solutions | June 2023 – Aug 2023
                <p className="text-sm text-gray-500 mt-1">Worked on developing full-stack applications with React and Node.js. Contributed to improving system performance and user interface responsiveness.</p>
              </li>
              <li>
                <strong>Freelance Web Developer</strong> | Self-employed | Jan 2022 – Present
                <p className="text-sm text-gray-500 mt-1">Built and deployed scalable websites for small businesses, focusing on performance optimization and seamless user experience.</p>
              </li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-yellow-400 pl-4">
              Education
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-8">
              <li>
                <strong>B.Tech in Computer Science & Engineering</strong> | Punyashlok Ahilyadevi Holkar Solapur University | 2021-2025
                <p className="text-sm text-gray-500 mt-1">CGPA: 9.5</p>
              </li>
              <li>
                <strong>High School Diploma</strong> | XYZ High School | 2019-2021
                <p className="text-sm text-gray-500 mt-1">Graduated with distinction. Focused on Mathematics and Computer Science subjects.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
