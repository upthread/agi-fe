import React, { useState } from "react";
import { MdPhone } from "react-icons/md";
import {
  Body,
  Splash,
  Banner,
  Feature,
  Portfolio,
  CTA
  // SplashImg
} from "./styles";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import data from "./data";
import { Link } from "react-router-dom";
// need a fixed sidebar so contact

const Home = props => {
  return (
    <Body>
      <Splash>
        <h1 id="Name">AGI</h1>
        <p>A broker You can Trust</p>
        <footer>
          <a href="#Portfolio" className="button style2 ">
            Get Started
          </a>
        </footer>
        <div className="line"></div>
      </Splash>
      {/* <Banner>
        <h3>AG international</h3>
        <p>Web Enabled Real Estate Brokerage</p>
      </Banner>
      <Feature></Feature> */}
      <Portfolio id="Portfolio">
        <Container>
          <Row>
            <Col className="assure" sm="12" xs="12" md={{ size: 6, offset: 3 }}>
              <h2 className="sub-head">
                What Makes Us <br />
                Different?
              </h2>
              <p>
                We offer all AGI agents great value from their brokerage, whilst
                supplying an amazing amount of training and support at the same
                time!
              </p>
            </Col>
          </Row>
          <Row>
            {data.map(item => (
              <Col md="4" sm="6" xs="12">
                <Card>
                  <div className="imgDiv">
                    <CardImg
                      top
                      width="100%"
                      src={item.image}
                      alt="Card image cap"
                    />
                  </div>
                  <CardBody>
                    <CardTitle>
                      {" "}
                      <h4>{item.title}</h4>
                    </CardTitle>
                    <CardText>{item.content}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="join-sec">
            <Row>
              <div className="col-md-9 col-12">
                <h2>Join AGI today</h2>
                <h4>
                  If you want to grow your real estate career into a business.
                </h4>
              </div>
              <div className="col-md-3 col-12">
                <Link to="/multi" className="join-btn">
                  Join AGI
                </Link>
                <div className="clearfix"></div>
              </div>
            </Row>
          </div>
        </Container>
      </Portfolio>
      <CTA>
        <Row>
          <Col xs="12" md="12">
            <h1>
              <strong>AGI </strong>
            </h1>
            <h5>Visit our Offices @</h5>
          </Col>
        </Row>
        <Row>
          <Col md="3" sm="6" xs="12" className="address">
            <h5>
              <strong>London - UK</strong>
            </h5>
            <p>
              Kemp House 152 - 160<br></br> City Road, Greater London<br></br>{" "}
              EC1V 2NX
            </p>

            <p>
              <a href="tel:+44 7501 430 694">
                <span>
                  <MdPhone />
                </span>
                +44 7501 430 694
              </a>
            </p>
          </Col>
          <Col md="3" sm="6" xs="12" className="address">
            <h5>
              <strong>Miami - USA</strong>
            </h5>

            <p>
              333 SE 2nd Ave <br></br>
              Suite 2000, Miami, FL<br></br>
              33131
            </p>

            <p>
              <a href="tel:+1 (305) 342 1211">
                <span>
                  <MdPhone />
                </span>
                +1 (305) 342 1211
              </a>
            </p>
          </Col>
          <Col md="3" sm="6" xs="12" className="address">
            <h5>
              <strong>Doha - Middle East</strong>
            </h5>
            <p>
              412 JW Marriot Marquis<br></br>
              West Bay, Doha, Qatar
            </p>

            <p>
              <a href="tel:+974 3356-3680">
                <span>
                  <MdPhone />
                </span>
                +974 3356-3680
              </a>
            </p>
          </Col>
          <Col md="3" sm="6" xs="12">
            <h5>
              <strong>Phuket - Asia</strong>
            </h5>
            <p class="minh">
              Marina Business Centre<br></br>
              Mueang, Phuket, Thailand<br></br>
              83000
            </p>

            <p>
              <a href="tel:+66 87-955-8855">
                <span>
                  <MdPhone />
                </span>
                +66 87-955-8855
              </a>
            </p>
          </Col>
        </Row>
        <Row className="footer">
          <Col sm="6" md="6" xs="12">
            <p>© 2019 AGI America All Rights Reserved.</p>
          </Col>
          <Col sm="6" md="6" xs="12">
            <Row>
              <Col md="4" s="4" xs="4">
                <a href="#"> Terms</a>
              </Col>
              <Col md="4" s="4" xs="4">
                <a href="#">Privacy</a>
              </Col>
              <Col md="4" s="4" xs="4">
                <a href="#">Disclaimer</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </CTA>
    </Body>
  );
};

export default Home;
