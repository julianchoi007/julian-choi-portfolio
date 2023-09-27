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
  username: "Julian Choi",
  title: "Hey everyone, I'm Julian",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🖥️ with experience building Web applications using JavaScript / Typescript / Reactjs / Nodejs and building backend apis using java springboot and python."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/julianchoi007",
  linkedin: "https://www.linkedin.com/in/julianchoi/",
  gmail: "choijulian007@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I'm Great At",
  subTitle:
    "Curious Full Stack Developer Who Loves Indulging Themselves In New Technologies",
  skills: [
    emoji(
      "⚡ Developing highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Creating  full-stack end-to-end products based on client specifications "
    ),
    emoji(
      "⚡ Discovering and familiarising myself with new emerging technologies"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Waterloo",
      logo: require("./assets/images/uwaterloo-logo.png"),
      subHeader: "Candidate for Bachelor of Computer Science Coop, Honours",
      duration: "2021 - present",
      desc: "Completed 4 academic terms with a 3.9 GPA",
      descBullets: [
        "Awarded The University of Waterloo President’s Scholarship of Distinction"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer Coop",
      company: "Ford Pro Tech",
      companylogo: require("./assets/images/fordproLogo.jpg"),
      date: "September 2023 – Present",
      desc: "Designed and optimized RESTful APIs to facilitate seamless connection between FordPro clients and data",
      descBullets: [
        "Implemented numerous calls to FordPro clients using Java Springboot and GraphQL",
        "Coordinated with cross-functional teams to develop, integrate, and maintain robust APIs"
      ]
    },
    {
      role: "Front-End Developer Coop",
      company: "Ford Pro Tech",
      companylogo: require("./assets/images/fordproLogo.jpg"),
      date: "January 2023 – April 2023",
      desc: "Expanded and maintained the library of front-end components used in all FordPro company pages.",
      descBullets: [
        "Collaborated with senior engineers using GitHub and Typescript to create React components used by numerous different teams and 100+ of employees at FordPro",
        "Created unit tests using Jest to increase testing coverage by up to 100% per component"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "TD Bank Group",
      companylogo: require("./assets/images/tdLogo.png"),
      date: "June 2022 – August 2022",
      desc: "Developed full-stack portal tools for the Platforms and Technology Division at TD.",
      descBullets: [
        "Built a MERN-based resource tracker using a RESTful API, with a Redis Database to store data",
        "Utilised unit tests, version control, Git, Bitbucket and the Agile methodology with TD senior engineers"
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
  title: emoji("Cool Events I'm Proud To Have Been A Part Of 😎"),
  subtitle: "Hackathons, programs and clubs",
  projects: [
    {
      image: require("./assets/images/electriummobilityLogo.png"),
      projectName: "Electrium Mobility",
      projectDesc:
        "Developed an automated reimbursement form using google scripts and javascript",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Hack The North Participant",
      projectDesc:
        "Created a full stack web application to help regulate a healthy diet",
      image: require("./assets/images/htnLogo.png"),
      footerLink: []
    },
    {
      projectName: "Google CSSI Alumni",
      projectDesc:
        "Collaborated with Senior Google Software Engineers to create web applications and video games",
      image: require("./assets/images/googlecssiLogo.jpg"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("More Fun Stuff🏆"),
  subtitle: "More Clubs And Extra Curriculars I enjoyed",

  achievementsCards: [
    {
      title: "Shad Fellow",
      subtitle:
        "Connected with other university students to create a prototype of a cardiovascular system in space.",
      image: require("./assets/images/shadLogo.png"),
      imageAlt: "Shad Logo",
      footerLink: [
        //   {
        //     name: "View Google Assistant Action",
        //     url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        //   }
      ]
    },

    {
      title: "First Robotics Member",
      subtitle: "Constructed Robots to compete in First Robotic competitions",
      image: require("./assets/images/firstroboLogo.png"),
      imageAlt: "First Robotics Logo",
      footerLink: []
    },
    {
      title: "WildCard Startup Tech Lead",
      subtitle:
        "Tech Lead at the Junior Achievement Central Ontario company program startup WildCard",
      image: require("./assets/images/jacoLogo.jpeg"),
      imageAlt: "jaco Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "choijulian007@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
