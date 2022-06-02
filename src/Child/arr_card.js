import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
class ArrCard extends React.Component {
    ClickMovie(id) {
        this.props.addUserRedux((id))
    }

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
                                                <div class="card-body">
                                                    <p class="card-text">{item.title}</p>
                                                    <p class="card-text">{item.release_date}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    }
                                    {
                                        this.props.number === 3 &&
                                        <Link to={link} onClick={() => this.ClickMovie(item)}>

                                            <div style={{
                                                "margin-top": "0.5rem",
                                                "white-space": "nowrap",

                                                "overflow": "hidden",
                                                "text-overflow": "ellipsis"
                                            }}>
                                                <p class="card-text">{(item.title || item.name)}</p>
                                            </div>
                                        </Link>
                                    }
                                    {
                                        this.props.number === 4 &&
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
                                </Link>
                            </div>
                        )
                    })}

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