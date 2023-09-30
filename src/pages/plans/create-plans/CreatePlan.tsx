import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//css
import styles from "./CreatePlan.module.scss";
//modal
import PlanPreviewModal from "../../../components/common/modal/PlanPreviewModal";
import PlanNavbar from "../PlanNavbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { createPlanAsync } from "../../../redux/reducers/planReducer"; // Adjust the import path as needed
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/rootReducer";
import { Plan } from "../../../helper/Types";

const CreatePlan: React.FC = () => {
  const { error } = useSelector((state: RootState) => state.plan);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const initialFormData: Plan = {
    planName: "",
    planNumber: "",
    createdAt: "",
    planExpiration: "",
    usageLimit: "",
    features: "",
    trialPeriod: "",
    billingCycle: "",
    codes: "",
    planVisibility: "",
    planDescription: "",
    paymentOption: "",
    planActivation: "",
    pricing: "",
    paymentGateway: "",
    discountCouponCode: "", // Optional
    duration: "",
    planAnalytics: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleInputChange = (fieldName: string, value: string | number) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  // ModalOpen
  const OpenModal = () => setModalOpen(true);
  const HideModal = () => setModalOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createPlanAsync(formData) as never);
    console.log(formData);
  };
  const resetFormFields = () => {
    setFormData(initialFormData);
  };

  return (
    <Container fluid className="main position-relative">
      <Row>
        <Col sm={2} bg="light" className="d-none d-md-block col-auto">
          <Sidebar />
        </Col>
        <Col sm={10} id="content" bg="dark" className="main">
          <div style={{ width: "100%", margin: "auto", paddingTop: "1%" }}>
            <Container>
              <Row>
                <Col>
                  <PlanNavbar />
                  <Form className={styles.form_plan}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="planName">
                        <Form.Label>Plan Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.planName}
                          onChange={(e) =>
                            handleInputChange("planName", e.target.value)
                          }
                          placeholder="Type your plan name"
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="Pricing">
                        <Form.Label>Pricing</Form.Label>
                        <Form.Control
                          type="number"
                          value={formData.pricing}
                          onChange={(e) =>
                            handleInputChange("pricing", e.target.value)
                          }
                          placeholder="$0,000"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="duration">
                        <Form.Label>Plan Duration</Form.Label>
                        <Form.Control
                          type="number"
                          value={formData.duration}
                          onChange={(e) =>
                            handleInputChange("duration", e.target.value)
                          }
                          placeholder="Type time limit"
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="usageLimit">
                        <Form.Label>Plan Usage Limits</Form.Label>
                        <Form.Control
                          type="number"
                          value={formData.usageLimit}
                          onChange={(e) =>
                            handleInputChange("usageLimit", e.target.value)
                          }
                          placeholder="Type limits"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="features">
                        <Form.Label>Features</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.features}
                          onChange={(e) =>
                            handleInputChange("features", e.target.value)
                          }
                          as="textarea"
                          rows={3}
                          placeholder="Type Plans Features"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="usageLimit">
                        <Form.Label>Trial Period Limit</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.usageLimit}
                          onChange={(e) =>
                            handleInputChange("usageLimit", e.target.value)
                          }
                          placeholder="Type trial limit"
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="billingCycleOption">
                        <Form.Label>Billing Cycle</Form.Label>
                        <Form.Select
                          aria-label="Billing Cycle"
                          value={formData.billingCycle}
                          onChange={(e) =>
                            handleInputChange("billingCycle", e.target.value)
                          }
                          placeholder="Billing Cycle"
                        >
                          <option>select </option>
                          <option value="monthly">Monthly</option>
                          <option value="quarterly">Quarterly</option>
                          <option value="yearly">Yearly</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="discountCouponCode">
                        <Form.Label>Discount/Coupon codes(Optional)</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.discountCouponCode}
                          onChange={(e) =>
                            handleInputChange(
                              "discountCouponCode",
                              e.target.value
                            )
                          }
                          placeholder="Type Unique Discount/Coupon Code"
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="planVisibility">
                        <Form.Label>Plan Visibility</Form.Label>
                        <Form.Select
                          aria-label="Plan Visibility"
                          value={formData.planVisibility}
                          onChange={(e) =>
                            handleInputChange("planVisibility", e.target.value)
                          }
                        >
                           <option>select </option>
                          <option value="private">Private</option>
                          <option value="public">Public</option>                          
                        </Form.Select>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="planActivation">
                        <Form.Label>Activation</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.planActivation}
                          onChange={(e) =>
                            handleInputChange("planActivation", e.target.value)
                          }
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group as={Col} controlId="planAnalytics">
                        <Form.Label>Plan Analytics</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.planAnalytics}
                          onChange={(e) =>
                            handleInputChange("planAnalytics", e.target.value)
                          }
                          placeholder="Type Plan Analytics"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="planExpiration">
                        <Form.Label>Plan Expiration</Form.Label>
                        <Form.Control
                          type="number"
                          value={formData.planExpiration}
                          onChange={(e) =>
                            handleInputChange("planExpiration", e.target.value)
                          }
                          placeholder="Plan Expiration"
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="trialPeriod">
                        <Form.Label>Trial Period</Form.Label>
                        <Form.Control
                          type="number"
                          value={formData.trialPeriod}
                          onChange={(e) =>
                            handleInputChange("trialPeriod", e.target.value)
                          }
                          placeholder="Trial Period"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="planDescription">
                        <Form.Label>Plan Description</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.planDescription}
                          onChange={(e) =>
                            handleInputChange("planDescription", e.target.value)
                          }
                          placeholder="Type your plan description"
                          as="textarea"
                          rows={3}
                        />
                      </Form.Group>
                    </Row>

                    {/* payment method */}
                    <Row className="mb-3">
                      <Form.Label>Payment Method</Form.Label>
                      {/* Radio buttons for payment method selection */}
                      <div className="d-flex">
                        <Form.Check
                          className="me-3"
                          type="radio"
                          label="Credit Card"
                          name="paymentGateway"
                          id="creditCard"
                          value="Credit Card"
                          checked={formData.paymentGateway === "Credit Card"}
                          onChange={(e) =>
                            handleInputChange("paymentGateway", e.target.value)
                          }
                        />
                        <Form.Check
                          className="me-3"
                          type="radio"
                          label="PayPal"
                          name="paymentGateway"
                          id="payPal"
                          value="PayPal"
                          checked={formData.paymentGateway === "PayPal"}
                          onChange={(e) =>
                            handleInputChange("paymentGateway", e.target.value)
                          }
                        />
                        <Form.Check
                          className="me-3"
                          type="radio"
                          label="UPI"
                          name="paymentGateway"
                          id="UPI"
                          value="UPI"
                          checked={formData.paymentGateway === "UPI"}
                          onChange={(e) =>
                            handleInputChange("paymentGateway", e.target.value)
                          }
                        />
                        <Form.Check
                          className="me-2"
                          type="radio"
                          label="other"
                          name="paymentGateway"
                          id="other"
                          value="other"
                          checked={formData.paymentGateway === "other"}
                          onChange={(e) =>
                            handleInputChange("paymentGateway", e.target.value)
                          }
                        />
                      </div>
                    </Row>

                    {/* buttons */}
                    <Row className="mb-3">
                      <div className="d-flex justify-content-between">
                        <Button
                          type="button"
                          variant="primary"
                          className="rounded-pill"
                          onClick={OpenModal}
                        >
                          Plan Preview
                        </Button>
                        <PlanPreviewModal
                          modalOpen={modalOpen}
                          Hide={HideModal}
                          formData={formData}
                        />
                        <div className="d-flex">
                          <Button
                            type="button"
                            className="plan_btn me-2 rounded-pill"
                            variant="success"
                            onClick={handleSubmit}
                          >
                            Create Plan
                          </Button>
                          <Button
                            type="button"
                            className="btn-rounded ms-2 rounded-pill"
                            variant="secondary"
                            onClick={resetFormFields}
                          >
                            Clear/Reset
                          </Button>
                        </div>
                      </div>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePlan;
