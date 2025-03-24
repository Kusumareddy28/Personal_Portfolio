import { motion } from "framer-motion";

const skills = {
  "Languages": ["C++", "Python", "JavaScript", "TypeScript", "Swift"],
  "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Framer Motion"],
  "AI & Tools": ["Google Generative AI", "Gemini API", "OpenAI", "Streamlit", "LLMs"],
  "Databases": ["MongoDB", "Firebase", "MySQL"],
  "Cloud & DevOps": ["GCP", "Docker", "CI/CD"],
};

function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-black text-white py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-indigo-400">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-6 border border-indigo-300/20 shadow-lg hover:shadow-indigo-500/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">{category}</h3>
              <ul className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-700/30 rounded-full text-sm text-indigo-200">
                    {skill}
                  </span>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
