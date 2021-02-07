import React, { useContext, useState } from 'react';
import { AccordionContext, Card, useAccordionToggle } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  // const decoratedOnClick = useAccordionToggle(
  //   eventKey,
  //   () => callback && callback(eventKey),
  // );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <h6 style={{padding:'0.5rem 0'}}> <i className={`pr-4 fa ${isCurrentEventKey ? 'fa-minus' : 'fa-plus'}`} /> 
      {children}
    </h6>
  );
}

const FAQSection = (props) => {

  const [currentIndex, setIndex] = useState(0);

  const setCurrentIndex = (index) => {
    setIndex(index);
  }

  return (
    <div className="faq-section-block">
      <div className="container">
        <h4 className="text-center main-title my-4">Frequently Asked Questions (F.A.Q's)</h4>
        <Accordion>
          {
            props.faqList?.map((x, i) => (
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={`${i}`} style={{ cursor: 'pointer' }} >
                  <ContextAwareToggle eventKey={`${i}`} >
                    {x.question}
                  </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={`${i}`}>
                  <Card.Body>
                    <p>{x.answer}</p>
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

export default FAQSection;