import React,{useEffect} from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { School } from "../../../helper/Types";
import { useSelector, useDispatch } from "react-redux";
import { getSingleSchoolAsync } from "../../../redux/reducers/schoolReducer"; 
import { RootState } from "../../../redux/store/rootReducer";

interface ModalProps {
  modalOpen: boolean;
  Hide: () => void;
  schoolData: School | null;
}

const ViewSchoolModal: React.FC<ModalProps> = ({ modalOpen, Hide,schoolData  }) => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  // const school: School | undefined = useSelector((state: RootState) =>state.school.schools.find((school) => school._id=== id)); 
  useEffect(() => {
    const parsedId = Number(id);
    dispatch(getSingleSchoolAsync(parsedId) as never); 
  }, [dispatch, id]);
  
  return (
    <Modal show={modalOpen} onHide={Hide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>View School</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
              <Row className="text-truncate">
                <p>
                  <strong>School Name: </strong>{schoolData?.schoolName}
                </p>
              </Row>
              <Row >
                <p>
                  <strong>School Affiliation: </strong>{schoolData?.schoolAffiliation}
                </p>
              </Row>
              <Row>
                <p>
                  <strong>School Mobile Number: </strong>{schoolData?.contactInformation}
                </p>
              </Row>
              <Row>
                <p>
                  <strong> Principle Name:</strong> {schoolData?.principalName}
                </p>
              </Row>
            </Col>
            <Col sm={5} >
              <Row>
                <p>
                  <strong>School Type: </strong>{schoolData?.schoolType}
                </p>
              </Row>
              <Row className="text-truncate">
                <p>                
                  <strong>School Identification Number:</strong>{schoolData?.schoolIdentificationNumber}
                </p>
              </Row>
              <Row>
                <p>
                  <strong>School Mail Id: </strong>{schoolData?.schoolEmail}
                </p>
              </Row>
              <Row>
                <p>
                  <strong> Principle Contact Information:</strong> {schoolData?.principalContactInformation}
                </p>
              </Row>
            </Col>
          </Row>
          <Row>
            <p>
              <strong>Address:</strong> {schoolData?.address}
            </p>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={Hide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ViewSchoolModal;
