import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from "axios";
import Moment from "react-moment";

class TvShow extends React.Component {

    state = {
        categoryMovie: []
    }

    componentDidMount() {
        axios.get(`
        https://api.themoviedb.org/3/tv/${this.props.match.params.name}?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US&page=1`)
            .then(res => {
                this.setState({
                    categoryMovie: res.data.results
                })
            })

    }
    componentDidUpdate() {
        this.componentDidMount()
    }

    // ClickMovie(id) {
    //     this.props.addUserRedux((id))
    // }

    render() {

        let { categoryMovie } = this.state

        return (
            <>

                <Container>
                    <div className="title-movies">
                        <h2>Popular Movies</h2>
                    </div>
                    <Row>
                        <Col className="movies-left" xs={12} md={3}>
                            <div className="search-movies-card">
                                <div class="search-filter_panel card">
                                    <p>Sort</p>
                                </div>

                                <div class="search-filter_panel card">
                                    <p>Filters</p>
                                </div>

                                <div class="search-filter_panel card">
                                    <p>Where To Watch</p>
                                </div>
                            </div>
                        </Col>


                        <Col xs={12} md={9}>

                            <div class="mt-5">
                                <div class="row row-cols-md-4">

                                    {categoryMovie && categoryMovie.length > 0 &&
                                        categoryMovie.map((item, index) => {
                                            let link = `/detailMovie/${item.id}`
                                            let img = `https://image.tmdb.org/t/p/original${item.poster_path}`
                                            return (
                                                index < 20 &&
                                                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">

                                                    <Card style={{ "margin-bottom": "20px" }}>
                                                        <Card.Img variant="top" src={img} />
                                                        <Card.Body key={item.id} style={{ "height": "8rem" }}>
                                                            <Card.Title>{item.original_name}</Card.Title>
                                                            <Card.Text>
                                                                <Moment format="D MMM YYYY" withTitle>
                                                                    {item.release_date}</Moment>
                                                            </Card.Text>
                                                            <Card.Text> <Moment fromNow>
                                                                {item.release_date}</Moment>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>

                                                </div>

                                            )
                                        })}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default withRouter(TvShow)