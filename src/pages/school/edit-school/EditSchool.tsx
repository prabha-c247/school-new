import React, { useState,useEffect } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { editSchoolAsync,fetchPlanSelectionAsync } from "../../../redux/reducers/schoolReducer";
//types
import { EditSchoolTypes } from "../../../helper/Types";
import Sidebar from "../../../components/sidebar/Sidebar";

interface EditSchoolProps {
  schoolData?: EditSchoolTypes | null;
}

const EditSchool: React.FC<EditSchoolProps> = ({ schoolData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  // const data = useSelector(
  //   (state: RootState) => state.school.schools
  // ) as EditSchoolTypes[];
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [formData, setFormData] = useState<EditSchoolTypes>({
    ...(schoolData || {
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
      termsAndConditions: false,
      planSelection:"",
      schoolWebsite:"",
    }),
    ...(schoolData || {}), 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  //PlanSelection
  useEffect(() => {
    dispatch(fetchPlanSelectionAsync() as never);
  }, [dispatch]);

  const planSelectionOptions = useSelector(
    (state: RootState) => state.school.planSelection
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      editSchoolAsync({
        id: schoolData?._id || 0,
        inputData: formData,
      }) as never
    );
    navigate(-1);
  };


  return (
    <Container fluid className="main position-relative container-h">
      <Row>
        <Col sm={2} bg="light" className="d-none d-md-block col-auto ">
          <Sidebar />
        </Col>
        <Col sm={10} id="content" bg="dark" className="main">
            <Container>
              <Row className="mb-1">
                <Col>
                  <h1>Edit School</h1>
                </Col>
              </Row>
              <Col>
              <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={2}>
                <div className="">
                      <div
                        className="bg-light img-fluid mb-1"
                        style={{ height: "150px", width: "150px" }}
                      >
                        {selectedImage ? (
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="school logo"
                            className="img-fluid school-logo"
                          />
                        ) : (
                          <div className="empty-box"></div>
                        )}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                </Col>
                <Col sm={10}>
                 
                    <Row>
                      <Col sm={6}>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Name:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              type="text"
                              name="schoolName"
                              value={formData.schoolName}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Affiliation:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              type="text"
                              name="schoolAffiliation"
                              value={formData.schoolAffiliation}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Mobile Number:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                            name="contactInformation"
                              type="number"
                              value={formData.contactInformation}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            Principal Name:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              name="principalName"
                              type="text"
                              value={formData.principalName}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3" htmlFor="username">
                          Username:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              name="username"
                              type="text"
                              value={formData.username}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3" htmlFor="planSelection">
                          Plan Selection:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              as="select"
                              name="planSelection"                              
                              value={formData.planSelection}
                              onChange={handleChange}
                            >
                               <option value="">Select a plan</option>
                                {planSelectionOptions.map((plan) => (
                                 <option key={plan._id} value={plan._id}>
                                   {plan.planName}  {plan.pricing}
                                 </option>
                                  ))}
                              </Form.Control>
                          </Col>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Type:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              name="schoolType"
                              type="text"
                              value={formData.schoolType}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Identification Number:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                            name="schoolIdentificationNumber"
                              type="text"
                              value={formData.schoolIdentificationNumber}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Mail Id:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              name="schoolEmail"
                              type="email"
                              value={formData.schoolEmail}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            Principal Contact Information:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              name="principalContactInformation"
                              type="number"
                              value={formData.principalContactInformation}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3" htmlFor="schoolWebsite">
                          School Website:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              name="schoolWebsite"
                              type="text"
                              value={formData.schoolWebsite}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3" htmlFor="createPassword">
                          Create Password:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              name="createPassword"
                              type="text"
                              value={formData.createPassword}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>                  
                      <Row className="mb-3">
                        <Form.Label htmlFor="schoolAddress">Address</Form.Label>
                        <Col sm={4}>
                          <Form.Control
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                           name="schoolCity"
                            type="text"
                            value={formData.schoolCity}
                            onChange={handleChange}
                          />
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            name="schoolPinCode"
                            type="number"
                            value={formData.schoolPinCode}
                            onChange={handleChange}
                          />
                        </Col>
                      </Row>
                    </Row>
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                
                </Col>
              </Row>
              </Form>
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
          
 </Col>
            </Container>
         
        </Col>
      </Row>
    </Container>
  );
};

export default EditSchool;
