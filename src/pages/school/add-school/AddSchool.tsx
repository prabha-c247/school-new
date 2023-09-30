import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
  Figure,
} from "react-bootstrap";
//redux
import { useDispatch, useSelector } from "react-redux";
//reducer
import { addSchoolAsync } from "../../../redux/reducers/schoolReducer";
//Formik validation
import { Formik, Form as FormikForm, useFormik } from "formik";
//validation
import { validateSchema } from "../../../helper/formValidation";
//css
import styles from "./AddSchool.module.scss";
import SchoolNavbar from "../school-navbar/SchoolNavbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { RootState } from "../../../redux/store/rootReducer";
import { School } from "../../../helper/Types";

const AddSchool = () => {
  // const data = useSelector((state:RootState) => state.school.schools);
  const dispatch= useDispatch();
  const initialFormData: School = {
    _id: null,
    schoolLogo: "",
    schoolName: "",
    schoolAffiliation: "",
    contactInformation: 0,
    principalName: "",
    schoolType: "",
    schoolIdentificationNumber: "",
    schoolEmail: "",
    principalContactInformation: "",
    address: "",
    schoolCity: "",
    schoolPinCode: "",
    username: "",
    createPassword: "",
    confirmPassword: "",
    termsAndConditions: false, // Initial value for boolean
    discountCouponCode: "",
    planSelection: "",
    schoolWebsite: "",
  };

  const formik = useFormik({
    initialValues: initialFormData,
    validationSchema: validateSchema,
    onSubmit: (values) => {
      dispatch(addSchoolAsync(values) as never);
      console.log("school created successfully!", values);
    },
  });

  const handleReset = () => {
    // Reset the form values to their initial state
    formik.resetForm();
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
                  <SchoolNavbar />
                  <Formik
                    initialValues={initialFormData}
                    validationSchema={validateSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      dispatch(addSchoolAsync(values) as never);
                      setSubmitting(false);
                      console.log("school created successfully!", values);
                    }}
                  >
                    {(formikProps) => (
                      <FormikForm>
                        <Row className="mb-3">
                          <h5>School Details</h5>
                          <Col sm={3}>
                            <Figure>
                              <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="holder.js/171x180"
                              />
                              <BootstrapForm.Label htmlFor="schoolLogo">
                                School logo
                              </BootstrapForm.Label>
                              <BootstrapForm.Control
                                type="file"
                                id="schoolLogo"
                                onBlur={formik.handleBlur}
                                value={formik.values.schoolLogo}
                                onChange={formik.handleChange}
                              />
                            </Figure>
                          </Col>
                          <Col sm={9}>
                            <Row>
                              <Col sm={6}>
                                <BootstrapForm.Label htmlFor="schoolName">
                                  School Name
                                </BootstrapForm.Label>
                                <BootstrapForm.Control
                                  type="text"
                                  id="schoolName"
                                  placeholder="St. Mary H.S. School"
                                  value={formik.values.schoolName}
                                  onBlur={formik.handleBlur}
                                  onChange={formik.handleChange}
                                />
                                {formik.touched.schoolName &&
                                  formik.errors.schoolName && (
                                    <div className="text-danger">
                                      {formik.errors.schoolName}
                                    </div>
                                  )}
                              </Col>
                              <Col sm={6}>
                                <BootstrapForm.Label htmlFor="schoolType">
                                  School Type
                                </BootstrapForm.Label>
                                <BootstrapForm.Select
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  id="schoolType"
                                >
                                  <option>Government</option>
                                  <option>Private</option>
                                </BootstrapForm.Select>
                                {formik.touched.schoolType &&
                                  formik.errors.schoolType && (
                                    <div className="text-danger">
                                      {formik.errors.schoolType}
                                    </div>
                                  )}
                              </Col>
                              <Col sm={6} className="mt-4">
                                <BootstrapForm.Label htmlFor="schoolAffiliation">
                                  School Affiliation
                                </BootstrapForm.Label>
                                <BootstrapForm.Control
                                  type="text"
                                  placeholder="Affiliation with educational boards of bodies"
                                  id="schoolAffiliation"
                                  value={formik.values.schoolAffiliation}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                              </Col>
                              <Col sm={6} className="mt-4">
                                <BootstrapForm.Label htmlFor="schoolIdentificationNumber">
                                  School Affiliation
                                </BootstrapForm.Label>
                                <BootstrapForm.Control
                                  type="number"
                                  placeholder="01234567890"
                                  id="schoolIdentificationNumber"
                                  value={
                                    formik.values.schoolIdentificationNumber
                                  }
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                              </Col>
                              <Col sm={6} className="mt-4">
                                <BootstrapForm.Label htmlFor="contactInformation">
                                  School Mobile Number
                                </BootstrapForm.Label>
                                <BootstrapForm.Control
                                  type="number"
                                  placeholder="+91-1234567890"
                                  id="contactInformation"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.contactInformation}
                                />
                                {formik.touched.schoolEmail &&
                                  formik.errors.contactInformation && (
                                    <div className="text-danger">
                                      {formik.errors.contactInformation}
                                    </div>
                                  )}
                              </Col>
                              <Col sm={6} className="mt-4">
                                <BootstrapForm.Label htmlFor="schoolMailId">
                                  School Mail Id
                                </BootstrapForm.Label>
                                <BootstrapForm.Control
                                  type="mail"
                                  placeholder="Schoolmailid@gmail.com
                      +"
                                  id="schoolMailId"
                                  value={formik.values.schoolEmail}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                                {formik.touched.schoolEmail &&
                                  formik.errors.schoolEmail && (
                                    <div className="text-danger">
                                      {formik.errors.schoolEmail}
                                    </div>
                                  )}
                              </Col>
                              <Col sm={6} className="mt-4">
                                <BootstrapForm.Label htmlFor="principalName">
                                  Principal Name
                                </BootstrapForm.Label>
                                <BootstrapForm.Control
                                  type="text"
                                  placeholder="School Principal Name"
                                  id="principalName"
                                  value={formik.values.principalName}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                              </Col>
                              <Col sm={6} className="mt-4">
                                <BootstrapForm.Label htmlFor="principalContactInformation">
                                  Principal Contact Information
                                </BootstrapForm.Label>
                                <BootstrapForm.Control
                                  type="number"
                                  placeholder="principalContactInformation@gmail.com"
                                  id="principalContactInformation"
                                  value={
                                    formik.values.principalContactInformation
                                  }
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                                {formik.touched.principalContactInformation &&
                                  formik.errors.principalContactInformation && (
                                    <div className="text-danger">
                                      {
                                        formik.errors
                                          .principalContactInformation
                                      }
                                    </div>
                                  )}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <BootstrapForm.Label htmlFor="schoolAddress">
                            Address
                          </BootstrapForm.Label>
                          <Col sm={4}>
                            <BootstrapForm.Control
                              type="text"
                              value={formik.values.address}
                              placeholder="Student Address"
                              id="schoolAddress"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </Col>
                          <Col sm={4}>
                            <BootstrapForm.Control
                              type="text"
                              value={formik.values.schoolCity}
                              placeholder="City/Village"
                              id="schoolCity"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </Col>
                          <Col sm={4}>
                            <BootstrapForm.Control
                              type="text"
                              value={formik.values.schoolPinCode}
                              placeholder="Pin Code"
                              id="schoolPinCode"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </Col>
                        </Row>
                        <Row className="mt-4">
                          <h5>Security & Password</h5>
                          <Col sm={6}>
                            <BootstrapForm.Label htmlFor="username">
                              Username
                            </BootstrapForm.Label>
                            <BootstrapForm.Control
                              type="text"
                              placeholder="@School.ID123"
                              id="username"
                              value={formik.values.username}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </Col>
                          <Col sm={6}>
                            <BootstrapForm.Label htmlFor="createPassword">
                              Create Password
                            </BootstrapForm.Label>
                            <BootstrapForm.Control
                              type="password"
                              placeholder="Unique Password"
                              id="createPassword"
                              onBlur={formik.handleBlur}
                              value={formik.values.createPassword}
                              onChange={formik.handleChange}
                            />
                          </Col>
                          <Col sm={6}>
                            <div className="mt-2">
                              <BootstrapForm.Label htmlFor="confirmPassword">
                                Confirm Password
                              </BootstrapForm.Label>
                              <BootstrapForm.Control
                                type="password"
                                placeholder="Re enter Password"
                                id="confirmPassword"
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row className="mt-3 ">
                          <Col className="d-flex justify-content-end">
                            <BootstrapForm.Group>
                              <BootstrapForm.Check
                                type="checkbox"
                                id="termsCondition"
                                label="Terms and Conditions"
                                checked={formik.values.termsAndConditions}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                            </BootstrapForm.Group>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col className="d-flex justify-content-end">
                            <Button
                              variant="primary"
                              className={styles.submit_btn}
                              style={{ borderRadius: "60px" }}
                            >
                              Submit
                            </Button>
                            {/* <Button variant="primary" className={styles.submit_btn} onClick={handleReset}>
                  reset me
                </Button> */}
                            <input
                              type="reset"
                              value="Clear/Reset"
                              className={styles.clear_btn}
                              onClick={() => {
                                formikProps.resetForm();
                              }}
                            />
                          </Col>
                        </Row>
                      </FormikForm>
                    )}
                  </Formik>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSchool;
