import React from "react";
import './search.css';
import {
    Link
} from 'react-router-dom';

class Search extends React.Component {


    state = {
        content: [],
        arrMovie: [],
        show: false
    }

    clickSearch(event) {
        if (!this.state.settext) {
            alert('missing required')
            event.preventDefault()
            return;
        }
    }

    enterInput(event) {
        this.setState({
            settext: event.target.value,
        })
    }
    render() {

        let id = `/search/query=${this.state.settext}`


        return (
            <>
                <section className="inner_content new_index" style={{ 'background-image': 'url("https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/5GISMqlRXMEyBrgEqyvhaMMuQmJ.jpg")' }}>
                    <div id="media_v4" className="media discover">
                        <div className="column_wrapper">
                            <div className="content_wrapper wrap">
                                <div className="title">
                                    <h2>Welcome.</h2>
                                    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                                </div>

                                <div className="search">
                                    <form id="inner_search_form" action="/search" method="get" accept-charset="utf-8">
                                        <div>
                                            <input value={this.state.settext} type="text"
                                                onChange={(event) => this.enterInput(event)} dir="auto" id="inner_search_v4" name="query" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false" placeholder="Search for a movie, tv show, person......" />
                                        </div>

                                        {/* <Link to={id}> */}
                                        <input type="submit" value="Search" onClick={(event) => this.clickSearch(event)} />
                                        {/* </Link> */}
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}
export default Search;