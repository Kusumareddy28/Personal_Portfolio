// src/components/ProjectsSection.js
import { motion } from "framer-motion";

const projects = [
    {
      title: "CURE-E Weather Research Project",
      description:
        "Developed a powerful C++ application that parsed five years of weather data in Chico, CA. Used advanced data structures like linked lists, hash maps, and trees to enable climate trend analysis and efficient storage and retrieval. Optimized a custom CSV parser to handle missing data gracefully.",
      tags: ["C++", "Data Structures", "CSV Parsing"],
      link: "https://github.com/Kusumareddy28",
      image: "/assets/projects/weather.jpg",
    },
    {
      title: "Multithreaded File Compressor",
      description:
        "Built a multithreaded Huffman coding compression engine using C++. Boosted large-file processing by 2.5x. Used STL’s priority queues and maps to build efficient symbol trees, improving both compression ratios and processing speed.",
      tags: ["C++", "Threads", "Huffman", "Performance"],
      link: "https://github.com/Kusumareddy28",
      image: "/assets/projects/compressor.jpg",
    },
    {
      title: "ATS Resume Refiner",
      description:
        "Python + Streamlit-based smart resume analyzer that matches user resumes against job descriptions using Google GenAI and few-shot learning. Visual feedback powered by PDF2Image and Pillow enhances resume alignment.",
      tags: ["Python", "Streamlit", "Google GenAI"],
      link: "https://github.com/Kusumareddy28",
      image: "/assets/projects/resume.jpg",
    },
    {
      title: "Fantastic Feminine Health App",
      description:
        "A personalized wellness companion built in Flutter. Integrates AI with Gemini API, offers cycle-based suggestions, exercise routines, and personalized nutrition plans, stored securely with Firebase.",
      tags: ["Flutter", "Firebase", "Gemini API"],
      link: "https://github.com/Kusumareddy28",
      image: "/assets/projects/feminine.jpg",
    },
    {
      title: "AI Curator for Personalized Learning",
      description:
        "Adaptive platform that tailors learning paths using Gemini API. Tracks learner progress, sends real-time feedback, and incorporates student wellness data. Built with Flutter, Firebase, and Firestore.",
      tags: ["AI", "Flutter", "Firebase", "LLMs"],
      link: "https://github.com/Kusumareddy28",
      image: "/assets/projects/learning.jpg",
    },
    {
      title: "Chess Game Platform",
      description:
        "A complete multiplayer chess experience with real-time gameplay, move tracking, and game history. Built using Django, AJAX, Python-Chess, and deployed with Docker.",
      tags: ["Django", "AJAX", "Docker"],
      link: "https://github.com/Kusumareddy28",
      image: "/assets/projects/chess.jpg",
    },
    {
      title: "Portfolio Website",
      description:
        "Cinematic 3D-themed portfolio built with React, Tailwind, and Framer Motion. Features scroll animations, 3D effects, interactive project modals, and glowing visual storytelling.",
      tags: ["React", "Tailwind", "Framer Motion"],
      link: "https://github.com/Kusumareddy28",
      image: "/assets/projects/portfolio.jpg",
    },
    {
      title: "Weather Visualization in C++",
      description:
        "A command-line weather explorer that processes CSVs to show local trends. Implements memory-efficient ADTs, error handling, and dynamic graph outputs for clearer insights.",
      tags: ["C++", "Parsing", "Memory Management"],
      link: "https://github.com/Kusumareddy28",
      image: "/assets/projects/cliweather.jpg",
    }
  ];

function ProjectsSection() {
  return (
    <div className="relative w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-24 overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-indigo-400">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-indigo-300/20 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-indigo-600 bg-opacity-30 rounded-full text-indigo-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-indigo-400 hover:text-indigo-200 text-sm font-medium"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
