import { Avatar } from '@material-ui/core';
import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
import './chat.css';
function Kontakt(props){


    return(
        <div className="kontakt">
            <Avatar src={props.slika}/>
            <h4>{props.ime}</h4>   
        </div>
    );
}
export default Kontakt;