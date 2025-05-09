import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-12">
          I’d love to hear from you! Whether you want to discuss a project, ask a question, or just say hello, feel free to reach out.
        </p>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full max-w-xl mx-auto"
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-yellow-400 outline-none"
              rows="5"
            />
          </div>

          <motion.button
            type="submit"
            className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

      </motion.div>
    </section>
  );
};

export default Contact;
