import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import './detail.css';
import Cast from "../Cast/cast";
import { Row, Col, Card, Container } from "react-bootstrap";
import History from "../Cast/history";

class Detail extends React.Component {
    state = {
        detailMovie: [],
        listCast: [],
        listRecoment: []
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US`)
            .then(res => {
                this.setState({
                    detailMovie: res.data
                })
            })
    }
    render() {
        let id = this.props.match.params.id
        let { detailMovie, listCast, listRecoment } = this.state
        let imgBackground = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detailMovie.backdrop_path}`
        let img = `https://image.tmdb.org/t/p/original${detailMovie.poster_path}`
        return (
            <>
                <div>
                    <img className="img-main" src={imgBackground} alt="Snow" style={{ "width": "100%", "height": "250px" }} />
                </div>

                <Container className="container-detail">
                    <Row className="detail-left">
                        <Col className="movies-left" xs={12} md={3}>
                            <Card.Img className="img-detail" variant="top" src={img} />
                        </Col>

                        <Col className="movies-right" xs={12} md={9}>
                            <div class="text-block">
                                <h1>{detailMovie.original_title}</h1>
                                <p class="release">
                                    {detailMovie.release_date}(US)
                                </p>

                                <h3 dir="auto">Overview</h3>
                                <p>
                                    {detailMovie.overview}
                                </p>
                                <button>Watch Trailer</button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <History />
                    </Row>

                    <Row>
                        <Cast />
                    </Row>
                </Container>

            </>


        )
    }
}
export default withRouter(Detail)