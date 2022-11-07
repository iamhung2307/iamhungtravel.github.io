import React, { useCallback } from 'react'
// import  from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesStar() {
    let T=28,HS=11,a=T/HS
    // console.log(Math.floor(a),T%HS)
        // console.log(a.toFixed(),T%HS)

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    // return (
    //   <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
        
    // );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          // color: {
          //   value: "#0d47a1",
          // },
        },
        fpsLimit: 200,
        interactivity: {
          events: {
            // onClick: {
            //   enable: true,
            //   mode: "push",
            // },
            onHover: {
              enable: true,
              mode: "grab",
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
            value: "#fff",
          },
          links: {
            color: "#fff",
            distance: 130,
            enable: true,
            opacity: 1,
            width: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
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
            value: 0.5,
          },
          shape: {
            type: "star",
          },
          size: {
            value: { min: 2, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesStar