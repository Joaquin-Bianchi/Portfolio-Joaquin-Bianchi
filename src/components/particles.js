"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const [config, setConfig] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadConfig = async () => {
      const response = await fetch("/particles.json");
      const data = await response.json();
      setConfig(data);
    };

    loadConfig();

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Función para detectar cambios en el modo oscuro
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Comprobar el modo inicial
    checkDarkMode();

    // Observar cambios en la clase 'dark' del html
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  if (init && config) {
    // Modificar la configuración basada en el tema
    const updatedConfig = {
      ...config,
      particles: {
        ...config.particles,
        color: {
          value: isDarkMode ? "#000000" : "#000000",
        },
        links: {
          ...config.particles.links,
          color: isDarkMode ? "#ffffff" : "#000000",
        },
      },
    };

    return (
      <div>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={updatedConfig}
          style={{ zIndex: 1000 }}
        />
      </div>
    );
  }

  return null;
};

export default ParticlesComponent;
