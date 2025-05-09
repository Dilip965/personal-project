import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Agro Innovation',
      description: 'A centralized platform providing real-time weather updates, government schemes, and current market prices to support farmers.',
      image: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1738071197/pmfj48ojvfwmmhli40q1.jpg?_upload_ref=ic_img_tool&__ar__=1.49', // Replace with your project image
      link: '#',
    },
    {
      title: 'Heart Disease Prediction',
      description: 'A machine learning project that predicts the likelihood of heart disease using the Random Forest algorithm with an accuracy of 75%.',
      image: 'https://miro.medium.com/v2/resize:fit:604/1*6WGnPZ5lkiT2QgK-JP1DFw.png', // Replace with your project image
      link: 'https://www.heartsathi.online/',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img  src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-400">{project.title}</h3>
                <p className="text-gray-300 my-4">{project.description}</p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-gray-900 py-2 px-6 rounded-md hover:bg-yellow-500 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
