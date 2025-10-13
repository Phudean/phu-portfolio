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
  username: "Ngo Xuan Phu",
  title: "Chào mọi người, mình là Phú",
  subTitle: emoji(
    "Sinh viên Khoa Học máy tính 🚀 Mình có đam mê với JavaScript / Reactjs / Nodejs / Python ngoài ra còn yêu thích Minecraft & thiết kể UI."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WKfo5V2M9_v5sJNeEGxQPeYjErAh5f7k/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Phudean",
  linkedin: "https://www.linkedin.com/in/phu-ngo-xuan-612836305",
  gmail: "ngoxuanphunan@gmail.com",
  gitlab: "https://gitlab.com/Phudean",
  facebook: "https://www.facebook.com/phu.dean.2024",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "<Mình đang làm gì ?>",
  subTitle: "Mình chỉ là sinh viên mới bắt đầu hành trình liên quan tới IT ^^",
  skills: [
    emoji("⚡ Thiết kế UI/UX cho server Minecraft"),
    emoji("⚡ Lập trình bot Discord đơn giản (Node.js, Python)"),
    emoji("⚡ Xây dựng website cá nhân bằng React & GitHub Pages")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
      schoolName: "Đại học Hutech",
      logo: require("./assets/images/hutech.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2025 - present",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming skills", //Insert stack or technology you have experience in
      progressPercentage: "20%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Soft Skills",
      progressPercentage: "80%"
    },
    {
      Stack: "Problem solving & logic",
      progressPercentage: "80%"
    },
    {
      Stack: "Tools & Technologies",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  title: emoji("Thành tựu và chứng chỉ 🏆 "),
  subtitle: "Những thành tựu mà mình đã đạt được !",

  achievementsCards: [
    {
      title: "IELTS 7.0",
      subtitle:
        "Mình đạt ielts band 7.0 với Listening 8.0, Reading 7.5, Speaking 6.5 và Writing 6.0",
      image: require("./assets/images/ielts.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "XEM CHỨNG CHỈ",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "Engaging Stakeholders for Success",
      subtitle: "",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "XEM CHỨNG CHỈ",
          url: "https://www.credly.com/badges/0d0b8b1a-ed4b-4792-8fed-e8b174827ae0/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: false, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://telegra.ph/MY-MINI-BLOG-10-13-2",
      title: "Giới thiệu",
      description: "Một chút giới thiệu về mình"
    },
    {
      url: "https://telegra.ph/Cách-mình-học-lập-trình-bot-Discord-10-13",
      title: "Cách mình học lập trình bot Discord",
      description:
        "Hành trình tự mò học Python và Node.js để làm bot nhỏ cho discord."
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Hãy cứ tự nhiên tải về, resume của mình ở đây!",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Liên hệ ☎️"),
  subtitle:
    "Muốn thảo luận dự án nào đó hay chỉ là muốn gửi lời chào? Inbox của mình luôn chào đón mọi người.",
  number: "+84-0937830702",
  email_address: "ngoxuanphunan@gmail.com"
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
  isHireable,
  resumeSection
};
