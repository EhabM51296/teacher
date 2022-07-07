import React from "react";
import classes from "./memberCard.module.css";

const MemberCard = (props) => {
  return (
        <div className={`Width-Fill ${classes["teamMember"]}`}>
          <div className={classes["teamPic"]}>
            <img
              src={props.img}
              alt={props.name}
            />
          </div>
          <div className={`sectionText ${classes["teamMemberInfo"]}`}>
            <p>{props.name}</p>
            <p>{props.prof}</p>
            <p>{props.deg}</p>
          </div>
        </div>
  );
};

export default MemberCard;
