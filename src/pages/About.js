// src/components/AboutSection.js
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-black text-white py-20 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Avatar and Floating Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border border-indigo-500/30">
            <img
              src="/assets/kusuma-animated.jpg"
              alt="Kusuma Portrait"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-20"></div>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-400">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm Kusuma, a passionate software engineer with a love for building performant,
            scalable, and elegant applications. My journey has taken me through C++, AI research,
            cloud deployment, and creative front-end builds. I'm deeply curious and thrive at the
            intersection of innovation and problem-solving.
          </p>
          <div className="bg-white bg-opacity-5 backdrop-blur-xl rounded-2xl p-6 border border-indigo-400/20 shadow-md">
            <h3 className="text-xl font-semibold text-indigo-300 mb-4">Tools & Technologies</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-gray-300">
              <li>React</li>
              <li>C++</li>
              <li>Python</li>
              <li>Tailwind CSS</li>
              <li>Firebase</li>
              <li>Google Cloud</li>
              <li>AI & ML APIs</li>
              <li>Node.js</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;