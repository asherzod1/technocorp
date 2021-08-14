import React, {useState} from 'react';
import {Card, CardBody, Collapse} from "reactstrap";
import '../style/homeFransuz.scss'
function HomePageFransuz(props) {
    function toggle() {
        setIsOpen(!isOpen)
    }
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="Pr-header">
                Student
            </div>
            <div className="container">
              <div className="collapse-Pr">
                  <button className='button-coll' onClick={toggle}>
                      <div className="color-p">

                      </div>
                    <div className="text-coll">
                        <p>Sizlarda ish vaqti qanday?</p>
                        {
                            isOpen ? <img src="/img/down.png" alt=""/> :
                                <img src="/img/next.png" alt=""/>
                        }
                    </div>

                  </button>
                  <Collapse isOpen={isOpen}>
                      <Card>
                          <CardBody>
                              <div className="footer-section1">
                                  Ish kuni 8 soat + tushlik uchun 1 soat (jami 9 soat)
                              </div>
                              <div className="footer-section1">
                                  Yordam
                              </div>
                              <div className="footer-section1">
                                  Saytlarimiz
                              </div>

                          </CardBody>
                      </Card>
                  </Collapse>
              </div>
                <div className="collapse-Pr">
                    <button className='button-coll' onClick={toggle}>
                        <div className="color-p">

                        </div>
                        <div className="text-coll">
                            <p>Sizlarda ish vaqti qanday?</p>
                            {
                                isOpen ? <img src="/img/down.png" alt=""/> :
                                    <img src="/img/next.png" alt=""/>
                            }
                        </div>

                    </button>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>
                                <div className="footer-section1">
                                    Ish kuni 8 soat + tushlik uchun 1 soat (jami 9 soat)
                                </div>
                                <div className="footer-section1">
                                    Yordam
                                </div>
                                <div className="footer-section1">
                                    Saytlarimiz
                                </div>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                </div>
            </div>
    );
}

export default HomePageFransuz;