import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import ArrCard from "../../../../Child/arr_card";

class DetailMovieOfCategory extends React.Component {

    state = {
        categoryMovies: []
    }

    componentDidMount() {
        axios.get(`
        https://api.themoviedb.org/3/discover/movie?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.match.params.id}&with_watch_monetization_types=flatrate`)
            .then(res => {
                this.setState({
                    categoryMovies: res.data.results
                })
            })

    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div class="mt-5">
                            <div class="row row-cols-md-4">
                                <ArrCard
                                    itemState={this.state.categoryMovies}
                                    link={"/detailMovie"}
                                    index={"20"}
                                    number={1}
                                    col={"col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4"}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default withRouter(DetailMovieOfCategory)