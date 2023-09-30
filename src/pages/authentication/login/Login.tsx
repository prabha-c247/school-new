import React from "react";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
} from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import { loginSchema } from "../../../helper/formValidation";
import { useSelector, useDispatch } from "react-redux"; 
import {loginUserAsync} from "../../../redux/reducers/userReducer";
import {  useNavigate } from "react-router-dom";
import { ANALYTICS } from "../../../helper/PageRoute";
import {RootState} from "../../../redux/store/store";
// import {login} from "../../../helper/Types";
// import axios from "axios";
import styles from './login.module.scss'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const token = localStorage.getItem('token');
  const {errorMessage,} = useSelector((state: RootState) => state.user);
   return (    
    <Container>   
    <div className={`${styles.formContainer} d-flex justify-content-center align-items-center container`}>
      <div className={`${styles.formRow} d-flex flex-row justify-content-around align-items-center row`}>   
        <div className={`${styles.colImg} d-flex flex-row justify-content-center align-items-center col-md-6`}>
        <img            
              src="https://unblast.com/wp-content/uploads/2020/04/Working-from-Home-Illustration-1536x1106.jpg"
              alt="Login User"
              className="img-fluid"              
            />
        </div>
        <div className={`${styles.colForm} d-flex flex-row justify-content-center align-items-center col-md-6`}>
        <Formik          
            initialValues ={{ email:"", password:""}} 
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting }) => {           
              try {             
                await dispatch(loginUserAsync(values) as any);   
                if(token)  {
                  navigate(ANALYTICS);  
                }                                         
              } catch (error) {              
                console.error("Login failed:", error);
              } finally {
                setSubmitting(false);
              }
             
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <FormikForm className="w-100">
                <h1>Log In</h1>
                <div className="line" />

                <BootstrapForm.Group
                  controlId="formBasicEmail"
                  className="mt-4"
                >
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    autoComplete="username"
                    className={`form-control p-3 ${
                      touched.email && errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group
                  controlId="formBasicPassword"
                  className="mt-4"
                >
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    className={`form-control p-3 ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </BootstrapForm.Group>

                <Button                  
                  variant="primary"
                  type="submit"
                  className="mt-4 p-3 w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
                {
                  errorMessage&&(
                    <div className="alert alert-danger mt-2" role="alert">{errorMessage}</div>
                  )
                }
              </FormikForm>
            )}
          </Formik>
        </div>    
      </div>
      </div>    
    </Container>
  );
};

export default Login;
