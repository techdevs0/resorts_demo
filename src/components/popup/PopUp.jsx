import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
// import { MdClose } from "react-icons/md";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CancelIcon from '@material-ui/icons/Cancel';
import popupimg from "../../assets/img/offers/valentine-offer.jpg";

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
                    
            <CancelIcon  class="icon"/>
        </span>
        <Container>
            <div>
                  
                    <Modal.Body>
                       <a href="https://be.synxis.com/?Hotel=31842&Chain=27304&promo=LeCardinal" > <img src={popupimg} alt="popup fishermans cove resort" className="img-fluid" style={{width:"100%" , maxWidth:"600px",height:"auto"}}/></a>
                    </Modal.Body>
            </div>
        </Container>
    </Modal>
);
};



export default PopUp;