import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Main() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="relative w-full h-screen"> {/* Define height explicitly */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: { value: "#0f172a" }, // Dark background
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: false, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffcc00" }, // Bright yellow particles
            links: {
              color: "#ffcc00",
              distance: 150,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              speed: 4,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 80,
            },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 8 } },
          },
          detectRetina: true,
        }}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} // Position particles behind the content
      />
    </div>
  );
}

export default Main;

