import React from "react";
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import './createAccout.css'

class CreateAccout extends React.Component {
    render() {
        return (
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


                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="user" placeholder="Enter use login" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password (4 characters minimum)</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password Confirm</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="user" placeholder="Email" />
                            </Form.Group>

                            <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>

                            <Button style={{ "margin-top": "1rem" }} variant="primary" type="submit">
                                Create
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default CreateAccout