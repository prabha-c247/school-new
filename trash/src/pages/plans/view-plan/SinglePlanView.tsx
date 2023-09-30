import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//css
import styles from "./SinglePlanView.module.scss";
import Sidebar from "../../../components/sidebar/Sidebar";

const SinglePlanView = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="main position-relative">
        <Row>          
          <Col sm={2} bg="light" className="d-none d-md-block col-auto">
            <Sidebar />
          </Col>
          <Col sm={10} id="content" bg="dark"  className="main">
            <div style={{ width: "100%", margin: "auto", paddingTop: "1%" }}>
            <div className="d-table" style={{ width: "100%", height: "100vh" }}>
      <Container>
        <Row className="m-4 ">
          <Col md={6} className="text">
            Plan Name: <p className={styles.customColor}>GoldPlan</p>
          </Col>
          <Col md={6}>
            Pricing: <p className={styles.customColor}>$15,000</p>
          </Col>
        </Row>
        <Row className="m-4">
          <Col md={6}>
            Plan Duration: <p className={styles.customColor}>6 months</p>
          </Col>
          <Col md={6}>
            Plan Usage Limits: <p className={styles.customColor}>138GB</p>
          </Col>
        </Row>
        <Row className="m-4">
          <Col>
            Features:
            <p className={styles.customColor}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              ea aspernatur. Mollitia quidem at quia omnis, rerum hic
              recusandae.
            </p>
          </Col>
        </Row>
        <Row className="m-4">
          <Col md={6}>
            Trial Period Limit: <p className={styles.customColor}>1 MONTH</p>
          </Col>
          <Col md={6}>
            Billing Cycle: <p className={styles.customColor}>Monthly</p>
          </Col>
        </Row>
        <Row className="m-4">
          <Col md={6}>
            Discount/Coupon Codes:
            <p className={styles.customColor}> P0UU105</p>
          </Col>
          <Col md={6}>
            Plan Visibility: <p className={styles.customColor}>Active</p>
          </Col>
        </Row>
        <Row className="m-4">
          <Col md={6}>
            Plan Description:
            <p className={styles.customColor}>plan Description......</p>
          </Col>
          <Col md={6}>
            Payment Gateway Option:
            <p className={styles.customColor}>Credit Card</p>
          </Col>
        </Row>
        <Row className="m-4">
          <Col className="d-flex mt-5 justify-content-center">
            <Button
              onClick={() => {
                navigate(-1);
              }}
              variant="secondary"
            >
              Back
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
            </div>
          </Col>
        </Row>
      </Container>    
  );
};

export default SinglePlanView;
