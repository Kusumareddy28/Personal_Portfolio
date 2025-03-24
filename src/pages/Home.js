// src/pages/Home.js
import { motion } from "framer-motion";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
// import Sparkles from "../components/Sparkles";
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

function Home() {
    return (
        <section
            id="home"
            className="relative overflow-hidden min-h-screen pt-32 px-6 md:px-24 bg-gradient-to-br from-indigo-100 to-white flex flex-col md:flex-row items-center justify-between"
        >
            {/* <Sparkles /> */}
            {/* Floating Blob Animation */}
            <div className="blob -z-10 absolute top-[-10rem] left-[-10rem] w-[500px] h-[500px] bg-indigo-300 opacity-20 rounded-full mix-blend-multiply blur-2xl animate-blob" />
            <div className="blob -z-10 absolute top-[10rem] right-[-10rem] w-[400px] h-[400px] bg-purple-300 opacity-20 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-2000" />

            {/* Text Content */}
            <motion.div
                className="space-y-6 max-w-xl z-10"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.h2 variants={item} className="text-2xl md:text-3xl text-gray-600">
                    Hi there 👋 I’m
                </motion.h2>

                <motion.h1
                    variants={item}
                    className="relative inline-block text-4xl md:text-6xl font-extrabold text-indigo-700 after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-indigo-300 after:rounded-md after:animate-pulse"
                >
                    Kusuma Reddyvari
                </motion.h1>

                <motion.p variants={item} className="text-gray-700 text-lg md:text-xl leading-relaxed">
                    I'm a{" "}
                    <span className="font-semibold text-indigo-500">
                        <Typewriter
                            words={[
                                "Software Engineer",
                                "AI Enthusiast",
                                "Frontend Developer",
                                "C++ Developer",
                                "Problem Solver"
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>{" "}
                    passionate about solving real-world problems.
                </motion.p>


                <motion.div variants={item} className="flex space-x-4">
                    <a
                        href="#projects"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:bg-indigo-700 transition-transform duration-300 shadow"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-indigo-600 font-semibold border border-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 transition-transform duration-300"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 15, delay: 1 }}
                className="mt-12 md:mt-0"
            >
                <img
                    src="./././public/assets/kusuma-animated.jpg"
                    alt="Kusuma Reddyvari"
                    className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white"
                />
            </motion.div>
        </section>
    );
}

export default Home;