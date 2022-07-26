import React from "react";
import { Modal, Container } from "react-bootstrap";
import CancelIcon from '@material-ui/icons/Cancel';
import popupimg from "../../assets/img/FCR-July-Seychelles.jpg";
import { LazyImage } from "react-lazy-images";

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
                            <LazyImage
                                src={popupimg}
                                alt={"demonstration"}
                                debounceDurationMs={800}
                                placeholder={({ imageProps, ref }) => (
                                    <img
                                        ref={ref}
                                        src={popupimg}
                                        alt={imageProps.alt}
                                        style={{ width: "100%" }}
                                    />
                                )}
                                actual={({ imageProps }) => (
                                    <img {...imageProps} style={{ width: "100%" }} className="img-fluid" />
                                )}
                            />
                            {/* <img
                                src={popupimg}
                                alt="popup fishermans cove resort"
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    maxWidth: "600px",
                                    height: "auto"
                                }}
                            /> */}
                        </a>
                    </Modal.Body>
                </div>
            </Container>
        </Modal>
    );
};



export default PopUp;