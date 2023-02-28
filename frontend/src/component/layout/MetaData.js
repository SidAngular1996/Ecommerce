import React from "react";
import Helmet from "react-helmet";

const MetaData = ({ title }) => {
  return (
    //helmet is used to change tab name 
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaData;
