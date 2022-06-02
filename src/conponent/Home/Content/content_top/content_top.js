import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './content_top.css'
import { connect } from 'react-redux'
import {
    Link
} from 'react-router-dom';


class Content extends React.Component {

    ClickMovie(id) {
        this.props.addUserRedux((id))
    }

    render() {
        return (
            <>
                <div class="container mt-5 size">
                    <div class="row row-cols-md-4">

                        {this.props.listMovies && this.props.listMovies.length > 0 &&
                            this.props.listMovies.map((item, index) => {
                                let link = `/detailMovie/${item.id}`
                                let img = `https://image.tmdb.org/t/p/original${item.poster_path}`
                                return (
                                    index < 7 &&
                                    <div class="col-xl col-lg col-sm-4 col-4">
                                        <Link to={link} onClick={() => this.ClickMovie(item)}>
                                            <Card style={{ "margin-bottom": "20px" }}>
                                                <Card.Img className="container-img" variant="top" src={img} />
                                                <Card.Body key={item.id} style={{ "height": "8rem" }}>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        {item.release_date}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </div>

                                )
                            })}
                    </div>
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserRedux: (userId) => dispatch({
            type: 'CREATE_USER', payload: userId
        })
    }

}
export default connect(mapStateToProps, mapDispatchToProps)((Content))