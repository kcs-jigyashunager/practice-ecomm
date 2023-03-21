import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useEffect, forwardRef, Fragment } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function CollapsibleExample() {
  // const [name, setName] = useState("");

  // const showDropdown = (e: any) => {
  //   setName(e.target.innerHTML);
  // };
  // const hideDropdown = (e: any) => {
  //   setName("");
  // };
  const [show, setShow] = useState(false);
  const showDropdown = (e:any)=>{
      setShow(!show);
  }
  const hideDropdown = (e:any) => {
      setShow(false);
  }
  return (
    <Navbar collapseOnSelect className="navbar" expand="lg">
      <Container>
        <Image
          alt="nutritrix"
          className="logo"
          src="/logo.svg"
          width={150}
          height={200}
          priority
        />
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div className="search-bg">
        <NavDropdown title="SHOP BY CATGEORY" 
            id="collasible-nav-dropdown" 
            className="search-dropdown"
            show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
            >
              hello
        </NavDropdown>
        <span><ArrowForwardIosIcon/></span>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Collapse>
            <FormGroup>
              <FormControl className="search-input" type="text" placeholder="Search products..." />

            </FormGroup>
            <span className="search-icon" style={{ top: "5px" }}>
                  <SearchIcon/>
            </span>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
