
import { Avatar } from '@material-ui/core';
import React from 'react';
import './story.css'

function Story(props){

    return(
        <div className="story__style" style={{backgroundImage:`url(${props.slika})`}}> 
            <Avatar className="story__avatar"src={props.avatar}/>
            <p>{props.ime}</p>
        </div>
    );
}
export default Story;