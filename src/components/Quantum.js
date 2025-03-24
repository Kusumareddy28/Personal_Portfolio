import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import background from '../assets/moon.jpg';
import QECGraph from '../assets/QEC_vs_Noise_CustomTheme.png';

function Quantum() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      speed: 0.2 + Math.random() * 0.4,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  const cards = [
    {
      title: "What Makes Rigetti Special?",
      text: `Rigetti Computing is a pioneer in building superconducting quantum processors and cloud-based quantum infrastructure. Their Aspen chips and hybrid systems are industry-defining — but the journey toward commercial viability faces significant challenges.`,
    },
    {
      title: "Key Challenges in Rigetti’s Approach",
      text: `• Noise in Qubits — Decoherence and low gate fidelity hinder reliability\n• Error Correction — Scalable QEC remains a bottleneck\n• Hybrid Orchestration — Latency in classical-quantum operations\n• Benchmarked Scalability — Sustaining coherence while scaling qubits`,
    },
    {
      title: "How I Can Help",
      text: `I’ve developed a Quantum Error Correction Simulator using Shor and Surface Codes in Qiskit. My Hybrid Quantum-Classical Neural Network model can accelerate Rigetti’s QCS for financial forecasting. I'm also working on a visual debugging suite tailored to Quil development.`,
    },
  ];

  const finalCard = {
    title: "Let’s Collaborate",
    text: `I’m not just applying — I’m proposing. From simulation to developer tooling and QML optimization, I bring practical solutions to support Rigetti’s roadmap. Let’s build quantum advantage together.`,
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white font-sans">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <img
        src={background}
        alt="space"
        className="absolute top-10 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      <div className="relative z-10 px-6 md:px-24 py-24 space-y-16 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-indigo-400">Quantum Innovation: Rigetti Focus</h1>
        <p className="text-lg text-gray-200 max-w-3xl">
          Focused research on Rigetti’s hybrid quantum-classical infrastructure. Using QML, QEC, and developer-first tooling to help bridge their gaps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-blur-md border border-indigo-500/20 p-6 rounded-xl shadow-md hover:shadow-indigo-500/30 transition"
            >
              <h2 className="text-2xl font-bold text-indigo-300 mb-2">{card.title}</h2>
              <p className="text-sm text-gray-200 whitespace-pre-line">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 backdrop-blur-md border border-indigo-500/20 p-8 rounded-xl shadow-md hover:shadow-indigo-500/30 transition flex-1"
          >
            <h2 className="text-2xl font-bold text-indigo-300 mb-2">{finalCard.title}</h2>
            <p className="text-sm text-gray-200 whitespace-pre-line mb-4">{finalCard.text}</p>
            <img
              src={QECGraph}
              alt="QEC Graph"
              className="rounded-lg shadow-lg max-w-full mx-auto mb-4"
            />
            <p className="text-sm text-gray-300 text-center">
              The above chart visualizes the relationship between quantum noise and the effectiveness of error correction techniques. It demonstrates how Shor and Surface Codes mitigate error rates in practical quantum circuits. Tools like this empower hybrid developers to evaluate performance trade-offs in real time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-black bg-opacity-90 p-8 rounded-xl space-y-6 flex-1"
          >
            <h2 className="text-3xl font-semibold text-indigo-400">Research & Certifications</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Quantum Error Correction with Qiskit — Implemented both Shor and Surface Code models to simulate fault-tolerant quantum computing environments.</li>
              <li>Certified by Google Quantum AI — Completed hands-on labs on noise-resilient circuits and real-time quantum debugging.</li>
              <li>Quantum Machine Learning for High-Frequency Trading — Developed hybrid quantum-classical models to forecast price signals and improve trading accuracy.</li>
            </ul>

            <h2 className="text-3xl font-semibold text-indigo-400 mt-8">Experience Highlights and Projects I've Worked On</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li><strong>Quantum Error Correction Simulator:</strong> Simulated quantum noise and correction using Qiskit and Matplotlib. Compared Shor vs Surface Code under noisy channels.</li>
              <li><strong>Hybrid Quantum-Classical Forecasting:</strong> Developed an HQNN combining Quantum Variational Circuits with deep learning for stock prediction.</li>
              <li><strong>Visual Debugging for Quil:</strong> Designed an interface to step through Quil circuits visually and inspect fidelity and coherence issues.</li>
            </ul>
            {/* <ul className="list-disc list-inside text-gray-200">
              <li>Graduate TA (C++) — CSU, Chico — Mentored 100+ students, explaining recursion, memory management, and OOP principles in detail.</li>
              <li>Web Dev Assistant — SAP-UCC — Built full-stack dashboards to display real-time data from quantum backends and research simulations.</li>
              <li>Software Developer — Epsilon, Cognizant, NearXture, Zapcom — Collaborated on QML and visualization tools in hybrid cloud environments.</li>
            </ul> */}

            {/* <h2 className="text-3xl font-semibold text-indigo-400 mt-8">Projects I've Worked On</h2> */}
            
          </motion.div>
        </div>

        <div className="pt-6 text-sm text-gray-400">
          Kusuma Reddyvari | Quantum Researcher | California
        </div>
      </div>
    </div>
  );
}

export default Quantum;