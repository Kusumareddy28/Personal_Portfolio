// src/components/ContactSection.js
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function ContactSection() {
  return (
    <section id="contact" className="w-full bg-black text-white py-20 px-6 md:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-indigo-400"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-6"
        >
          Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </motion.p>

        <div className="flex justify-center gap-6 mb-10">
          <a href="https://www.linkedin.com/in/kusuma-reddyvari" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-indigo-400 hover:text-indigo-300 transition" />
          </a>
          <a href="https://github.com/kusumareddy28" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-indigo-400 hover:text-indigo-300 transition" />
          </a>
          <a href="mailto:kusumareddy28@gmail.com">
            <FaEnvelope className="text-2xl text-indigo-400 hover:text-indigo-300 transition" />
          </a>
        </div>

        {/* <form className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md font-semibold shadow-md transition"
          >
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
}

export default ContactSection;