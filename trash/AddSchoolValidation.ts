import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SchoolNavbar from "../school-navbar/SchoolNavbar";
//css
import styles from "./AddSchool.module.scss";
//types
import {ValidationErrors} from "../../../helper/Types";
//validation
import {validateSchoolName,validateSchoolType, validateContactNumber, validateSchoolMailId} from "../../../helper/formValidation";

const AddSchool = () => {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({schoolNameError: null, schoolTypeError: null,validateSchoolMailId:null,validateContactNumber:null});
  const [inputData, setInputData] = useState({
    schoolLogo: "",
    schoolName: "",
    schoolType: "",
    affiliation: "",
    identificationNumber: "",
    schoolMobileNumber: "",
    schoolMailId: "",
    principalName: "",
    principalContact: "",
    studentAddress: "",
    studentCity: "",
    studentPinCode: "",
    userName: "",
    createPassword: "",
    confirmPassword: "",
    termsCondition: true,
  });

  const handleInputChange = (
    fieldName: string,
    value: string | number | boolean
  ) => {
    setInputData({
      ...inputData,
      [fieldName]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const schoolNameError = validateSchoolName(inputData.schoolName);
    const schoolTypeError = validateSchoolType(inputData.schoolType);
    const schoolMailIdError = validateSchoolMailId(inputData.schoolMailId);
    const schoolMobileNumberError = validateContactNumber(inputData.schoolMobileNumber)
    console.log("Form submitted!", inputData);
    setValidationErrors({
      schoolNameError,
      schoolTypeError,
      schoolMailIdError,
      schoolMobileNumberError
    });

    if (schoolNameError || schoolTypeError || schoolMailIdError) {
      // setValidationErrors({
      // ...validationErrors,
      // });
      alert("Please correct the errors in the form.");
      return;
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <SchoolNavbar />
          <Form.Group className={styles.form_plan} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <h5>School Details</h5>
              <Col sm={3}>
                <Form.Label htmlFor="schoolLogo">School logo</Form.Label>
                <Form.Control
                  type="file"
                  id="schoolLogo"
                  value={inputData.schoolLogo}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("schoolLogo", e.target.value)
                  }
                />
              </Col>
              <Col sm={9}>
                <Row>
                  <Col sm={6}>
                    <Form.Label htmlFor="schoolName">School Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={inputData.schoolName}
                      placeholder="St. Mary H.S. School"
                      id="schoolName"
                      onChange={(e) =>
                        handleInputChange("schoolName", e.target.value)
                      }
                    />
                    {validationErrors.schoolNameError && (
                      <span className="text-danger">
                        {validationErrors.schoolNameError}
                      </span>
                    )}
                  </Col>
                  <Col sm={6}>
                    <Form.Label htmlFor="schoolType">School Type</Form.Label>
                    <Form.Select
                      id="schoolType"
                      onChange={(e) =>
                        handleInputChange("schoolType", e.target.value)
                      }
                    >
                      <option>Government</option>
                      <option>Private</option>
                    </Form.Select>
                    {validationErrors.schoolTypeError && (
                      <div className="error-message">{validationErrors.schoolTypeError}</div>
                    )}
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="affiliation">
                      School Affiliation
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={inputData.affiliation}
                      placeholder="Affiliation with educational boards of bodies"
                      id="affiliation"
                      onChange={(e) =>
                        handleInputChange("affiliation", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="identificationNumber">
                      School Affiliation
                    </Form.Label>
                    <Form.Control
                      type="number"
                      value={inputData.identificationNumber}
                      placeholder="01234567890"
                      id="identificationNumber"
                      onChange={(e) =>
                        handleInputChange(
                          "identificationNumber",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="schoolMobileNumber">
                      School Mobile Number
                    </Form.Label>
                    <Form.Control
                      type="number"
                      value={inputData.schoolMobileNumber}
                      placeholder="+91-1234567890"
                      id="schoolMobileNumber"
                      onChange={(e) =>
                        handleInputChange("schoolMobileNumber", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="schoolMailId">
                      School Mail Id
                    </Form.Label>
                    <Form.Control
                      type="mail"
                      value={inputData.schoolMailId}
                      placeholder="Schoolmailid@gmail.com
                      +"
                      id="schoolMailId"
                      onChange={(e) =>
                        handleInputChange("schoolMailId", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="principalName">
                      Principal Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={inputData.principalName}
                      placeholder="School Principal Name"
                      id="principalName"
                      onChange={(e) =>
                        handleInputChange("principalName", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="principalContact">
                      Principal Contact Information
                    </Form.Label>
                    <Form.Control
                      type="mail"
                      value={inputData.principalContact}
                      placeholder="Principalmailid@gmail.com"
                      id="principalContact"
                      onChange={(e) =>
                        handleInputChange("principalContact", e.target.value)
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-3">
              <Form.Label htmlFor="studentAddress">Address</Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  value={inputData.studentAddress}
                  placeholder="Student Address"
                  id="studentAddress"
                  onChange={(e) =>
                    handleInputChange("studentAddress", e.target.value)
                  }
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  value={inputData.studentCity}
                  placeholder="City/Village"
                  id="studentCity"
                  onChange={(e) =>
                    handleInputChange("studentCity", e.target.value)
                  }
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  value={inputData.studentPinCode}
                  placeholder="Pin Code"
                  id="studentPinCode"
                  onChange={(e) =>
                    handleInputChange("studentPinCode", e.target.value)
                  }
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <h5>Security & Password</h5>
              <Col sm={5}>
                <Form.Label htmlFor="userName">Username</Form.Label>
                <Form.Control
                  type="text"
                  value={inputData.userName}
                  placeholder="@School.ID123"
                  id="userName"
                  onChange={(e) =>
                    handleInputChange("userName", e.target.value)
                  }
                />
              </Col>
              <Col sm={5}>
                <Form.Label htmlFor="createPassword">
                  Create Password
                </Form.Label>
                <Form.Control
                  type="password"
                  value={inputData.createPassword}
                  placeholder="Unique Password"
                  id="createPassword"
                  onChange={(e) =>
                    handleInputChange("createPassword", e.target.value)
                  }
                />
                <div className="mt-2">
                  <Form.Label htmlFor="confirmPassword">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={inputData.confirmPassword}
                    placeholder="Re enter Password"
                    id="confirmPassword"
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                  />
                </div>
              </Col>
            </Row>
            <Row className="mt-3 ">
              <Col className="d-flex justify-content-end">
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="termsCondition"
                    label="Terms and Conditions"
                    checked={inputData.termsCondition}
                    onChange={(e) =>
                      handleInputChange("termsCondition", e.target.checked)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="d-flex justify-content-end">
                <Button variant="primary" className={styles.submit_btn}>
                  Submit
                </Button>
                <input
                  type="reset"
                  value="Clear/Reset"
                  className={styles.clear_btn}
                />
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSchool;
