import React from 'react';
import WebHeader from "../comps/webpage/WebHeader";
import LayOut from '../comps/smallcomp/LayOut'
import '../style/webPage.scss'
import AfZalliglarimiz from "../comps/webpage/AfZalliglarimiz";
import Tecnolog from "../comps/webpage/Tecnolog";
import CaruselP from "../comps/webpage/CaruselP";
function WebPage(props) {
    return (
        <div>
            <LayOut>
                <WebHeader/>
                <AfZalliglarimiz/>
                <Tecnolog/>
                <CaruselP/>
            </LayOut>
        </div>
    );
}

export default WebPage;