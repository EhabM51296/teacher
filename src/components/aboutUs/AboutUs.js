import React from "react";
import Section from "../section/Section";
import MemberCard from "../memberCard/MemberCard";
import classes from "./AboutUs.module.css";

const AboutUs = (props) => {
  const team = [
    {
      name: "Ehab Maatouk",
      prof: "Freelancer Web Developer",
      deg: "Holding bachelor Degree from lebanese univesity in business computer",
      img: "teacher/images/ehab.png",

    },
    {
      name: "Mohamad Makdah",
      prof: "Freelancer Web Developer",
      deg: "Holding bachelor Degree from american university of beirut(AUB) in computer science",
      img: "teacher/images/mak.jpg"
    },
  ];
  return (
    <Section class="white" title="About Us" desc="Professional Web Developers">
      <div className={`grid ${classes["teamSection"]}`}>
        <MemberCard
          name={team[0].name}
          prof={team[0].prof}
          deg={team[0].deg}
          img={team[0].img}
        />
        <MemberCard
          name={team[1].name}
          prof={team[1].prof}
          deg={team[1].deg}
          img={team[1].img}
        />
      </div>
    </Section>
  );
};

export default AboutUs;
