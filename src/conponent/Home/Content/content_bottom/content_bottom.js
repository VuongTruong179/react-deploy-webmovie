import React from "react";
import { Row, Col, NavDropdown } from 'react-bootstrap';
import './content_bottom.css'
import ArrCard from "../../../../Child/arr_card";

class ContentBottom extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <Col className="container-bottom-left" xs={12} md={9}>

                        <h5 className="title-left">Latest Update</h5>
                        <NavDropdown.Divider />
                        <div class="mt-5">
                            <div class="row">
                                <ArrCard
                                    itemState={this.props.listMovies}
                                    link={"/detailMovie"}
                                    index={"20"}
                                    number={2}
                                    col={"col-xl-4 col-lg-6 col-md-6  col-sm-6 col-6"}
                                />
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <Row className="container-bottom-right">
                            <h5 className="title-right">Genres</h5>
                            <NavDropdown.Divider />

                            <ArrCard
                                itemState={this.props.allCategory}
                                link={"/category"}
                                index={"20"}
                                number={3}
                                col={"col-xl-6 col-lg-6 col-md-12 col-sm-3 col-3"}
                            />
                        </Row>
                    </Col>
                </Row>
            </>
        )
    }
}
export default ContentBottom