import React from "react";
import { Container , Row, Col } from "reactstrap";
import {NavLink} from "react-router-dom"
import './index.scss';

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row >
          <Col md ={11}>
            <a
              className="header__link header__title"
              href="https://www.facebook.com/TanTai.TAE.1847/"
              target="_blank"
              rel="noopener noreferrer"
            >
             TanTai
            </a>
           &nbsp; 
            <span><a className="header__link header__title" href="https://reactjs.org/" target = "_blank" rel="noopener noreferrer">Leanning React</a></span>
          </Col>

          <Col  md ={1}>
            <NavLink
              exact
              className="header__link"
              to="/sign-in"
              activeClassName="header__link--active"
            >
              Sign In
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
