import React from "react";
import Section from "../section/Section";
import classes from "./AboutUs.module.css";

const AboutUs = (props) => {
  return (
    <Section class="white" title="About Us" desc="Professional Web Developers">
      <div className={`grid ${classes["teamSection"]}`}>
        <div className={`Width-Fill ${classes["teamMember"]}`}>
          <div className={classes["teamPic"]}>
            <img
              src="images/ehab.png"
              alt="ehab"
            />
          </div>
          <div className={` ${classes["teamMemberInfo"]}`}>
            <p>Ehab Maatouk</p>
            <p>Freelancer Web Developer</p>
            <p>Holding bachelor Degree from lebanese univesity in business computer</p>
          </div>
        </div>
        <div className={`Width-Fill ${classes["teamMember"]}`}>
          <div className={classes["teamPic"]}>
            <img
              src="images/mak.jpg"
              alt="mohamad makdah"
            />
          </div>
          <div className={` ${classes["teamMemberInfo"]}`}>
            <p>Mohamad Makdah</p>
            <p>Freelancer Web Developer</p>
            <p>Holding bachelor Degree from american university of beirut(AUB)
              in computer science </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
