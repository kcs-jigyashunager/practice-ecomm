import React, { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';

const PagesHeader = () => {
  const [name, setName] = useState("");

  const showDropdown = (e: any) => {
    setName(e.target.innerHTML);
  };
  const hideDropdown = (e: any) => {
    setName("");
  };


  const [showCurrent, setShowCurrent] = useState<string>("sports-header-name");
  const [defaultValue, setDefaultValue] = useState<boolean>(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    var listItemSports = document.getElementById("sports-header-name");
    var listItemHealth = document.getElementById("health-header-name");
    var listItemFitness = document.getElementById("fitness-header-name");
    var listItemWellness = document.getElementById("wellness-header-name");

    listItemSports?.addEventListener("mouseover", function () {
      setShowCurrent("listItemSports");
      setDefaultValue(false);
    });

    listItemHealth?.addEventListener("mouseover", function () {
      setShowCurrent("listItemVitamins");
      setDefaultValue(false);
    });

    listItemFitness?.addEventListener("mouseover", function () {
      setShowCurrent("listItemHerbs");
      setDefaultValue(false);
    });

    listItemWellness?.addEventListener("mouseover", function () {
      setShowCurrent("listItemHealth");
      setDefaultValue(false);
    });
    console.log(showCurrent)

  }, [showCurrent])

  const handleItemMouseEnter = (eventKey: any) => {
    setHoveredItem(eventKey);
    console.log(hoveredItem)

  };


  return (
    <>
      <div>
        <hr className="line" />
        <ul className="header-lists">
          <li className="header-list-mains">
            <div className="best-sellers-div">
              <NavDropdown
                title="Best Sellers"
                id="collasible-nav-dropdown"
                className="search-dropdown"
                show={name === "Best Sellers" ? true : false}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <div className="dropdown-items">
                <Dropdown.Item
                  eventKey="1"
                  href=""
                  onMouseEnter={() => handleItemMouseEnter('1')}
                >
                  Sport Nutrition
                  <ArrowForwardIosIcon className="arrow-span" width={60} height={60} />
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="1"
                  onMouseEnter={() => handleItemMouseEnter('1')}
                >
                  Fitness
                  <ArrowForwardIosIcon className="arrow-span" width={60} height={60} />
                </Dropdown.Item >
                <Dropdown.Item
                  eventKey="1"
                  onMouseEnter={() => handleItemMouseEnter('1')}
                >
                  Sport Nutrition
                  <ArrowForwardIosIcon className="arrow-span" width={60} height={60} />
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="1"
                  onMouseEnter={() => handleItemMouseEnter('1')}
                >
                  Wellness                
                  <ArrowForwardIosIcon className="arrow-span" width={60} height={60} />
                </Dropdown.Item>
                </div>
              </NavDropdown>
            </div>
          </li>
          <li className="header-list-mains">
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
          <li className="header-list-mains">
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
          <li className="header-list-mains">
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
          <li className="header-list-mains">
            <NavDropdown
              title="Gift Card"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={name === "Gift Card" ? true : false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              hello
            </NavDropdown>
          </li>
          <li className="header-list-mains">
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
          <li className="header-list-mains">
            <NavDropdown
              title="Store Locator"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={name === "Store Locator" ? true : false}
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
