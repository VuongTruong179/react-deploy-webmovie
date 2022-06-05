import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import Moment from "react-moment";
class ArrCard extends React.Component {

    ClickMovie(id) {
        this.props.addUserRedux((id))
    }

    render() {
        console.log(this.props.number)
        return (
            <>
                {this.props.itemState && this.props.itemState.length > 0 &&
                    this.props.itemState.map((item, index) => {
                        let link = `${this.props.link}/${item.id}`
                        let img = `https://image.tmdb.org/t/p/original${item.poster_path || item.poster_path}`
                        return (
                            index < this.props.index &&
                            <div class={this.props.col} style={{ "margin-bottom": "1rem" }}>
                                <Link to={link} >
                                    {
                                        this.props.number === 1 &&
                                        <Card style={{ "margin-bottom": "20px" }}>
                                            <Card.Img variant="top" src={img} />
                                            <Card.Body key={item.id} style={{ "height": "10.5rem" }}>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    {item.release_date}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    }

                                    {
                                        this.props.number === 2 &&
                                        <Link to={link} onClick={() => this.ClickMovie(item)}>
                                            <div className="container-bottom">
                                                <div>
                                                    <img class="card-img-bottom" src={img} />
                                                </div>
                                                <div key={item.id} class="card-body">
                                                    <p class="card-text-title card-text">{item.title}</p>
                                                    <p class="card-text"><Moment format="D MMM YYYY" withTitle>
                                                        {item.release_date}</Moment></p>
                                                    <p class="card-text"><Moment fromNow>
                                                        {item.release_date}</Moment>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    }
                                    {
                                        this.props.number === 3 &&
                                        <Link to={link} >

                                            <div style={{
                                                "margin-top": "0.5rem",
                                                "white-space": "nowrap",

                                                "overflow": "hidden",
                                                "text-overflow": "ellipsis"
                                            }}>
                                                <p key={item.id} class="card-text">{(item.title || item.name)}</p>
                                            </div>
                                        </Link>
                                    }
                                    {
                                        this.props.number === 4 &&
                                        <Link to={link} onClick={() => this.ClickMovie(item)}>
                                            <Card style={{ "margin-bottom": "20px" }}>
                                                <Card.Img variant="top" src={img} />
                                                <Card.Body key={item.id} style={{ "height": "8rem" }}>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        <Moment format="D MMM YYYY" withTitle>
                                                            {item.release_date}</Moment>
                                                    </Card.Text>
                                                    <Card.Text> <Moment fromNow>
                                                        {item.release_date}</Moment>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    }
                                </Link>
                            </div>
                        )
                    })
                }

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

export default connect(mapStateToProps, mapDispatchToProps)((ArrCard))