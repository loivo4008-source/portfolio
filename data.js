/*
  ====================================================================
  EDIT ME — this is the only file you need to touch to update content.
  ====================================================================
  - Change the text below to describe yourself and your projects.
  - Put your images in assets/projects/  and your videos in assets/videos/
  - Then just reference the filenames here, e.g. "assets/projects/myapp.png"
  - Leave image/video as "" (empty string) if you don't have one yet.
*/

const PORTFOLIO_DATA = {
  // ---------------- ABOUT YOU ----------------
  profile: {
    name: "Dang Loi Vo",
    role: "Electrical Engineering Student",
    tagline: "EE student at UNM building embedded systems and hardware — from solar chargers to self-balancing robots.",
    avatar: "assets/avatar.jpg", // put a photo here, or leave "" for initials
    about: `I'm an Electrical Engineering student at the University of New Mexico
      (anticipated May 2028), focused on embedded systems, PCB design, and power
      electronics. I like projects that combine hardware and software — designing
      a circuit, laying it out in KiCad, then writing the firmware that brings it to life.

      Outside of coursework, I work as a Peer Learning Facilitator and Program
      Assistant in UNM's School of Engineering, and I'm on the communications
      subsystem team for UNM's Small Satellite Group, helping build a CubeSat
      that transmits telemetry over 433 MHz LoRa.`,
    location: "Albuquerque, NM",
    email: "loivo4008@gmail.com",
    resumeUrl: "assets/resume.pdf", // add your resume PDF to assets/ and update this
    socials: [
      { label: "GitHub", url: "https://github.com/loivo4008-source", icon: "github" },
      { label: "LinkedIn", url: "https://linkedin.com/in/dang-loi-vo", icon: "linkedin" },
      { label: "Email", url: "mailto:loivo4008@gmail.com", icon: "mail" },
    ],
  },

  // ---------------- SKILLS ----------------
  skills: [
    "PCB Design", "Embedded Systems", "Circuit Design", "Power Systems",
    "Sensor Integration", "Python", "C", "Arduino", "KiCad", "MATLAB",
    "Fusion 360", "3D Printing",
  ],

  // ---------------- PROJECTS ----------------
  // Copy the block below to add a new project. Order here = order shown.
  projects: [
    {
      title: "Solar Power Battery Charger",
      description: "A solar-powered Li-ion (18650) battery charging system using a 5W solar panel, CN3791 MPPT controller, dual INA219 current sensors, and an ESP32, achieving over 90% charging efficiency. Custom PCB designed in KiCad and manufactured through JLCPCB, with real-time current/voltage data logged and visualized on a remote web dashboard over Wi-Fi.",
      image: "assets/projects/solar-charger.png",
      video: "",
      tags: ["KiCad", "PCB Design", "ESP32", "I2C", "Embedded Systems"],
      liveUrl: "",
      codeUrl: "",
      featured: true,
    },
    {
      title: "Self-Balancing PID Control Robot",
      description: "A self-balancing two-wheeled robot built on an ESP32, using an MPU-6050 IMU and a Kalman filter to fuse gyroscope and accelerometer data for real-time angle estimation. Runs a PID control loop at 250 Hz with a serial tuning interface and a custom Python data logger/plotter, on a chassis designed in Fusion 360.",
      image: "assets/projects/balancing-robot.png",
      video: "",
      tags: ["ESP32", "PID Control", "Kalman Filter", "Fusion 360", "Python"],
      liveUrl: "",
      codeUrl: "",
      featured: false,
    },
    {
      title: "Solar Scanner Arduino Project",
      description: "An Arduino-based proximity sensing system using an ultrasonic sensor and passive buzzer, with PWM-controlled buzzer intensity scaled dynamically to detected distance for real-time feedback.",
      image: "assets/projects/solar-scanner.png",
      video: "",
      tags: ["Arduino", "Sensors", "PWM"],
      liveUrl: "",
      codeUrl: "",
      featured: false,
    },
  ],
};
