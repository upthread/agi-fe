import React, { useState } from "react";

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
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import data from "./data";
// need a fixed sidebar so contact

const Home = props => {
  const { buttonLabel, className } = props;

  //   const [modal, setModal] = useState(false);

  //   const toggle = (item) => {
  //     console.log(item.title)
  //     setModal(!modal);}
  return (
    <Body>
      <Splash>
        <h1 id="Name">AGI</h1>
        <p>A broker You can Trust</p>
        <footer>
          <a href="#banner" class="button style2 scrolly-middle">
            Get Started
          </a>
        </footer>
        <div className="line"></div>
      </Splash>
      <Banner>
        <h3>AG international</h3>
        <p>Web Enabled Real Estate Brokerage</p>
      </Banner>
      <Feature></Feature>
      <Portfolio>
        <Container>
          
            <Row>
              <Col className="assure" sm="12" xs="12" md={{ size: 6, offset: 3 }}>
              <h2 class="sub-head">
                What Makes Us <br />
                Different?
              </h2>
              <p>We offer all AGI agents great value from their
                brokerage, whilst supplying an amazing amount of training and
                support at the same time!</p>
              </Col>
            </Row>
          <Row>
            {data.map((item, index) => (
              <Col sm="3" xs="12">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={item.image}
                    alt="Card image cap"
                  />

                  <CardBody>
                    <CardTitle>
                      {" "}
                      <h4>{item.title}</h4>
                    </CardTitle>
                    <CardText>{item.content}</CardText>
                    {/* <Button onClick={toggle(item.title)}>    Read More</Button> */}
                    {/* <Modal
                      isOpen={modal}
                      backdrop={index>3? true:false}
                      toggle={toggle}
                      className={className}
                    >
                        {/* {console.log(item.title)} */}
                    {/* <ModalHeader toggle={toggle}>{item.title}</ModalHeader>
                      <ModalBody>
                       {item.content}
                      </ModalBody>
                      <ModalFooter></ModalFooter>
                    </Modal> */}
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
      <div className="join-sec">
       <Row>
       <div class="col-md-9 col-12">
              <h2>Join AGI today</h2>
              <h4>
                If you want to grow your real estate career into a business.
              </h4>
            </div>
            <div class="col-md-3 col-12">
              <a href="join-agi.html" class="join-btn">Join AGI</a>
              <div class="clearfix"></div>
            </div>
       </Row>
       </div>
        </Container>
      </Portfolio>
      <CTA></CTA>
    </Body>
  );
};

export default Home;
