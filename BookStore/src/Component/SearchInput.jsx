import React from "react";
import "../Component/SearchInput.css";
import { InputGroup, FormControl } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"; // Search icon
import continuebtn from "../assets/continuebtn.png";

const SearchInput = () => {
  return (
    <InputGroup className="custom-input">
      {/* Search Icon Inside Input */}
      <InputGroup.Text>
        <Search className="search-icon" />
      </InputGroup.Text>
      
      {/* Input Field */}
      <FormControl placeholder="Search for a location..." />
    <img src={continuebtn} alt="" className="continue-btn" />
      {/* Continue Button Inside Input */}
      
    </InputGroup>
  );
};

export default SearchInput;
