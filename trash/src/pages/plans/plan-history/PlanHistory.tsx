// import React,{useState, useEffect} from "react";
// import { Button, Container, Col, Row, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// //css
// import styles from "./PlanHistory.module.scss";
// //route
// import { CREATE_PLANS, VIEW_PLAN } from "../../../helper/PageRoute";
// //component
// import Filter from "../../../components/common/filter/Filter";
// import SearchBar from "../../../components/common/serachbar/SearchBar";
// import Sidebar from "../../../components/sidebar/Sidebar";
// import axios from "axios";

// const PlanHistory = () => {
//   const navigate = useNavigate();
//   const apiUrl = process.env.REACT_APP_BASE_URL
//   const planData= axios.get(`${apiUrl}/plan-history`,)

//   const [planHistory, setPlanHistory] = useState({
//    plan:[]
//   });

//   const token = localStorage.getItem('token');
//   useEffect(() => {   
//     if (token) {
//       // Create an Axios instance with default headers
//       const axiosInstance = axios.create({
//         baseURL: apiUrl,
//         headers: {
//           'Authorization': `Bearer ${token.substring(1, token.length - 1)}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       // Make a GET request with the token in the header
//       axiosInstance.get(`${apiUrl}/plan-history`)
//         .then((response) => {
//           console.log(response.data.data, "personal data in setting");
//           // const { name, profileImage, contactNumber } = response.data.data;
//           setPlanHistory({...response.data})      
//         })
//         .catch((error) => {
//           console.error("Error fetching personal data setting:", error);
//         });
//     } else {
//       // Handle the case where 'token' is null (not found in local storage)
//       console.error("Token not found in local storage");
//     }
//   }, [token]);

//   return (

//     <Container fluid className="main position-relative">
//         <Row>          
//           <Col sm={2} bg="light" className="d-none d-md-block col-auto">
//             <Sidebar />
//           </Col>
//           <Col sm={10} id="content" bg="dark"  className="main">
//             <div style={{ width: "100%", margin: "auto", paddingTop: "1%" }}>
//             <Container>
//       <Row className="mb-3">
//         <nav
//           className={`${styles.nav} d-flex align-items-center justify-content-between mx-auto`}
//         >
//           <h5>Plan History</h5>
//           <div className="d-flex align-items-center justify-content-evenly">
//             <div className="me-3">
//               <SearchBar />
//             </div>
//             <div className="me-3">
//               <Filter />
//             </div>
//             <div>
//               <Button
//                 className="rounded-pill"
//                 variant="secondary"
//                 onClick={() => navigate(CREATE_PLANS)}
//               >
//                 Create Plan <AiOutlinePlusCircle />
//               </Button>
//             </div>
//           </div>
//         </nav>
//       </Row>
//       <Row>
//         <Col>
//           <Table className="mt-2">
//             <thead>
//               <tr>
//                 <th>P.No.</th>
//                 <th>Plan Name/Title</th>
//                 <th>Plan Creation Date & Time</th>
//                 <th>Current Mode</th>
//                 <th>View Plan</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((data, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{data.planNo}</td>
//                     <td>{data.planName}</td>
//                     <td>{data.planDate}</td>
//                     <td>
//                       <Button
//                         className={`${styles.mode_btn} rounded-pill border-dark`}
//                         variant="outlined"
//                       >
//                         {data.planMode}
//                       </Button>
//                     </td>
//                     <td>
//                       <Button
//                         className={`${styles.view_btn} rounded-pill`}
//                         variant="secondary"
//                         onClick={() => {
//                           navigate(VIEW_PLAN);
//                         }}
//                       >
//                         View
//                       </Button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Container>
//             </div>
//           </Col>
//         </Row>
//       </Container>
  
//   );
// };

// export default PlanHistory;
