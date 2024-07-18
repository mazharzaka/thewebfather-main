// import Particles, {initParticlesEngine} from "@tsparticles/react";
// import {loadSlim} from "@tsparticles/slim";
import React from "react";

function Home() {
  // const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {
  //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //     // starting from v2 you can add only the features you need reducing the bundle size
  //     //await loadAll(engine);
  //     //await loadFull(engine);
  //     await loadSlim(engine);
  //     //await loadBasic(engine);
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  // const options = useMemo(
  //   () => ({
  //     particles: {
  //       number: {
  //         value: 160,
  //         density: {
  //           enable: true,
  //           value_area: 800,
  //         },
  //       },
  //       color: {
  //         value: "#98979C",
  //       },
  //       shape: {
  //         type: "circle",
  //         stroke: {
  //           width: 0,
  //           color: "#000000",
  //         },
  //         polygon: {
  //           nb_sides: 5,
  //         },
  //         image: {
  //           src: "img/github.svg",
  //           width: 100,
  //           height: 100,
  //         },
  //       },
  //       opacity: {
  //         value: 1,
  //         random: true,
  //         anim: {
  //           enable: true,
  //           speed: 1,
  //           opacity_min: 0,
  //           sync: false,
  //         },
  //       },
  //       size: {
  //         value: 3,
  //         random: true,
  //         anim: {
  //           enable: false,
  //           speed: 4,
  //           size_min: 0.3,
  //           sync: false,
  //         },
  //       },
  //       line_linked: {
  //         enable: false,
  //         distance: 150,
  //         color: "#ffffff",
  //         opacity: 0.4,
  //         width: 1,
  //       },
  //       move: {
  //         enable: true,
  //         speed: 1,
  //         direction: "none",
  //         random: true,
  //         straight: false,
  //         out_mode: "out",
  //         bounce: false,
  //         attract: {
  //           enable: false,
  //           rotateX: 600,
  //           rotateY: 600,
  //         },
  //       },
  //     },
  //     interactivity: {
  //       detect_on: "canvas",
  //       events: {
  //         onhover: {
  //           enable: true,
  //           mode: "bubble",
  //         },
  //         onclick: {
  //           enable: true,
  //           mode: "repulse",
  //         },
  //         resize: true,
  //       },
  //       modes: {
  //         grab: {
  //           distance: 400,
  //           line_linked: {
  //             opacity: 1,
  //           },
  //         },
  //         bubble: {
  //           distance: 250,
  //           size: 0,
  //           duration: 2,
  //           opacity: 0,
  //           speed: 3,
  //         },
  //         repulse: {
  //           distance: 400,
  //           duration: 0.4,
  //         },
  //         push: {
  //           particles_nb: 4,
  //         },
  //         remove: {
  //           particles_nb: 2,
  //         },
  //       },
  //     },
  //     retina_detect: true,
  //   }),
  //   []
  // );

  return (
    <>
      {/* {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )} */}
      <div className="text-white z-10 mt-12 h-[80vh]">
        <div
          className="flex ml-14 mr-14 justify-center max-h-20  
      "
        >
          <h2 className=" text-center h-full md:text-5xl text-4xl mt-28 font-bold">
            The<span id="css">Web</span>Father is an{" "}
            <span id="css">Egyptian</span> website . It creates{" "}
            <span id="css">Creative</span> designs for websites using CSS.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
