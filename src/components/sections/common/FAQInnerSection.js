import React, { useContext, useState } from 'react';
import { AccordionContext, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import faqList from '../../pages/Rooms-Inner';

const pageurl = window.location.pathname;
const pageRout = pageurl.split('/');

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    // const decoratedOnClick = useAccordionToggle(
    //   eventKey,
    //   () => callback && callback(eventKey),
    // );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <div className="d-flex align-items-center">
            <i className={`pr-4 fa ${isCurrentEventKey ? 'fa-minus' : 'fa-plus'}`} />
            <h6 style={{ padding: '0.5rem 0' }}>
                {children}
            </h6>
        </div>
    );
}
    

const FAQInnerSection = (props) => {

     const [currentIndex, setIndex] = useState(0);

     const setCurrentIndex = (index) => {
       setIndex(index);
     }

    return (
        <div className="faq-section-block my-3 my-sm-5">
            <div className="container">
                <h4 className="text-center main-title mb-3 mb-sm-5">Frequently Asked Questions (F.A.Q's)</h4>
                <Accordion>
                    {
                        props.faqList?.map((x, i) => (
                            pageRout[2] === x.route &&
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={`${i}`} style={{ cursor: 'pointer' }} >
                                    <ContextAwareToggle eventKey={`${i}`} >
                                        {x.question}
                                    </ContextAwareToggle>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={`${i}`}>
                                    <Card.Body>
                                        <p dangerouslySetInnerHTML={{ __html: x.answer }}></p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))
                    }
                </Accordion>
            </div>
        </div>
    );
}

export default FAQInnerSection;