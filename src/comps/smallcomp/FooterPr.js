import React,{useState} from 'react';
import '../../style/footer.scss'
import { Collapse, CardBody, Card } from 'reactstrap';
function FooterPr(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);
    return (
        <div>
            <div className="footer-P">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-lg-3 col-12">

                            <div className="footer-item">
                                <img src="/img/logo-1.png" alt=""/>
                            </div>
                            <div className="collapse-footer">
                                <button className='button-coll' onClick={toggle}>Biz haqimizda
                                    {
                                        isOpen1?
                                            <img src="/image/misus.png" alt=""/>:
                                            <img src="/image/plus.png" alt=""/>
                                    }
                                </button>

                                <Collapse isOpen={isOpen}>
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
                            <div className="footer-title">
                                Biz haqimizda
                            </div>
                            <div className="footer-text">
                                biz iste'dodli talabalar va noyob startapni birlashtirishga yordam berishni xohlaymiz
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className="collapse-footer">
                                <button className='button-coll' onClick={toggle1}>Markaz
                                    {
                                        isOpen1?
                                            <img src="/image/misus.png" alt=""/>:
                                            <img src="/image/plus.png" alt=""/>
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
                            </div>
                            <div className="footer-item-title">
                                Markaz
                                <ul>
                                    <li>Markaz haqida</li>
                                    <li>Markaz haqida</li>
                                    <li>Rahbariyat</li>
                                    <li>Mamuriyat</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className="collapse-footer">
                                <button className='button-coll' onClick={toggle2}>Xizmatlar
                                    {
                                        isOpen2?
                                            <img src="/image/misus.png" alt=""/>:
                                            <img src="/image/plus.png" alt=""/>
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
                            </div>

                            <div className="footer-item-title1">
                                Xizmatlar
                                <ul>
                                    <li>Veb dasturlash xizmati</li>
                                    <li>Mobil ilovalarni ishlab chiqish</li>
                                    <li>Rahbariyat</li>
                                    <li>Mamuriyat</li>
                                    <li>Markaz haqida</li>
                                    <li> Texnik hujjat ishlab chiqish xizmati</li>
                                    <li>Infograrika tayyorlash xizmati</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className="collapse-footer">
                                <button className='button-coll' onClick={toggle3}>Bizning manzilimiz
                                    {
                                        isOpen3?
                                            <img src="/image/misus.png" alt=""/>:
                                            <img src="/image/plus.png" alt=""/>
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
                            </div>

                            <div className="footer-item-sec">
                                Bizning manzilimiz
                                <p>Toshkent shahar, Mirobod tumani, Tolimarjon ko’chasi, 6-uy. 100105</p>
                            </div>
                            <div className="footer-item-sec-1">
                                Pochta indeksi:
                                <p>
                                    100105
                                </p>
                            </div>
                            <div className="footer-logo">
                                +998 (71) 299-86-88

                            </div>
                            <div className="footer-sec">
                                <img src="/img/f.png" alt=""/>
                                <img src="/img/tg.png" alt=""/>
                                <img src="/img/ins.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterPr;