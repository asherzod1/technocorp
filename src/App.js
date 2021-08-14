import React from 'react';

import HomeP from "./pages/HomeP";


import './style/navbar.scss'
import WebPage from "./pages/WebPage";
import XizmatlarPage from "./pages/XizmatlarPage";
import {BrowserRouter,Route,Switch} from "react-router-dom";
function App(props) {
    const routes=[
        {path:'/' , component:HomeP},
        {path:'/web' , component:WebPage},
        {path:'/xizmat' , component:XizmatlarPage},
    ]
    return (
          <>
              <BrowserRouter>
                  <Switch>
                      {
                          routes.map(item=>(
                              <Route exact path={item.path} component={item.component}/>
                          ))
                      }
                  </Switch>
              </BrowserRouter>
          </>


    );
}

export default App;