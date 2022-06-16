import React from "react";
import { Modal, Container } from "react-bootstrap";
// import { MdClose } from "react-icons/md";
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CancelIcon from '@material-ui/icons/Cancel';
import popupimg from "../../assets/img/FCR-June-Seychelles-Pop-Up.0583449e.jpg";

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
                            <img
                                src={popupimg}
                                alt="popup fishermans cove resort"
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    maxWidth: "600px",
                                    height: "auto"
                                }}
                            />
                        </a>
                    </Modal.Body>
                </div>
            </Container>
        </Modal>
    );
};



export default PopUp;