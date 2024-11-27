import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto currency dashboard",
    github: "https://github.com",
    demo: "https://dribbble.com/short/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographic in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/short/16580766-Orion-UI-kit-Charter-templates-infographic-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard",
    github: "https://github.com",
    demo: "https://dribbble.com/short/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 4,
    image: IMG4,
    title: "Mainthaining tasks",
    github: "https://github.com",
    demo: "https://dribbble.com/short/16955822-Mainthaining-tasks-and-tracking-progress",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographic in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/short/16541289-Orion-UI-kit-Chart-template-infographic-in-Figma",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographic in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/short/15887665--Orion-UI-kit-Chart-template-infographic-in-Figma",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portgolio_item-image">
                <img src={image} alt="portfolio1" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
