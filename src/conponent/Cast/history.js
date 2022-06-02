import React from "react";
import { connect } from 'react-redux'
import {
    Link
} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const History = (props) => {
    let listUsers = props.dataRedux;
    return (
        <>
            <p className="cast-title">History</p>
            <div className="list-movie">
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        let link = `/detailMovie/${item.id}`
                        let img = `https://image.tmdb.org/t/p/original${item.img}`
                        return (
                            index < 20 &&
                            <Link>
                                <div className="contain-cast">
                                    <div className="contain-cast-main">
                                        <div>
                                            <img className="img-cast" src={img} style={{ width: '100%' }} />
                                        </div>

                                        <div className="child" key={item.id}>
                                            <p className="title-name">{item.name}</p>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        )
                    })}
            </div>
        </>
    )
}
export default connect(mapStateToProps)((History));


