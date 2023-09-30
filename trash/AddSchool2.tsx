import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SchoolNavbar from "../src/pages/school/school-navbar/SchoolNavbar";
import AddSchoolInput from "../../../components/common/input/AddSchoolInput";
//css
import styles from "./AddSchool.module.scss";

const AddSchool2 = () => {
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

  const handleInputChange = (fieldName: string, value: string | number | boolean) => {
    setInputData({
      ...inputData,
      [fieldName]: value,
    });
  };
  return (
    <Container>
    <Row>
      <Col>
        <SchoolNavbar />
        <Form className={styles.form_plan}>
          <Row className="mb-3">
            <h5>School Details</h5>
            <Col sm={3}>
              <AddSchoolInput
                label="School logo"
                type="file"
                value={inputData.schoolLogo}
                onChange={(value) => handleInputChange("schoolLogo", value)}
                controlId="planName"
              />
            </Col>
            <Col sm={9}>
              <Row>
                <Col sm={6}>               
                  <AddSchoolInput
                    label="School Name"
                    type="text"
                    placeholder="St. Mary H.S. School"
                    value={inputData.schoolName}
                    onChange={(value) =>
                      handleInputChange("schoolName", value)
                    }
                    controlId="schoolName"
                  />
                </Col>
                <Col sm={6}>
                  <AddSchoolInput
                    label="School Type"
                    type="select"
                    value={inputData.schoolType}
                    onChange={(value) =>
                      handleInputChange("schoolType", value)
                    }
                    controlId="schoolType"
                    options={["Government", "Private"]}
                  />
                </Col>

                <Col sm={6} className="mt-4">
                  <AddSchoolInput
                    label="School Affiliation"
                    type="text"
                    placeholder="Affiliation with educational boards of bodies"
                    value={inputData.affiliation}
                    onChange={(value) =>
                      handleInputChange("affiliation", value)
                    }
                    controlId="affiliation"
                  />
                </Col>
                <Col sm={6} className="mt-4">
                  <AddSchoolInput
                    label="School Identification Number"
                    type="number"
                    placeholder="01234567890"
                    value={inputData.identificationNumber}
                    onChange={(value) =>
                      handleInputChange("identificationNumber", value)
                    }
                    controlId="identificationNumber"
                  />
                </Col>
                <Col sm={6} className="mt-4">
                  <AddSchoolInput
                    label="School Mobile Number"
                    type="number"
                    placeholder="+91-1234567890"
                    value={inputData.schoolMobileNumber}
                    onChange={(value) =>
                      handleInputChange("schoolMobileNumber", value)
                    }
                    controlId="schoolMobileNumber"
                  />
                </Col>
                <Col sm={6} className="mt-4">
                  <AddSchoolInput
                    label="School Mail Id"
                    type="mail"
                    placeholder="Schoolmailid@gmail.com"
                    value={inputData.schoolMailId}
                    onChange={(value) =>
                      handleInputChange("schoolMailId", value)
                    }
                    controlId="schoolMailId"
                  />
                </Col>
                <Col sm={6} className="mt-4">
                  <AddSchoolInput
                    label="Principal Name"
                    type="text"
                    placeholder="School Principal Name"
                    value={inputData.principalName}
                    onChange={(value) =>
                      handleInputChange("principalName", value)
                    }
                    controlId="principalName"
                  />
                </Col>
                <Col sm={6} className="mt-4">
                  <AddSchoolInput
                    label="Principal Contact Information"
                    type="mail"
                    placeholder="Principalmailid@gmail.com"
                    value={inputData.principalContact}
                    onChange={(value) =>
                      handleInputChange("principalContact", value)
                    }
                    controlId="principalContact"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-3">
          <AddSchoolInput
                    label="Address"
                    type="text"
                    placeholder="Student Address"
                    value={inputData.studentAddress}
                    onChange={(value) =>
                      handleInputChange("studentAddress", value)
                    }
                    controlId="studentAddress"
                  />
                  <AddSchoolInput 
                      label="City"               
                    type="text"
                    placeholder=" City/Village"
                    value={inputData.studentCity}
                    onChange={(value) =>
                      handleInputChange("studentCity", value)
                    }
                    controlId="studentCity"
                  />
                  <AddSchoolInput 
                  label="Pin Code"                     
                    type="text"
                    placeholder="Pin Code"
                    value={inputData.studentPinCode}
                    onChange={(value) =>
                      handleInputChange("studentPinCode", value)
                    }
                    controlId="studentPinCode"
                  />
          </Row>
          <Row className="mt-4">
            <h5>Security & Password</h5>
            <Col sm={5}>
            <AddSchoolInput 
                  label="Username"                     
                    type="text"
                    placeholder="@School.ID123"
                    value={inputData.userName}
                    onChange={(value) =>
                      handleInputChange("userName", value)
                    }
                    controlId="userName"
                  /></Col>
                   <Col sm={5}>
            <AddSchoolInput 
                  label="Create Password"                     
                    type="password"
                    placeholder="Unique Password"
                    value={inputData.createPassword}
                    onChange={(value) =>
                      handleInputChange("createPassword", value)
                    }
                    controlId="createPassword"
                  />
                 <div className="mt-2">
                 <AddSchoolInput 
                  label="Confirm Password"                     
                    type="password"
                    placeholder="Re enter password"
                    value={inputData.confirmPassword}
                    onChange={(value) =>
                      handleInputChange("confirmPassword", value)
                    }
                    controlId="confirmPassword"                      
                  />
                 </div>
                  </Col>
          </Row>
          <Row className="mt-3">
            <Col>
            <AddSchoolInput
             label="Terms and Conditions" 
             type="checkbox"
              value={inputData.termsCondition} 
             onChange={(value) =>handleInputChange("termsCondition", value)}
              controlId="termsCondition"              
                />
                </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default AddSchool2