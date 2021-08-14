import React from 'react';
import Slider from "react-slick";
function CaruselP(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };
    return (
        <div>
            <div className="container">
                <div className="Techno">
                  Jamoa
                </div>
                <div className="techno-title">
                    Bizning dasturchilar
                </div>
                <Slider {...settings}>
                    <div>
                        <div className="img-car">
                            <img className='img-fluid' src="/img/per.png" alt=""/>
                            <div className="hover-img">
                                   <div className="left-brend">
                                       <ul>
                                           <li><img src="/img/git.png" alt=""/></li>
                                           <li><img src="/img/tel.png" alt=""/></li>
                                           <li><img src="/img/ug.png" alt=""/></li>
                                           <li><img src="/img/fas.png" alt=""/></li>
                                       </ul>
                                   </div>

                                <div className="hover-text">
                                    Otaqulov Sherzod
                                    <p>Frontend Devoloper</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="img-car">
                        <img className='img-fluid' src="/img/per.png" alt=""/>
                        <div className="hover-img">
                            <div className="left-brend">
                                <ul>
                                    <li><img src="/img/git.png" alt=""/></li>
                                    <li><img src="/img/tel.png" alt=""/></li>
                                    <li><img src="/img/ug.png" alt=""/></li>
                                    <li><img src="/img/fas.png" alt=""/></li>
                                </ul>
                            </div>

                            <div className="hover-text">
                                Otaqulov Sherzod
                                <p>Frontend Devoloper</p>
                            </div>

                        </div>
                    </div>
                    <div className="img-car">
                        <img className='img-fluid' src="/img/per.png" alt=""/>
                        <div className="hover-img">
                            <div className="left-brend">
                                <ul>
                                    <li><img src="/img/git.png" alt=""/></li>
                                    <li><img src="/img/tel.png" alt=""/></li>
                                    <li><img src="/img/ug.png" alt=""/></li>
                                    <li><img src="/img/fas.png" alt=""/></li>
                                </ul>
                            </div>

                            <div className="hover-text">
                                Otaqulov Sherzod
                                <p>Frontend Devoloper</p>
                            </div>

                        </div>
                    </div>
                    <div className="img-car">
                        <img className='img-fluid' src="/img/per.png" alt=""/>
                        <div className="hover-img">
                            <div className="left-brend">
                                <ul>
                                    <li><img src="/img/git.png" alt=""/></li>
                                    <li><img src="/img/tel.png" alt=""/></li>
                                    <li><img src="/img/ug.png" alt=""/></li>
                                    <li><img src="/img/fas.png" alt=""/></li>
                                </ul>
                            </div>

                            <div className="hover-text">
                                Otaqulov Sherzod
                                <p>Frontend Devoloper</p>
                            </div>

                        </div>
                    </div>
                    <div className="img-car">
                        <img className='img-fluid' src="/img/per.png" alt=""/>
                        <div className="hover-img">
                            <div className="left-brend">
                                <ul>
                                    <li><img src="/img/git.png" alt=""/></li>
                                    <li><img src="/img/tel.png" alt=""/></li>
                                    <li><img src="/img/ug.png" alt=""/></li>
                                    <li><img src="/img/fas.png" alt=""/></li>
                                </ul>
                            </div>

                            <div className="hover-text">
                                Otaqulov Sherzod
                                <p>Frontend Devoloper</p>
                            </div>

                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default CaruselP;