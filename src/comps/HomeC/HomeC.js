import React from 'react';
import '../../style/home.scss'

function HomeC(props) {
    return (
        <div>
            <div className="container">
                <div className="row p-0">
                    <div className="col-12 col-md-6 col-sm-12 col-lg-6">
                        <div className="Home-he-title">
                            Technocorp komandasida karyera!
                        </div>
                        <div className="Home-he-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid debitis vitae earum
                            dolor recusandae, quos doloribus rerum, officiis eius illum impedit nesciunt, minima animi
                            magnam eos iste sed repellendus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                            aliquid debitis vitae earum dolor recusandae, quos doloribus rerum, officiis eius illum
                            impedit nesciunt, minima animi magnam eos iste sed repellendus! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Rem aliquid debitis vitae earum dolor recusandae, quos
                            doloribus rerum, officiis eius illum impedit nesciunt, minima animi magnam eos iste sed
                            repellendus!.s
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-12 col-lg-6">
                        <div className="Home-bg-img">
                            <img src="/img/g12.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeC;