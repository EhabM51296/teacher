import React,{useState} from "react";
import Button from "../UI/button/Button";
import HeaderLinks from "./HeaderLinks";
import classes from "./header.module.css";

const Header = (props) => {
  const [getNavigator,setNavigator] = useState("none");
const showNav = () => {
  if(getNavigator === "none")
  {
    setNavigator("block");
  }
  else
  {
    setNavigator("none");
  }
}
  return (
    <header className={`${classes["header"]}`}>
      <div className="flex Width-95 m-auto">
        <div className={`${classes["headerLogo"]} sectionTitle`}>
          Full Stack Developer
        </div>
        <div className={classes["navigator"]}>
          <Button class="primary" type="button" text="Open" onClick={showNav} />
        </div>
        <HeaderLinks visible={getNavigator} />
      </div>
    </header>
  );
};

export default Header;
