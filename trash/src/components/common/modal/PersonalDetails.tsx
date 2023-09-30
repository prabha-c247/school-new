import React from "react";
import { Modal,  Container, Row, } from "react-bootstrap";

interface UserData {
  profileImage: string;
  name: string;
  contactNumber: string;
  // Add other properties as needed
}
interface ModalProps {
  modalOpen: boolean;
  Hide: () => void;
  userData: UserData;
}

const PersonalDetails: React.FC<ModalProps> = ({ modalOpen, Hide, userData }) => { 

  return (    
    <Modal show={modalOpen} onHide={Hide}>
      <Modal.Header closeButton>
        <Modal.Title>Personal Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
      <Container>
      <Row>          
          <div className="d-flex">
          <strong className="me-2">Profile image:</strong>
          <div style={{ height: "100px", width: "100px" }}>
            <img
              src={userData.profileImage}
              className="rounded mx-auto d-block img-thumbnail"
              alt="user profile"
            />
          </div>
          </div>     
        </Row>
        <Row>
         <p> <strong>Name: </strong> <span>{userData.name}</span></p>
        </Row>
        <Row>
          <p> <strong>Contact:</strong><span>{userData.contactNumber}</span></p>
        </Row>
      </Container>
      </Modal.Body>
    </Modal>
  );
};

export default PersonalDetails;
