import { Avatar } from '@material-ui/core';
import React from 'react';
import './objava.css';

function IdentitetObjave() {
    return (
        <div className="identitet__objave">
            <Avatar src="https://dnevnik.hr/static/hr/cms/dnevnik/img/fb-profile.png?4" />
            <div className="ime__korisnika">
                <p>DNEVNIK.hr</p>
                <p>1h</p>
            </div>
        </div>
    );
}
export default IdentitetObjave;