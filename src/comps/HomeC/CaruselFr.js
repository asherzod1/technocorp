import React, {useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';

export default function CaruselFr(props) {

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const [activeTab, setActiveTab] = useState('1');
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    return (

        <div>
            <div className="carusel-pr">
                <div className="wrapper">
                    <div className="row m-0">
                        <div className="col-md-7 col-lg-7 col-12 col-sm-12">
                            <div className="row">
                                <div className="col-md-1 col-lg-1 col-1 col-sm-1">
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({active: activeTab === '1'})}
                                                onClick={() => {
                                                    toggle('1');
                                                }}
                                            >
                                                <div className="circle">

                                                </div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({active: activeTab === '2'})}
                                                onClick={() => {
                                                    toggle('2');
                                                }}
                                            >
                                                <div className="circle">

                                                </div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({active: activeTab === '3'})}
                                                onClick={() => {
                                                    toggle('3');
                                                }}
                                            >
                                                <div className="circle">

                                                </div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({active: activeTab === '4'})}
                                                onClick={() => {
                                                    toggle('4');
                                                }}
                                            >
                                                <div className="circle">

                                                </div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({active: activeTab === '5'})}
                                                onClick={() => {
                                                    toggle('5');
                                                }}
                                            >
                                                <div className="circle">

                                                </div>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9">

                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <div className="tab-section">
                                                Fronted Devoloper
                                            </div>
                                            <div className="tab-ul">
                                                <ul>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Redux / Mobx / RxJS arxitekturasini ishlash tajribasi va
                                                        tushunchasi (kamida 2 yil)
                                                    </li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                </ul>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <div className="tab-section">
                                               Android Devoloper
                                            </div>
                                            <div className="tab-ul">
                                                <ul>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Redux / Mobx / RxJS arxitekturasini ishlash tajribasi va
                                                        tushunchasi (kamida 2 yil)
                                                    </li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                </ul>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <div className="tab-section">
                                                IOS Devoloper
                                            </div>
                                            <div className="tab-ul">
                                                <ul>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Redux / Mobx / RxJS arxitekturasini ishlash tajribasi va
                                                        tushunchasi (kamida 2 yil)
                                                    </li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                </ul>
                                            </div>

                                        </TabPane>
                                        <TabPane tabId="4">
                                            <div className="tab-section">
                                                Fronted Devoloper
                                            </div>
                                            <div className="tab-ul">
                                                <ul>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Redux / Mobx / RxJS arxitekturasini ishlash tajribasi va
                                                        tushunchasi (kamida 2 yil)
                                                    </li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                </ul>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="5">

                                            <div className="tab-section">
                                                Fronted Devoloper
                                            </div>
                                            <div className="tab-ul">
                                                <ul>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                    <li> Redux / Mobx / RxJS arxitekturasini ishlash tajribasi va
                                                        tushunchasi (kamida 2 yil)
                                                    </li>
                                                    <li> Shu sohada 2 yillik tajriba</li>
                                                </ul>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                            <div className="tab-button">
                                Batafsil
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 col-sm-12">
                            <div className="body-img">
                                <img className='img-fluid' src="/img/img.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};


