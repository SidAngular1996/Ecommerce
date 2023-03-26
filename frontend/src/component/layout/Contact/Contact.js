import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="sid17tiwari@gmail.com">
        <Button>Contact: sid17tiwari@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
