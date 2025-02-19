import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";
import logo from "../../assets/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SocialMedia } from "../../components/socialMedia/SocialMedia";
import { Link } from "react-router-dom";
import { ButtonType, ExternalLinkButton } from "../../components";
import { Audience } from "../Audience";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  useEffect(() => {
    // Animation
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation should trigger every time the element scrolls into view
      mirror: false, // Animation should not mirror while scrolling past
    });
  }, []);

  return (
    <div data-aos="fade-down">
      {" "}
      {/* Applying AOS fade-down animation to the entire div */}
      <div className="icons_section d-flex align-items-end justify-content-end pt-4 pb-3 container-fluid gap-3 iconnav">
        <SocialMedia />
      </div>
      <div className="">
        {["lg"].map(
          (
            expand, // Map over an array to create a Navbar component
          ) => (
            <Navbar key={expand} expand={expand} className="pt-3">
              {" "}
              {/* Navbar with expand prop */}
              <Container fluid className="navbar">
                {" "}
                {/* Fluid container for Navbar */}
                <Navbar.Brand href="#">
                  {" "}
                  <Link to={"/"}>
                    <img className="logo" src={logo} alt="Logo" />{" "}
                  </Link>
                  {/* Logo image */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> {/* Toggle button for collapsing Navbar */}
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start bg"
                  className="d-none d-lg-block"
                >
                  {/* Offcanvas component for Navbar menu */}
                  <Offcanvas.Header closeButton>
                    {" "}
                    {/* Header with close button */}
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      <Navbar.Brand href="#">
                        {" "}
                        <img className="logo" src={logo} alt="Logo" /> {/* Logo image */}
                      </Navbar.Brand>
                    </Offcanvas.Title>
                  </Offcanvas.Header>

                  <Offcanvas.Body>
                    {" "}
                    <Nav className="justify-content-end align-items-lg-center text-white gap-md-5 gap-3 flex-grow-1">
                      <a href="https://blog.open-source-economy.com/" target="_blank" rel="noopener noreferrer">
                        Blog
                      </a>
                      {/*<Nav.Link href="">MISSION</Nav.Link>*/}
                      {/*<Nav.Link href="" className="me-md-4">*/}
                      {/*  JOBS*/}
                      {/*</Nav.Link>{" "}*/}

                      <ExternalLinkButton
                        href="/white-paper"
                        buttonProps={{
                          type: ButtonType.SECONDARY,
                          audience: Audience.ALL,
                          holder: "WHITE PAPER",
                        }}
                      />
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ),
        )}
      </div>
    </div>
  );
}
