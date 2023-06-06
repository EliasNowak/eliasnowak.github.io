export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Elias Nowak",
  jobDescription: "Web Developer",
  about: `Welcome to my portfolio page! I am thrilled to share my passion for economics, computer science, and technical subjects with you. 
    As a motivated and enthusiastic individual, I am constantly seeking opportunities to expand my knowledge and 
    contribute to the ever-evolving world of technology and finance. In parallel, my love for computer science has led me to explore the exciting world of technology. 
    From programming languages like Python and C++ to web development frameworks such as HTML, CSS, and JavaScript, I am well-versed in a wide range of technical skills. 
    I enjoy solving complex problems through coding and developing innovative solutions that enhance efficiency and productivity.
  `,

  experience: [
    {
      name: "Magna",
      location: "Austria",
      startDate: "Jun 2021",
      endDate: "Jul 2021",
      description: [
        "I have a passion for programming and using my skills to develop smaller VBA projects and create detailed flowcharts using Visio. VBA, or Visual Basic for Applications, is a powerful programming language that allows for automation and customization within various Microsoft Office applications. ",
      ],
    },
  ],

  education: [
    {
      name: "HTL Electronics and Computer Engineering",
      location: "Pinkafeld",
      startDate: "2018",
      endDate: "2023",
      description: ["Robotics"],
    },
    {
      name: "Realgymnasium Hartberg",
      location: "Hartberg",
      startDate: "2011",
      endDate: "2016",
      description: ["Mathematics, Science"],
    },
  ],

  socialMedia: {
    github: "https://github.com/EliasNowak",
    email: "nowakelias@outlook.com",
    linkedin: "https://www.linkedin.com/in/elias-nowak-a71072242/",
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
