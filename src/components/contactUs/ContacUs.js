import React from "react";
import Section from "../section/Section";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import classes from "./contactUs.module.css";

const ContactUs = (props) => {
  const sendMessage = () => {}
  return (
    <Section class="white" title="Want to register?" desc="Contact Us">
      <div>
        <form className={classes["form"]}>
        <Input text="Name" type="text" />
        <Input text="Email" type="email" />
        <Input text="Phone number" type="text" />
        <Button text="Send Message" class="primary" type="button" onClick={sendMessage} />
        </form>
      </div>
    </Section>
  );
};

export default ContactUs;
