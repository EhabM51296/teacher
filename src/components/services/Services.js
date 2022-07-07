import React from "react";
import Section from "../section/Section";
import Square from "../UI/square/Square";
import classes from "./services.module.css";

const Services = (props) => {
  return (
    <Section
      class="primary"
      title="Services"
      desc="Become Full Stack Developer"
    >
      <div className={`${classes["services"]}`}>
        <div className={`${classes["servicesRow"]} txtCenter txtBlack`}>
          <div className={`relative inlineBlock ${classes["serviceContainer"]}`}>
            <Square />
            <div className="absolute-VHmiddle">
              <h1 className="sectionTitle txtPrimary">HTML</h1>
              <img
                src="teacher/images/html.png"
                alt="html"
                width="90px"
                height="90px"
              />
              <p className="sectionText">The first step to create a website</p>
            </div>
          </div>
          <div className={`relative inlineBlock ${classes["two"]}`}>
            <Square />
            <div className="absolute-VHmiddle">
              <h1 className="sectionTitle txtPrimary">CSS</h1>
              <img
                src="teacher/images/css.png"
                alt="html"
                width="90px"
                height="90px"
              />
              <p className="sectionText">Design and give the your website a perfect view</p>
            </div>
          </div>
        </div>
        <div className={`${classes["servicesRow"]} txtCenter txtBlack`}>
          <div className="relative inlineBlock">
            <Square />
            <div className="absolute-VHmiddle">
              <h1 className="sectionTitle txtPrimary">Javascript</h1>
              <img
                src="teacher/images/js.png"
                alt="html"
                width="90px"
                height="90px"
              />
              <p className="sectionText">Give your clients the best pratice in your website</p>
            </div>
          </div>
          <div className={`relative inlineBlock ${classes["two"]}`}>
            <Square />
            <div className="absolute-VHmiddle">
              <h1 className="sectionTitle txtPrimary">PHP</h1>
              <img
                src="teacher/images/php.png"
                alt="html"
                width="90px"
                height="90px"
              />
              <p className="sectionText">Handle the data entered to your website</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
