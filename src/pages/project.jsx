import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Agro Innovation',
      description: 'A centralized platform providing real-time weather updates, government schemes, and current market prices to support farmers.',
      image: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1738071197/pmfj48ojvfwmmhli40q1.jpg?_upload_ref=ic_img_tool&__ar__=1.49',
      link: '#',
      technologies: ['React', 'Node.js', 'Weather API', 'MongoDB'],
      category: 'Web Application'
    },
    {
      title: 'Heart Disease Prediction',
      description: 'A machine learning project that predicts the likelihood of heart disease using the Random Forest algorithm with an accuracy of 75%.',
      image: 'https://miro.medium.com/v2/resize:fit:604/1*6WGnPZ5lkiT2QgK-JP1DFw.png',
      link: 'https://www.heartsathi.online/',
      technologies: ['Python', 'Machine Learning', 'Random Forest', 'Scikit-learn'],
      category: 'AI/ML'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <section id="projects" className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Exploring innovation through code and creativity
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gray-800 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/20"
              >
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 px-4 py-1 rounded-full">
                    <span className="text-yellow-400 text-sm font-medium">{project.category}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center py-10"
      >
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Every Project Deserves Business
        </h2>
      </motion.div>
    </div>
  );
};

export default Projects;
