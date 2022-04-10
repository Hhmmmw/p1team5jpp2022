import React from "react";

import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export default function SearchBar() {
  return (
    <nav className="search-field">
      <form action="" id="navbarForm">
        <select
          aria-describedby="searchDropdownDescription"
          data-nav-selected="0"
          id="searchDropdownBox"
          name="url"
          tabIndex="0"
          title="Search in"
        >
          <option defaultValue value="aps">
            All Categories
          </option>
          <option value="devices">Devices</option>
          <option value="fashion">Fashion</option>
          <option value="arts-crafts">Arts, Crafts &amp; Sewing</option>
          <option value="automotive">Automotive Parts &amp; Accessories</option>
          <option value="baby">Baby</option>
          <option value="beauty">Beauty &amp; Personal Care</option>
          <option value="stripbooks">Books</option>
          <option value="electronics">Electronics</option>
          <option value="grocery">Grocery &amp; Gourmet Food</option>
          <option value="hpc">Health, Household &amp; Baby Care</option>
          <option value="garden">Home &amp; Garden</option>
          <option value="home">Home Related</option>
          <option value="industrial">Industrial &amp; Scientific</option>
          <option value="mi">Musical Instruments</option>
          <option value="products">Office Products</option>
          <option value="pets">Pet Supplies</option>
          <option value="software">Software</option>
          <option value="sports">Sports</option>
          <option value="home-improvement">Tools &amp; Home Improvement</option>
          <option value="toys">Toys &amp; Games</option>
          <option value="videogames">Video Games</option>
          --{">"}
        </select>
        <input
          type="text"
          className="input"
          placeholder="search"
          id="navbarInput"
        />
        <button type="submit" id="search-Btn">
          <FaSearch /> Search
        </button>
      </form>
    </nav>
  );
}
