import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Main() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div className="max-h-screen">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#0f172a", // Dark navy blue background
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffcc00", // Bright yellow particles
                        },
                        links: {
                            color: "#ffcc00", // Bright yellow links
                            distance: 150,
                            enable: true,
                            opacity: 0.6, // Slightly more opaque links for visibility
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 4, // Slightly faster speed for more dynamic movement
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.6, // Increased opacity for a more solid look
                        },
                        shape: {
                            type: "circle", // Changed shape to circle for a softer look
                        },
                        size: {
                            value: { min: 2, max: 8 }, // Adjusted size range for more variability
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}

export default Main;
