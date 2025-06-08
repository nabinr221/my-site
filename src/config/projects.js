import ecommerce from "../assets/ecommerce.svg";
import reciepe from "../assets/reciepe.svg";
import privateImg from "../assets/private.svg";

export const projects = [
  {
    id: 1,
    name: "Private Projects",
    description:
      "These are internal company projects focused on streamlining operations, enhancing productivity, and solving domain-specific challenges. Due to confidentiality agreements, detailed information and source code are not publicly available.",
    image: privateImg,
    techStack: ["React", "Redux", "Node", "Express", "MongoDB", "Tailwind"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 2,
    name: "Recipe App",
    description:
      "The Recipe App simplifies the cooking experience by allowing users to create, manage, and organize recipes with ease. Users can input ingredients, step-by-step instructions, and categorize recipes for quick access. The app is designed with a clean interface and optimized for seamless recipe management—without including shopping or delivery features.",
    image: reciepe,
    techStack: ["React", "Redux", "Node", "Express", "MongoDB", "Tailwind"],
    liveUrl: "/",
    githubUrl: "/",
  },
  {
    id: 3,
    name: "E-commerce Site",
    description:
      "A full-featured e-commerce platform where users can explore products, view detailed listings, and make secure online purchases. Features include user account creation, order tracking, personalized recommendations, and support for promotional discounts. The site is built with scalability and responsiveness in mind to deliver a smooth shopping experience across all devices.",
    image: ecommerce,
    techStack: ["React", "Redux", "Node", "Express", "MongoDB", "Tailwind"],
    liveUrl: "/",
    githubUrl: "/",
  },
];
