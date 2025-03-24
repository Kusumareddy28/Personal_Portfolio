import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Sparkles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 30 },
          size: { value: 2 },
          color: { value: "#a5b4fc" },
          opacity: { value: 0.5 },
          move: { enable: true, speed: 0.6 },
        },
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default Sparkles;
