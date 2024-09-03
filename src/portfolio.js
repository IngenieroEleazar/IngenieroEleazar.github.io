/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ingeniero Eleazar",
  title: "Hola, Soy el Ingeniero Eleazar",
  subTitle: emoji(
    "Soy un desarrollador de software 🚀 con experiencia en la construcción de aplicaciones web y de Escritorio con Asp .net core, C#, Windows Forms, MySQL, Javascript, React, Python."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/IngenieroEleazar",
  linkedin: "www.linkedin.com/in/ingenieroeleazar",
  gmail: "l.azar.hp@gmail.com",
  facebook: "https://www.facebook.com/leviengineerhp/",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "En que me especializo",
  subTitle: "Programador de aplicaciones Web y de Escritorio utilizando tecnologias en función al proyecto a desarrollar.",
  skills: [
    emoji(
      "⚡ Desarrollo de interfaces FrontEnd mediante HTML, CSS y JavaScript."
    ),
    emoji(
      "⚡ Creacion de BD con el lenguaje SQL en MySQL Worckbench."
    ),
    emoji("⚡ Aplicaciones Web y de Escritorio"),
    emoji(
      "⚡ Orientación en todas las tecnologias mencionadas"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Tecnológica del Perú",
      logo: require("./assets/images/utpLogo.png"),
      subHeader: "Bachiller en Ingenieria de Software",
      duration: "Diciembre 2024 - Concluso",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Microsoft Office",
      progressPercentage: "80%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "70%"
    },
    {
      Stack: "C#",
      progressPercentage: "70%"
    },
    {
      Stack: "Python",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Jefe de Área de TI",
      company: "B&V MOLDEA TU FUTURO",
      companylogo: require("./assets/images/moldeaTuFuturoLogo.jpg"),
      date: "Dic 2023 – Presente",
      desc: "Aptitudes: C#, MVC, GitHub, SQL, Dart, Firebase",
      descBullets: [
        "Mantenimiento de aplicaciones-sistemas de la institución B&V MOLDEA TU FUTURO",
        "Elaborar la documentación del software",
        "Codificación del aplicativo móvil: b&vmoldeatufuturo",
        "Codificación del sitio web: b&vmoldeatufuturo",
        "Manejo base de datos relacional en MySQL y no relacional en Firebase",
        "Documentar pruebas unitarias, POSTMAN"
      ]
    },
    {
      role: "Docente de Matemática",
      company: "CORPORACION CRUZ SACO",
      companylogo: require("./assets/images/cruzSacoLogo.png"),
      date: "Mar 2022 – Dic 2023",
      desc: "Aptitudes: Habilidades Blandas, Comunicación Asertiva",
      descBullets: [
        "Planificar sesiones de aprendizaje continuo",
        "Apoyar como tutor de grado",
        "Elaborar materiales de apoyo",
        "Revisar y corregir materiales o exámenes proporcionaods por la I.E.P."
      ]
    },
    {
      role: "Tutor de Algoritmos – Asistente Estudiantil",
      company: "Universidad Tecnológica del Perú",
      companylogo: require("./assets/images/utpLogo.png"),
      date: "Ago 2021 – Ago 2022",
      descBullets: [
        "Aportación de conocimientos teóricos y prácticos sobre la especialidad.",
        "Planificación de las clases para fortalecer los procesos de aprendizaje.",
        "Registro y control de las actividades realizadas.",
        "Fomento de valores que contribuyen a un buen ambiente de trabajo entre los alumnos",
        "Solución de conflictos surgidos en el aula.",
        "Elaboración de materiales de apoyo para las clases."
      ]
    },
    {
      role: "Técnico en el Área",
      company: "Soporte tecnico de Rockolas",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Ene 2015 – Ago 2021",
      descBullets: [
        "Lectura de Planos para fabricar una Rockola.",
        "Capacidad de utilizar herramientas eléctricas como taladro, caladora, cortadora, entre otros.",
        "Conocimiento de electrónica para la conexión de las diferentes áreas de una rockola como amplificador, ficheros, parlantes, entre otros.",
        "Dominio de instalación de SO, software para bar, modificaciones al SO XP, W7, uso de MiniWindows, modificar la BIOS, entre otros.",
        "Capacidad para identificar problemas de las piezas del ordenador como, placa madre, tarjeta de video, cables HDMI/VGA, pilas, memoria RAM, disco duro."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Proyectos",
  subtitle: "ALGUNOS PROYECTOS QUE REALICE DESDE CERO POR MEDIO DE CURSOS Y TAMBIÉN LOS QUE PARTICIPE",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactame ☎️"),
  subtitle:
    "¿Discutir un proyecto o simplemente saludar? Mi bandeja de entrada está abierta para todos.",
  number: "+51 953739309",
  email_address: "l.azar.hp@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
