import React, { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

const PagesHeader = () => {
  const [name, setName] = useState("");

  const showDropdown = (e: any) => {
    setName(e.target.innerHTML);
  };
  const hideDropdown = (e: any) => {
    setName("");
  };

  return (
    <>
      <div>
        <hr className="line" />
        <ul className="header-lists">
          <li>
            <NavDropdown
              title="Best Sellers"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={name === "Best Sellers" ? true : false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              hello
            </NavDropdown>
          </li>
          <li>
            <NavDropdown
              title="Brands"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={name === "Brands" ? true : false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              hello
            </NavDropdown>
          </li>
          <li>
            <NavDropdown
              title="Deals"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={name === "Deals" ? true : false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              hello
            </NavDropdown>
          </li>
          <li>
            <NavDropdown
              title="Blogs"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={name === "Blogs" ? true : false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              hello
            </NavDropdown>
          </li>
          <li>
            <NavDropdown
              title="Customer Support"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={name === "Customer Support" ? true : false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              hello
            </NavDropdown>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PagesHeader;
