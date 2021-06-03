import React from 'react';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PhotoIcon from '@material-ui/icons/Photo';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import './forma.css';


function UnosneIkone() {

    return (
        <div className="unosne__ikone">
            <div className="ikona__kamera">
                <CameraAltIcon />
                <p className="tekst__ikone">Videoprijenos uživo</p>
            </div>
            <div className="ikona__slika">
                <PhotoIcon />
                <p className="tekst__ikone">Fotografija/videozapis</p>
            </div>
            <div className="ikona__emotikon">
                <EmojiEmotionsIcon />
                <p className="tekst__ikone">Osjećaj/aktivnost</p>
            </div>
        </div>
    );
}
export default UnosneIkone;
