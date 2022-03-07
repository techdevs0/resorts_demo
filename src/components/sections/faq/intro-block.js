import React, { useContext, useState } from 'react';
import { AccordionContext, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
// import FAQCategories from './faq-categories';


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

const FAQIntroBlock = (props) => {

  const [currentIndex, setIndex] = useState(0);

  const setCurrentIndex = (index) => {
    setIndex(index);
  }

  return (
    <div className="intro-block">
      <div className="container">
        <h2 className="text-center main-title">Frequently Asked Questions (F.A.Q's)</h2>
        {/* <FAQCategories setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} /> */}
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

export default FAQIntroBlock;