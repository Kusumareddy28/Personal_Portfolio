// src/components/ExperienceSection.js
import { motion } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Graduate Teaching Assistant (C++)",
    org: "California State University, Chico",
    date: "Jan 2025 – Present",
    logo: "/assets/CSU_Logo.png",
    points: [
      "Guided over 100 students in mastering C++, data structures, and algorithmic thinking.",
      "Led debugging sessions and one-on-one mentorship to reinforce clean and optimized code practices.",
      "Provided practical problem-solving strategies for recursion, memory management, and object-oriented programming."
    ],
    skills: ["C++", "DSA", "Mentorship"]
  },
  {
    role: "Web Development Student Assistant",
    org: "SAP-UCC, California State University, Chico",
    date: "Dec 2023 – Present",
    logo: "/assets/SAP_Logo.png",
    points: [
      "Designed and developed a dynamic e-commerce platform serving 5,000+ users using secure APIs.",
      "Built a Swift-based iOS app with real-time backend integration.",
      "Collaborated with international SAP teams to implement scalable, efficient components aligned with institutional goals."
    ],
    skills: ["Swift", "API Design", "Team Collaboration"]
  },
  {
    role: "Software Developer",
    org: "Epsilon, India",
    date: "Feb 2022 – Aug 2023",
    logo: "/assets/Epsilon_Logo.png",
    points: [
      "Developed high-performance C++ modules for an AI-driven analytics engine optimizing user behavior predictions.",
      "Built a custom memory management layer to reduce latency and boost performance.",
      "Integrated Python-based ML models with existing C++ architecture via Cython."
    ],
    skills: ["C++", "AI Integration", "Cython"]
  },
  {
    role: "Programmer Analyst",
    org: "Cognizant Technology Solutions, India",
    date: "Dec 2020 – Jan 2022",
    logo: "/assets/CTS_Logo.jpeg",
    points: [
      "Built real-time analytics dashboards with ReactJS and WebSockets for live data updates.",
      "Integrated CI/CD pipelines and automated tests to accelerate and harden the deployment cycle.",
      "Ensured code quality and security compliance throughout application development."
    ],
    skills: ["ReactJS", "CI/CD", "Security"]
  },
  {
    role: "Intern Developer + Trainer",
    org: "NearXture, India",
    date: "Jan 2020 – Dec 2020",
    logo: "/assets/nearxture.png",
    points: [
      "Developed a full-stack learning platform using React, Node.js, Express, and MongoDB.",
      "Created a custom coding curriculum and trained over 200 learners with hands-on sessions.",
      "Launched a Swift-based iOS app as a prototype companion for students."
    ],
    skills: ["Full Stack", "Education", "Swift"]
  },
  {
    role: "Software Development Intern",
    org: "Zapcom, India",
    date: "May 2019 – Aug 2019",
    logo: "/assets/zapcom.jpeg",
    points: [
      "Built a responsive front-end chatbot UI using ReactJS and Material UI.",
      "Collaborated in Agile sprints to deliver features for an AI-driven customer support system.",
      "Optimized rendering performance and ensured accessibility across devices."
    ],
    skills: ["ReactJS", "UI Design", "Agile"]
  }
];

function ExperienceSection() {
  const timelineRef = useRef(null);

  return (
    <section id="experience" className="relative w-full bg-black text-white py-24 px-6 md:px-24 overflow-hidden">
      {/* Glowing vertical timeline effect */}
      <div className="absolute left-[33px] top-0 h-full w-[3px] bg-gradient-to-b from-indigo-500 via-indigo-700 to-indigo-800 animate-pulse blur-md opacity-40 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-indigo-400 tracking-wide"
        >
          Professional Experience
        </motion.h2>

        <div ref={timelineRef} className="relative border-l-[3px] border-indigo-700 pl-8 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-indigo-800/10 to-indigo-400/5 rounded-lg p-6 border border-indigo-300/30 shadow-xl hover:shadow-indigo-500/40 transition-all duration-500 backdrop-blur-md hover:scale-[1.01]"
            >
              <div className="absolute -left-[46px] top-6 w-6 h-6 rounded-full bg-indigo-500 shadow-lg border-2 border-white"></div>
              <div className="flex items-start gap-5">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={`${exp.org} logo`}
                    className="w-12 h-12 rounded-full object-contain border border-indigo-400 shadow-sm"
                  />
                )}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-indigo-300 leading-snug">{exp.role}</h3>
                  <p className="text-md text-gray-400 mb-1 font-medium">{exp.org}</p>
                  <p className="text-sm text-gray-500 italic mb-4">{exp.date}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="transition-all duration-200"
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills &&
                      exp.skills.map((skill, idx) => (
                        <span key={idx} className="bg-indigo-600/40 text-xs px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;