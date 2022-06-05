import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import './createAccout.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const CreateAccout = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            password: "",
            confirmedPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required")
                .min(4, "Must be 4 characters or more"),
            email: Yup.string()
                .required("Required")
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Please enter a valid email address"
                ),
            password: Yup.string()
                .required("Required")
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    "Password must be 7-19 characters and contain at least one letter, one number and a special character"
                ),
            confirmedPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password"), null], "Password must match"),
        }),

        onSubmit: (values, { resetForm }) => {
            toast.success('Create Accout Success', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            resetForm({ values: '' });
        },
    });

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <Container>
                <Row>
                    <Col className="create-lerf" xs={12} md={3}>
                        <ListGroup className="container-create-lerf">
                            <ListGroup.Item>Find something to watch on your subscribed streaming services</ListGroup.Item>
                            <ListGroup.Item>Log the movies and TV shows you have watched</ListGroup.Item>
                            <ListGroup.Item>Keep track of your favourite movies and TV shows and get recommendations from them</ListGroup.Item>
                            <ListGroup.Item>Build and maintain a personal watchlist</ListGroup.Item>
                            <ListGroup.Item>Build custom mixed lists (movies and TV)</ListGroup.Item>
                            <ListGroup.Item>Take part in movie and TV discussions</ListGroup.Item>
                            <ListGroup.Item>Contribute to, and improve the information in our database</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col xs={12} md={9}>
                        <div className="title-movies header-creatAccout">
                            <h2 className="hewader-login">Sign up for an account</h2>
                            <p>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>
                        </div>


                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control value={formik.values.name}
                                    onChange={formik.handleChange} id="name" type="text" placeholder="Enter use login" />
                                {formik.errors.name && (
                                    <p className="errorMsg"> {formik.errors.name} </p>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label >Password</Form.Label>
                                <Form.Control value={formik.values.password}
                                    onChange={formik.handleChange} id="password" name="password" type="text" placeholder="Password" />
                                {formik.errors.password && (
                                    <p className="errorMsg"> {formik.errors.password} </p>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password Confirm</Form.Label>
                                <Form.Control type="text" id="confirmedPassword" name="confirmedPassword" value={formik.values.confirmedPassword} onChange={formik.handleChange}
                                    placeholder="Confirm your password" />
                                {formik.errors.confirmedPassword && (
                                    <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your email" />
                                {formik.errors.email && (
                                    <p className="errorMsg"> {formik.errors.email} </p>
                                )}
                            </Form.Group>

                            <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>

                            <Button style={{ "margin-top": "1rem" }} variant="primary" type="submit">
                                Create
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    )
}


export default CreateAccout