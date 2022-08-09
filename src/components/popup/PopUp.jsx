import React from "react";
import { Modal, Container } from "react-bootstrap";
import CancelIcon from '@material-ui/icons/Cancel';
import popupimg from "../../assets/img/FCR-July-Seychelles.jpg";
// import LazyLoad from 'react-lazyload';

const PopUp = (props) => {


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="Documents"
            style={{ paddingLeft: "0px" }}
        >
            <span className={"modalIcon"} onClick={props.onHide}>

                <CancelIcon class="icon" />
            </span>
            <Container>
                <div>

                    <Modal.Body>
                        <a href={`/${props.activeLang}/offers/10-percentage-off-dinner-for-two`} >
                            {/* <LazyLoad height={200} > */}
                            <img
                                src={popupimg}
                                alt="popup Resorts Demo"
                                className="img-fluid"
                            // style={{
                            //     width: "100%",
                            //     maxWidth: "600px",
                            //     height: "auto"
                            // }}
                            />
                            {/* </LazyLoad> */}
                        </a>
                    </Modal.Body>
                </div>
            </Container>
        </Modal>
    );
};



export default PopUp;