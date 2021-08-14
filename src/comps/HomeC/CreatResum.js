import React from 'react';

function CreatResum(props) {
    return (
        <div>
            <div className="resum-Cr">
                <div className="row m-0">
                    <div className="col-md-5 col-lg-5 col-sm-12 col-12 p-0">
                        <img className='img-fluid' src="/img/resum.png" alt=""/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                        <div className="container">
                            <div className="rezum-title">
                                Rezyume yuborish
                            </div>
                            <div className="rezum-text">
                                Rezyumeyingizni yuboring va biz albatta ko’rib chiqamiz!
                            </div>
                            <div className="input-P">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                                      <div className="input-label">
                                          Sizning ismingiz
                                      </div>
                                        <input className='form-control' type="text"/>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                                        <div className="input-label">
                                            Telefon raqamingiz
                                        </div>
                                        <input className='form-control' type="text"/>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                                        <div className="input-label">
                                            Sizning ismingiz
                                        </div>
                                        <input className='form-control' type="text"/>
                                    </div>
                                    <div className="col-lg-12 col-12 col-sm-12 col-md-12">
                                        <div className="input-label">
                                            O'zingiz haqingizda malumot
                                        </div>
                                        <textarea className='form-control'>

                                        </textarea>
                                    </div>
                                    <div className="col-lg-12 col-12 col-sm-12 col-md-12">
                                        <div className="input-pdf">
                                            <img src="/img/sk.png" alt=""/>
                                            <div className="pdf-text">
                                                Faylni biriktiring (.doc,.docx,.txt,.pdf 5Mb max)
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="rezum-button">
                                    Yuborish
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatResum;