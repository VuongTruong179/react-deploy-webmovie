import React from "react";
import Search from "./Search/search";
import { Container } from 'react-bootstrap';
import Content from "./Content/content_top/content_top";
import ContentBottom from "./Content/content_bottom/content_bottom";
import axios from "axios";

class Home extends React.Component {

    state = {
        listAction: [],
        allCategory: []
    };

    componentDidMount = () => {
        const requestOne = axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=27&with_genres=27&with_watch_monetization_types=flatrate")
        const requestAllCategory = axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US")


        axios.all([requestOne, requestAllCategory]).then(
            axios.spread((...res) => {
                this.setState(
                    {
                        listMovies: res[0] && res[0].data && res[0].data.results ? res[0].data.results : [],
                        allCategory: res[1].data.genres
                    });
            }))
    }

    render() {
        let { listMovies, allCategory } = this.state

        return (
            <>
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
                    <Content listMovies={listMovies} />
                </Container>

                <Container style={{ "margin-top": "1rem" }}>
                    <ContentBottom listMovies={listMovies}
                        allCategory={allCategory} />
                </Container>

            </>
        )
    }
}

export default Home