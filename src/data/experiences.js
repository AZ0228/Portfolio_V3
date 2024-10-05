// experiences.js

import activeherbImage from '../assets/activeherb.png';

import studycompass1 from '../assets/experiences/studycompass/studycompass1.png';
import studycompass2 from '../assets/experiences/studycompass/studycompass2.png';
import studycompass3 from '../assets/experiences/studycompass/studycompass3.png';
import studycompass4 from '../assets/experiences/studycompass/studycompass4.png';

export const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Activeherb",
    header: "May 2024 - Current",
    content:
      "At Activeherb Technology, I redesigned the FAQ system for both customers and staff, increasing FAQ page visits by 50% and speeding up issue resolution. Additionally, I optimized the home page load time by 60%, creating a custom lightweight framework that improved the user experience.",
    link: {
      url: "https://www.activeherb.com/",
      text: "Activeherb.com",
      image: activeherbImage, // Directly use the imported image
    },
  },
  {
    title: "Founder and Lead Developer",
    company: "Study Compass",
    header: "Dec 2023 - Current",
    content:
        "I founded Study Compass to help RPI students easily find study spaces in real-time. Since launching, the platform has grown to over 200 active users and attracted thousands of unique visits. Leading a team of four developers, I implemented the MERN stack and used JIRA to streamline our workflow, improving collaboration by 30%. User engagement increased by 20% within three months of launch, and the platform continues to thrive as a key resource for the student community.",
    images: [[studycompass1, studycompass2],[studycompass3, studycompass4]],
    imgaesPerRow: 2,
  },
  {
    title: "Third Experience",
    content: "This is the third experience",
    header: "Fall 2025",
  },
];
