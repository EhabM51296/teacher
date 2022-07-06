import React from "react";
import Section from "../section/Section";
import classes from "./services.module.css";

const Services = (props) => {
  return (
    <Section class="primary" title="Services" desc="Become Full Stack Developer">
      <div className={`${classes["services"]}`}>
        <div className={classes["servicesRow"]}>
          <div className={classes["square"]}>
            <div>
              <img src="images/html.png" alt="html" />
              <h1>HTML</h1>
              <p>The first step to create a website</p>
            </div>
          </div>
          <div className={`${classes["square"]} ${classes["two"]}`}>
          <div>
              <h1>CSS</h1>
              <p>Design and give the your website a perfect view</p>
            </div>
          </div>
        </div>
        <div className={classes["servicesRow"]}>
          <div className={classes["square"]}>
          <div>
              <h1>Javascript</h1>
              <p>Give your clients the best pratice in your website</p>
            </div>
          </div>
          <div className={`${classes["square"]} ${classes["two"]}`}>
          <div>
              <h1>PHP</h1>
              <p>Handle the data entered to your website</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
