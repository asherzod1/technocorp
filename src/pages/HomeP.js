import React from 'react';
import LayOut from "../comps/smallcomp/LayOut";
import HomeC from '../comps/HomeC/HomeC'
import CreatRezum2 from "../comps/HomeC/CreatRezum2";
import PerofessionalC from "../comps/HomeC/PerofessionalC";
import CaruselFr from "../comps/HomeC/CaruselFr";
import CollapsePage from "../comps/HomeC/CollapsePage";
import '../style/home.scss'
import ImgComp from "../comps/HomeC/ImgComp";
import CreatResum from "../comps/HomeC/CreatResum";
function HomeP(props) {
    return (
        <div>
            <LayOut>
                <HomeC/>
                <CaruselFr/>
                <CollapsePage/>
                <ImgComp/>
                <CreatResum/>
            </LayOut>
        </div>
    );
}

export default HomeP;