import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = ({ history }) => {
  //useState is a Hook that let's you add React state to function components. 
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    //e.preventDefault is used so that form does not reload on submit
    e.preventDefault();
    if (keyword.trim()) {
      //history .push is used to navigate to the route with the keyword we had a search
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
