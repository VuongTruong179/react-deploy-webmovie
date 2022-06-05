import React from "react";
import { Container, Carousel } from 'react-bootstrap';
import Content from "./Content/content_top/content_top";
import ContentBottom from "./Content/content_bottom/content_bottom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './home.css'

class Home extends React.Component {

    state = {
        listTrending: [],
        allCategory: []
    };

    componentDidMount = () => {
        const requestOne = axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=2b1e2eb027ec24b8670a9da2666c0617")
        const requestAllCategory = axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US")


        axios.all([requestOne, requestAllCategory]).then(
            axios.spread((...res) => {
                this.setState(
                    {
                        listTrending: res[0] && res[0].data && res[0].data.results ? res[0].data.results : [],
                        allCategory: res[1].data.genres
                    });
            }))
    }

    render() {
        let { listTrending, allCategory } = this.state

        return (
            <>
                <Carousel>
                    {listTrending && listTrending.length > 0 &&
                        listTrending.map((item, index) => {
                            let img = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.poster_path}`
                            return (
                                index < 3 &&
                                <Carousel.Item>
                                    <img
                                        className="container-slier d-block w-100"
                                        src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8H64YmIYxpRJgSTuLUGRUSyi2kN.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Welcome to web</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            )
                        })}
                </Carousel>
                <Container className="container-title" style={{
                    "overflow": "hidden",
                    "height": "25rem",
                    "margin-top": "1rem",
                    "padding-right": "0px",
                    "padding-left": "0px",
                }}>
                    <div className="releases">
                        <div className="releases-container">
                            <h3 className="title">Popular Today</h3>
                        </div>
                    </div>
                    <Content listTrending={listTrending} />
                </Container>

                <Container style={{ "margin-top": "1rem" }}>
                    <ContentBottom listMovies={listTrending}
                        allCategory={allCategory} />
                </Container>

            </>
        )
    }
}

export default Home