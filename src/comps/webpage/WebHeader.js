import React from 'react';

function WebHeader(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-lg-5 col-sm-12 col-12">
                        <img className='img-fluid' src="/img/jamoa.png" alt=""/>
                    </div>
                    <div className="col-md-7 col-lg-7 col-12 col-sm-12">
                        <div className="web-title">
                            Veb dasturlash xizmati
                        </div>
                        <div className="web-text">
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which dont look
                            even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available,
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="web-sec-1">
                                    <div className="sec-title">
                                        Who we are
                                    </div>
                                    <div className="sec-text">
                                        There are many vtions of passages of Lorem Ipsum available, but the majority
                                        have suffered.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="web-sec-1">
                                    <div className="sec-title">
                                        Who we are
                                    </div>
                                    <div className="sec-text">
                                        There are many vtions of passages of Lorem Ipsum available, but the majority
                                        have suffered.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebHeader;