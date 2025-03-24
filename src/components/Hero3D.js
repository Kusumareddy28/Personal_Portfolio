import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef } from "react";

function HeroSection() {
  const canvasRef = useRef(null);

  // Star background (Canvas-based)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 0.5,
      alpha: Math.random(),
      speed: 0.2 + Math.random() * 0.5,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = "white";
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }

      
      const ringImage = new Image();
        ringImage.src = "https://raw.githubusercontent.com/mayashavin/planets-assets/main/saturn-ring.png";

        let angle = 0;

        const ringX = canvas.width * 0.75;
        const ringY = canvas.height * 0.3;
        const ringSize = 120;

        ctx.save();
        ctx.translate(ringX, ringY);
        ctx.rotate(angle);
        ctx.globalAlpha = 0.5; // Slight transparency
        ctx.drawImage(ringImage, -ringSize / 2, -ringSize / 4, ringSize, ringSize / 2);
        ctx.restore();

        angle += 0.002;


      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-24 bg-black text-white overflow-hidden" id="home">
      {/* Canvas Star Background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex-1 space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hey, I'm <span className="text-indigo-400">Kusuma</span>
        </h1>

        

        <h2 className="text-2xl md:text-3xl font-medium">
          <Typewriter
            words={[
              "Software Engineer",
              "AI Enthusiast",
              "C++ Developer",
              "Creative Builder",
              "Vision-Focused Coder",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
            I'm Kusuma, a passionate software engineer with a love for building performant,
            scalable, and elegant applications. My journey has taken me through C++, AI research,
            cloud deployment, and creative front-end builds. I'm deeply curious and thrive at the
            intersection of innovation and problem-solving.
          </p>

          

        <div className="flex gap-4 mt-6">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="border border-indigo-400 px-6 py-3 rounded-full text-indigo-300 hover:bg-indigo-100 hover:text-indigo-700 font-semibold transition-transform transform hover:scale-105"
          >
            Let's Talk
          </a>
        </div>
      </motion.div>

      {/* Right Lottie-style glow blob with girl image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10 flex-1 mt-12 md:mt-0 flex justify-center"
      >
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-xl flex items-center justify-center overflow-hidden">
            <img
              src="/assets/kusuma-animated.jpg"
              alt="Kusuma Avatar"
              className="w-full h-full object-cover rounded-full animate-fade-in"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
