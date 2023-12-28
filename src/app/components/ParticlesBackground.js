import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import particlesConfig from "./config/particlesConfig";

export default function ParticlesBackground() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
            style={{
                position: 'fixed',
                width: '100vw', // Full width
                height: '100vh', // Full height
                zIndex: 0,
            }}
        />

    );
};