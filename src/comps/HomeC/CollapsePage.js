import React, {useState} from 'react';
import {Card, CardBody, Collapse} from "reactstrap";

function CollapsePage(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
isOpen? document.querySelector('.button-coll6').style.backgroundColor='white':
        document.querySelector('.button-coll6').style.backgroundColor='#F6F6F6'
    }
    const toggle1 = () => {
        setIsOpen1(!isOpen1);
        isOpen1? document.querySelector('.button-coll1').style.backgroundColor='white':
            document.querySelector('.button-coll1').style.backgroundColor='#F6F6F6'
    }
    const toggle2 = () => {
        setIsOpen2(!isOpen2);
        isOpen2? document.querySelector('.button-coll2').style.backgroundColor='white':
            document.querySelector('.button-coll2').style.backgroundColor='#F6F6F6'
    }
    const toggle3 = () => {
        setIsOpen3(!isOpen3);
        isOpen3? document.querySelector('.button-coll3').style.backgroundColor='white':
            document.querySelector('.button-coll3').style.backgroundColor='#F6F6F6'
    }
    const toggle4 = () => {
        setIsOpen4(!isOpen4);
        isOpen4? document.querySelector('.button-coll4').style.backgroundColor='white':
            document.querySelector('.button-coll4').style.backgroundColor='#F6F6F6'
    }
    const toggle5 = () => {
        setIsOpen5(!isOpen5);
        isOpen5? document.querySelector('.button-coll5').style.backgroundColor='white':
            document.querySelector('.button-coll5').style.backgroundColor='#F6F6F6'
    }
    return (
        <div>
            <div className="container">
                <div className="collapse-title">
                    Eng ko’p beriladigan savollarga javob beramiz
                </div>
                <div className="collapse-P">
                    <button className='button-coll6' onClick={toggle}>Sizlarda ish vaqti qanday?
                        {
                            isOpen ? <img src="/img/p.png" alt=""/> :
                                <img src="/img/y.png" alt=""/>
                        }

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
                    <button className='button-coll1' onClick={toggle1}>Sizlarda ish vaqti qanday?
                        {
                            isOpen1 ? <img src="/img/p.png" alt=""/> :
                                <img src="/img/y.png" alt=""/>
                        }

                    </button>
                    <Collapse isOpen={isOpen1}>
                        <Card>
                            <CardBody>
                                <div className="footer-section1">
                                    Biz haqimizda
                                </div>
                                <div className="footer-section1">
                                    Yordam
                                </div>
                                <div className="footer-section1">
                                    Saytlarimiz
                                </div>
                                <div className="footer-section1">
                                    Bog'lanish
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <button className='button-coll2' onClick={toggle2}>Sizlarda ish vaqti qanday?
                        {
                            isOpen2 ? <img src="/img/p.png" alt=""/> :
                                <img src="/img/y.png" alt=""/>
                        }

                    </button>
                    <Collapse isOpen={isOpen2}>
                        <Card>
                            <CardBody>
                                <div className="footer-section1">
                                    Biz haqimizda
                                </div>
                                <div className="footer-section1">
                                    Yordam
                                </div>
                                <div className="footer-section1">
                                    Saytlarimiz
                                </div>
                                <div className="footer-section1">
                                    Bog'lanish
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <button className='button-coll3' onClick={toggle3}>Sizlarda ish vaqti qanday?
                        {
                            isOpen3 ? <img src="/img/p.png" alt=""/> :
                                <img src="/img/y.png" alt=""/>
                        }

                    </button>
                    <Collapse isOpen={isOpen3}>
                        <Card>
                            <CardBody>
                                <div className="footer-section1">
                                    Biz haqimizda
                                </div>
                                <div className="footer-section1">
                                    Yordam
                                </div>
                                <div className="footer-section1">
                                    Saytlarimiz
                                </div>
                                <div className="footer-section1">
                                    Bog'lanish
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <button className='button-coll4' onClick={toggle4}>Sizlarda ish vaqti qanday?
                        {
                            isOpen4 ? <img src="/img/p.png" alt=""/> :
                                <img src="/img/y.png" alt=""/>
                        }

                    </button>
                    <Collapse isOpen={isOpen4}>
                        <Card>
                            <CardBody>
                                <div className="footer-section1">
                                    Biz haqimizda
                                </div>
                                <div className="footer-section1">
                                    Yordam
                                </div>
                                <div className="footer-section1">
                                    Saytlarimiz
                                </div>
                                <div className="footer-section1">
                                    Bog'lanish
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <button className='button-coll5' onClick={toggle5}>Sizlarda ish vaqti qanday?
                        {
                            isOpen5 ? <img src="/img/p.png" alt=""/> :
                                <img src="/img/y.png" alt=""/>
                        }

                    </button>
                    <Collapse isOpen={isOpen5}>
                        <Card>
                            <CardBody>
                                <div className="footer-section1">
                                    Biz haqimizda
                                </div>
                                <div className="footer-section1">
                                    Yordam
                                </div>
                                <div className="footer-section1">
                                    Saytlarimiz
                                </div>
                                <div className="footer-section1">
                                    Bog'lanish
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>

            </div>
        </div>
    );
}

export default CollapsePage;