import React from "react";
import { Button, Container, Row, Col,Form } from "react-bootstrap";
// import { School } from "../../../types/Types";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
//rootstate
import {RootState } from "../src/redux/store/store";
import {editSchool} from "../src/redux/reducers/schoolReducer";

// interface editSchoolProps {
//   schoolData: School | null;
// }
// const EditSchool: React.FC<editSchoolProps> = ({schoolData}) => {
  const EditSchool = () =>{
  const navigate =useNavigate();
  const location = useLocation();
  const schoolData = location.state?.schoolData;
  // const data = useSelector((state: RootState) => state.school.schools) as School[];
  // const { id } = useParams<{ id: string }>();
  // const validId = id || '';

  // useEffect(() => {
  //   if (toEdit) {
  //     setInputData(toEdit);
  //   }
  // }, [toEdit]);

  return (
    
    <Container>
    <Row>
      <Col sm={2}>
        <div>
          <img
            src={schoolData?.schoolLogo}
            alt="school logo"
            className="img-fluid school-logo "
          />
        </div>
      </Col>
      <Col sm={5}>
        <Row>
          <p>
            {/* <strong>School Name: </strong><input type="text" value={schoolData?.schoolName} onChange={(e) => handleSchoolDataChange(e)}/> */}
          </p>
        </Row>
        <Row>
          <p>
            <strong>School Affiliation: </strong>138GB 
          </p>
        </Row>
        <Row>
          <p>
            <strong>School Mobile Number: </strong>89899898989
          </p>
        </Row>
        <Row>
          <p>
            <strong> Principle Name:</strong> Mr. Rajeev Mishra
          </p>
        </Row>
      </Col>
      <Col sm={5}>
        <Row>
          <p>
            <strong>School Type: </strong>Govt
          </p>
        </Row>
        <Row>
          <p>                
            <strong>School Identification Number:</strong>121212123212
          </p>
        </Row>
        <Row>
          <p>
            <strong>School Mail Id: </strong>gov.p@gov.com
          </p>
        </Row>
        <Row>
          <p>
            <strong> Principle Name:</strong> Mr. Rajeev Mishra
          </p>
        </Row>
      </Col>
    </Row>
    <Row>
      <p>
        <strong>Address:</strong> Nipania Indore MP
      </p>
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
  )
}

export default EditSchool;