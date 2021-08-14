import React from 'react';
import XizmatlarComp from "../comps/XizmatlarComp";
import LayOut from "../comps/smallcomp/LayOut";
function XizmatlarPage(props) {
    return (
        <div>
            <LayOut>
                <XizmatlarComp/>
            </LayOut>
        </div>
    );
}

export default XizmatlarPage;