import { Avatar } from '@material-ui/core';
import React from 'react';
import './forma.css';

function FormaObjava(){

    return(
        <div className="formaUnos">
           <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQF2Na-3jQ1XBg/profile-displayphoto-shrink_200_200/0/1611239041860?e=1622678400&v=beta&t=0c4ZsIKr-m5l7ZlXM9-qN2HxhNR1iFcSCK3T4MDejGE" />
           <input placeholder="O čemu razmišljate, Kristijan?"/>
        </div>
    );
}
export default FormaObjava;