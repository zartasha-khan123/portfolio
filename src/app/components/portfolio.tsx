"use client"
import "./portfolio.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import figma from '@/app/public/assets/public/figmapic.png'
import html from "@/app/public/assets/public/html.png";
import ecommerce from "@/app/public/assets/public/ecommercepic.png";
import personal from "@/app/public/assets/public/personalprofilepic.png";

// Define the Project type
type Project = {
  images: StaticImageData[]; // Assuming you're using StaticImageData for Next.js images
  title: string;
  description: string;
  link: string;
};

// Arrays of images for each project
const projects: Project[] = [
  {
    images: [html, figma],
    title: "Website Designer",
    description:
      "I am a website designer focused on creating clean, modern, and responsive designs that provide a seamless user experience on any device.",
    link: "https://vercel.com/zartash-imrans-projects/final-html-css-website",
  },
  {
    images: [ecommerce, figma],
    title: "ecommerce Website",
    description:
      "An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.",
    link: "https://vercel.com/zartash-imrans-projects/website_zartashimran",
  },
  {
    images: [figma, personal],
    title: "Figma Website",
    description:
      "My Figma website highlights my work as a web developer, featuring responsive and user-friendly websites.",
    link: "https://www.figma.com/design/VBeDWlERr7O8Xzuha1mw0D/zartasha-first-website",
  },
  {
    images: [personal, ecommerce],
    title: "personal",
    description:
      "A portfolio website is a curated, online space that showcases your best work. It's one of the most practical and memorable ways to share your work with press, potential collaborators or employers.",
    link: "http://127.0.0.1:5501/index1.html",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="main-text">
        <span>I am ready to assist you with anything you need.</span>
        <h3>My Latest Projects</h3>
      </div>
      <div className="logo1">
        <ul>
          <li>FIGMA</li>
          <li>ECOMMERCE-WEB</li>
          <li>PESONAL-PORTFOLIO</li>
          <li>HTML-CSS-TYPESCRIPT</li>
        </ul>
      </div>
      <div className="portfolio-gallery">
        {projects.map((project, index) => (
          <ProjectBox key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectBox({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(0);

  // Cycle images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % project.images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [project.images.length]);

  return (
    <div className="port-box">
      <div className="port-img">
        <Image
          src={project.images[currentImage]}
          alt={project.title}
          width={500}
          height={400}
        />
      </div>
      <div className="port-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link href={project.link}>
          <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;