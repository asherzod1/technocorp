import React from 'react';
import NavbarPr from "./NavbarPr";
import FooterPr from "./FooterPr";

function LayOut(props) {
    return (
        <div>
            <NavbarPr/>
            {props.children}
            <FooterPr/>
        </div>
    );
}

export default LayOut;