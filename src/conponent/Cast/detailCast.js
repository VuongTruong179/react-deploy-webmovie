import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './cast.css'

import { Row, Col, Card, Container } from "react-bootstrap";

const CastDetail = () => {

    const [detailCast, setDetailCast] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US`)
            .then(res => {
                setDetailCast(res.data)
            })

    }, []);

    let img = `https://image.tmdb.org/t/p/original${detailCast.profile_path}`
    return (
        <Container style={{ "margin-top": "1rem" }}>
            <Row className="detail-left">
                <Col xs={12} md={3}>
                    <Card.Img className="img-detail" variant="top" src={img} />
                </Col>

                <Col xs={12} md={9}>
                    <div class="text-block">
                        <h1>{detailCast.name}</h1>
                        <p class="release">{detailCast.release_date}(US)</p>
                        <p>Birthday: {detailCast.birthday}</p>
                        <p>Biography: {detailCast.biography}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CastDetail