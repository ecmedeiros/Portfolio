const particlesConfig = {
  fpsLimit: 60,
  background: {
    color: "#000"
  },
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: {
        enable: true,
        mode: "repulse",
        force: 5,
        parallax: { enable: false, force: 10, smooth: 10 }
      },
      resize: false
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 50, duration: 0.4 }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    move: {
      direction: "top",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 400
      },
      value: 60
    },
    opacity: {
      animation: {
        enable: true,
        speed: 0.05,
        sync: true,
        startValue: "max",
        count: 1,
        destroy: false
      },
      value: {
        min: .5,
        max: 1
      }
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 5 }
    }
  }
}

export default particlesConfig