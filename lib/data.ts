import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import passwordgeneratorImg from "@/public/passwordgenerator.png";
import weatherdashboardImg from "@/public/weatherdashboard.png";
import covid19Img from "@/public/covid19.png";
import firstportfolioImg from "@/public/firstportfolio.png";
import codequizImg from "@/public/codequiz.png";
import selectnutritionImg from "@/public/selectnutrition.png";
import nailImg from "@/public/nail.png";


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experienceData = [
    {
        title: "UC San diego Coding Bootcamp",
        location: "Zoom",
        description: "I obtained a certificate from this course and learned Front-end Web development languages in 6 months while attending community college.",
        icon: React.createElement(LuGraduationCap),
        date: '11/30/2021 - 05/24/2022'
    },

] as const;

export const projectsData = [ 
    {
        title: "Password Generator",
        description: "Generates a random passwords based on criteria that a user has selected from prompts.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: passwordgeneratorImg,
    },
    {
        title: "Weather Dasboard",
        description: "A Weather 5-day forcasting site based on city you search",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: weatherdashboardImg,
    },
    {
        title: "Covid-19 Travel Restrictions Tracker",
        description: "Can track some important covid-19 travel restrictions based on countries data from an API",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: covid19Img,
    },
    {
        title: "First Portfolio",
        description: "This is the first basic portfolio I made when learning how to code, after 2 years I decided to revamp my online portfolio and create a more modern and showcase my improved coding abilites",
        tags: ["HTML", "CSS"],
        imageUrl: firstportfolioImg,
    },
    {
        title: "Code Quiz",
        description: "Work in progress",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: codequizImg,
    },
    {
        title: "SELECT NUTRITION",
        description: "Mock up website for a store owner to showcase current products",
        tags: ["Node.js", "Handlebars.js", "Express.js", "MySQL",  "CSS", "JavaScript"],
        imageUrl: selectnutritionImg,
    },
    {
        title: "Nail Lounge of La Jolla",
        description: "A full stack application that provided a welcoming and user-friendly site that enhances the over experience of booking the users next nail or waxing service with ease.",
        tags: ["HTML", "CSS", "JavaScript", "MongoDB", "Mongoose ODM", "React", "GraphQL", "Node.js", "Express.js"],
        imageUrl: nailImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Handlebars.js",
    "Express.js",
    "Inquirer",
    "MySQL",
    "GraphQL",
    "MongoDB",
    "Mongoose ODM",
    "React",
] as const;
