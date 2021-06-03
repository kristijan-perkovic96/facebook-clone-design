import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
import './precac.css';
function Precac(props){

    return(
        <div className="precac__div">
            <img src={props.slika}/>
            <h4>{props.tekst}</h4>
        </div>
    );
}
export default Precac;