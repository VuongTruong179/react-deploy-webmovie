import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import './movie.css'
import ArrCard from "../../Child/arr_card";
import { Container, Row, Col, Card } from 'react-bootstrap';


class Movies extends React.Component {

    state = {
        categoryMovie: []
    }

    componentDidMount() {
        axios.get(`
        https://api.themoviedb.org/3/movie/${this.props.match.params.name}?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US&page=1`)
            .then(res => {
                this.setState({
                    categoryMovie: res.data.results
                })
            })

    }

    componentDidUpdate() {
        this.componentDidMount()
    }

    ClickMovie(id) {
        this.props.addUserRedux((id))
    }

    render() {

        let { categoryMovie } = this.state

        return (
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
                                <ArrCard
                                    itemState={categoryMovie}
                                    link={"/detailMovie"}
                                    index={"20"}
                                    number={4}
                                    col={"col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6"}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Movies)