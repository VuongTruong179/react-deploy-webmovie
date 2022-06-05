import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import './detail.css';
import Cast from "../Cast/cast";
import { Row, Col, Card, Container, Button, Modal } from "react-bootstrap";
import History from "../Cast/history";
import Moment from "react-moment";

class Detail extends React.Component {
    state = {
        detailMovie: [],
        getVideo: [],
        modalShow: false
    }

    componentDidMount() {
        const getMovie = axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US`)
        const videoMovie = axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US`)
        axios.all([getMovie, videoMovie]).then(
            axios.spread((...res) => {
                this.setState(
                    {
                        detailMovie: res[0].data,
                        getVideo: res[1].data.results
                    });
            }))
    }
    render() {
        console.log(this.state.getVideo)
        let { detailMovie, modalShow, getVideo } = this.state
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
                                    <Moment format="D MMM YYYY" withTitle>
                                        {detailMovie.release_date}
                                    </Moment> (US)
                                </p>

                                <h3 dir="auto">Overview</h3>
                                <p>
                                    {detailMovie.overview}
                                </p>
                                <Button variant="primary" onClick={() => this.setState({
                                    modalShow: true
                                })}>
                                    Launch vertically centered modal
                                </Button>

                                <Modal show={modalShow}
                                    onHide={() => this.setState({
                                        modalShow: false
                                    })}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                >
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    {getVideo && getVideo.length > 0 &&
                                        getVideo.map((item, index) => {
                                            let link = `https://www.youtube.com/embed/${item.key}`
                                            return (
                                                <iframe width="auto" height="300" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            )
                                        })}
                                </Modal>
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