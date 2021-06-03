import { RestaurantRounded } from '@material-ui/icons';
import React from 'react';
import Precaci from './Precaci';
import Storyes from './Storyes';
import './body.css';
import FormaObjava from './FormaObjava';
import UnosneIkone from './UnosneIkone';
import Objave from './Objave';
import Chat from './Chat';

function Body() {

    return (
        <div className="body__cijeli">
            <Precaci />
            <div className="body__sredina">
                <Storyes />
                <div className="unos__cijeli">
                    <FormaObjava />
                    <UnosneIkone/>
                    
                </div>
                <Objave/>
            </div>
            <Chat/>

        </div>
    );
}
export default Body;