

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Neel Bhavsar",
  title: "Hello, I am Neel.",
  subTitle: "An aspiring Software Engineer at IBM. I have experience building backend algorithms, web applications with Django / ReactJS and some other cool libraries and frameworks as a full-stack Engineer.",
  resumeLink:
    "RESUME", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/neelbhavsar99",
  linkedin: "https://www.linkedin.com/in/neelbhavsar/",
  gmail: "neelbhavsar102@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Aspiring technology professional who likes to explore every tech stack",
  skills: [
      "-> Participate in hackathons, competitions to continuosly learn the upcoming tools and frameworks.",
     "-> Interested in Artificial Intelligence algorithms and product management as a techno-commercial candidate.",
    // emoji(
    //   "⚡ Integration of third party services such as AWS "
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
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
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
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
      skillName: "bash",
      fontAwesomeClassname: "fa-solid fa-code"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Toronto Metropolitan University",
      logo: require("./assets/images/torontoMetU.png"),
      subHeader: "Bachelor of Computer Engineering",
      duration: "September 2017 - April 2022",
      desc: "CGPA: 3.65",
      descBullets: [
        "Faculty Involvement: Teaching Assistant for First Year Engineering Design Course, Student Ambassador, Campus Tour Guide, Ontario University Fair Ambassador",
        "Student Groups: Engineering Student Society, Frosh Leader, Ryerson AI,Mentor @ Tri-Mentoring Program"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    }
  ],
  
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "International Business Machines",
      companylogo: require("./assets/images/ibmLogo.jpeg"),
      date: "May 2022 – Present",
      desc: "Working for Watson AIOps - Instana.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Software Developer Intern",
      company: "Bank of Montreal Financial Group",
      companylogo: require("./assets/images/bmoLogo.png"),
      // date: "May 2017 – May 2018",
      desc: "Worked for the Data and AI team."
    },
    {
      role: "Software Engineer Intern",
      company: "Advanced Micro Devices",
      companylogo: require("./assets/images/amdLogo.png"),
      // date: "Ma 2015 – Sep 2015",
      desc: "Worked for the Software Program Management Office."
    },
    {
      role: "Software Developer Intern",
      company: "BMO Capital Markets",
      companylogo: require("./assets/images/bmoCapitalMarketsLogo.png"),
      // date: "Jan 2015 – Sep 2015",
      desc: "Worked on the post-trading application tool."
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
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
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Cloud Practitioner Foundational",
      subtitle:
        "Links to Certificate",
      image: require("./assets/images/certs/AWS-Certified-Cloud-Practitioner.png"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "AWS Cloud Practitioner Foundational",
          url: "https://www.credly.com/badges/55f6b9d4-cd57-4d41-8b45-56640ccfac0d/public_url"
        },
      ]
    },
    {
      title: "IBM AI Associate Learning Certification",
      subtitle:
        "Links to Certificate",
      image: require("./assets/images/certs/AI-Associate-for-Product-Managers.png"),
      imageAlt: "IBM AI Cert",
      footerLink: [
        {
          name: "AI Associate - All IBMers",
          url: "https://www.credly.com/badges/7de7953d-1223-4f15-afc5-47658eaab013/public_url"
        },
      ]
    },
    {
      title: "IBM AI Associate Learning Certification",
      subtitle:
        "Links to Certificate",
      image: require("./assets/images/certs/AI-Associate-for-Product-Managers.png"),
      imageAlt: "IBM AI Cert",
      footerLink: [
        {
          name: "AI Associate Product Manager",
          url: "https://www.credly.com/badges/366d5121-221d-4412-a3e7-c04995bfbc02/public_url"
        }
      ]
    },
    {
      title: "Ryerson Eng Competition - 3rd Place",
      subtitle: "Implemented Google chatbot API which responds to users based on their input reflecting on the theme, help reduce suicidal rates with an interactive web application.",
      image: require("./assets/images/certs/RyersonEngComp.png"),
      imageAlt: "Certification Logo",
      footerLink: [
        {name: "Hackathon", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Deep Learning for Computer Vision by NVIDIA",
      subtitle: "Completed Certifcation from NVIDIA SMIT for for making a deployable trained machine learning model in Python using NVIDIA's DIGITS platform.",
      image: require("./assets/images/certs/NEELB_NVIDIA_CERT.png"),
      imageAlt: "Certification Logo",
      footerLink: [
        {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Google Waterloo Mock Case Competition - 3rd Place",
      subtitle:
        "Pitched a physical device with three infrared sensor ports to help impaired students navigate throughout the campus integrating Campus mapping systems.",
      image: require("./assets/images/certs/GWCaseComp.png"),
      imageAlt: "Case Comp Group Photo",
      footerLink: [
        { name: "Case Competition" }
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

 const blogSection = {
   title: "Blogs",
   subtitle:
     "I like to write and share my experiences with what I have learnt.",
   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
   blogs: [
     {
       url: "https://medium.com/@neelbhavsar102/writing-an-effective-resume-for-software-engineers-e4e3663533a5",
       title: "",
       description:
         "A simple articule on resume writing for Software Engineering related roles."
     }
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "neelbhavsar102@gmail.com"
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
