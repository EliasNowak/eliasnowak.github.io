export const info = {
  baseUrl: "https://eliasnowak.github.io",
  name: "Elias Nowak",
  jobDescription: "Embedded Systems Engineer & Wearable Builder",
  about: [
    "Building CareLoop: a screen-free wearable that aligns environmental exposure with physiological signals on one timeline.",
    "Leading embedded firmware and system architecture across Zephyr, Nordic nRF52, BLE and multi-sensor data acquisition.",
    "Studying Electrical Engineering and Information Technology at TU Wien while working on production embedded systems.",
  ],
  last_updated: "Last updated in August 2026 from Vienna, Austria.",
  experience: [
    {
      name: "CareLoop Labs — Co-Founder & Embedded Systems Lead",
      location: "Vienna, Austria",
      startDate: "2025",
      endDate: "Present",
      description: [
        "Building a screen-free wearable that synchronizes environmental exposure — particulate matter, VOC/NOx, temperature and humidity — with PPG, EDA, skin temperature and IMU signals on a single timeline.",
        "Leading embedded firmware and system architecture using C/C++, Zephyr and Nordic nRF52, including BLE, sensor integration, data acquisition, hardware bring-up and automated test infrastructure.",
        "Co-developing low-power wearable hardware and conducting customer discovery with researchers in environmental medicine, wearable sensing and clinical research.",
      ],
      link: "https://github.com/careloop-labs",
      linkLabel: "github.com/careloop-labs",
    },
    {
      name: "RISE — Embedded Software Engineer",
      location: "Vienna, Austria",
      startDate: "2024",
      endDate: "Present",
      description: [
        "Developing production firmware for access-control systems in C++ and contributing to MIFARE DESFire EV3 security based on ISO/IEC 14443.",
        "Implementing encryption, hashing and signature verification with OpenSSL, plus a Python/Flask key-management service for encrypted credentials.",
        "Built an access-card personalization tool that automates secure card initialization with unique keys.",
      ],
    },
  ],

  education: [
    {
      name: "TU Wien — BSc Electrical Engineering and Information Technology",
      location: "Vienna, Austria",
      startDate: "2024",
      endDate: "Present",
      description: [
        "Expected graduation: June 2027.",
        "Focus on computer architecture, embedded systems, low-level programming and open-source hardware.",
      ],
    },
    {
      name: "HTL Pinkafeld — Electronics and Computer Engineering",
      location: "Pinkafeld, Austria",
      startDate: "2018",
      endDate: "2023",
      description: [
        "Robotics specialization with hands-on C/C++ microcontroller work across STM32, ESP32, Arduino and Raspberry Pi.",
        "Built custom teaching robots, a camera-based line follower and a CPU from discrete ICs programmed in assembly.",
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/EliasNowak",
    email: "nowak.elias@outlook.com",
    linkedin: "https://www.linkedin.com/in/elias-nowak-a71072242/",
    x: "https://x.com/eliasNowak_",
  },

  projects: [
    {
      title: "Line-Follower",
      isFeatured: true,
      thumbnail: "/assets/images/VisionTracker-portfolio.png",
      githubUrl: "https://github.com/EliasNowak/Line-Follower",
      liveUrl: "",
    },
    {
      title: "Pictobot",
      isFeatured: true,
      thumbnail: "/assets/images/Pictobot-portfolio.png",
      githubUrl: "",
      liveUrl:
        "https://www.wirtschaftszeit.at/news/becom-zeichnet-beste-diplomarbeit-der-htl-pinkafeld-mit-innovation-award-aus/",
    },
  ],
};
