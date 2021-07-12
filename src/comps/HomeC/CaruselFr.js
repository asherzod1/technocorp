import React from 'react';
import {Carousel,Radio} from 'antd';

  export  default function CaruselFr(props) {

    const [dotPosition, setDotPosition] = React.useState('top');

      const contentStyle = {
          height: '160px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'center',
          background: '#364d79',
      };


    return (

        <div>
            <div className="carusel-pr">
                <Carousel dotPosition={dotPosition}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};


