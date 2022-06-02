import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './cast.css'
import { connect, useDispatch } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const Cast = () => {

    const [castMovie, setCastMovie] = useState([]);

    const { id } = useParams();

    const ClickMovie = useDispatch()


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=2b1e2eb027ec24b8670a9da2666c0617&language=en-US`)
            .then(res => {
                setCastMovie(res.data.cast)
            })

    }, []);
    return (
        <>
            <p className="cast-title">Series Cast</p>
            <div className="list-movie">
                {castMovie && castMovie.length > 0 &&
                    castMovie.map((item, index) => {
                        let link = `/detailCast/${item.id}`
                        let img = `https://image.tmdb.org/t/p/original${item.profile_path}`
                        return (
                            index < 20 &&
                            <Link to={link} onClick={() => ClickMovie({ type: 'CREATE_USER', payload: item })}>
                                <div className="contain-cast">
                                    <div className="contain-cast-main">
                                        <div>
                                            <img className="img-cast" src={img} alt="Snow" style={{ width: '100%' }} />
                                        </div>

                                        <div className="child" key={item.credit_id}>
                                            <p className="title-name">{item.name}</p>
                                            {/* <p className="date">{item.character}</p> */}
                                        </div>

                                    </div>
                                </div>
                            </Link>

                        )
                    })}
            </div>
        </>
    );
}

export default connect(mapStateToProps)((Cast))