import React from 'react';
import IdentitetObjave from './IdentitetObjave';
import './objava.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
function Objava() {
    return (
        <div className="objava">
            <div className="padding">
            <IdentitetObjave />
            <div className="tekst__objave">
                <p>Utakmica uživo na gol.hr i Nova TV</p>
            </div>
            <div className="slika__objave">
                <img src="https://www.tportal.hr/media/thumbnail/w1000/953713.jpeg" />
            </div>
            <div className="lajk__komentar">
                <div className="lajk__objava">
                    <ThumbUpAltIcon />
                    <p>10</p>
                </div>

                <div className="komentar__objava">
                    <p>5 komentara</p>
                </div>

            </div>
            <div className="svida__komentar__podjeli">
                <div className="svida__objava">
                    <ThumbUpAltIcon />
                    <p>Sviđa mi se</p>
                </div>
                <div className="komentiraj__objava">
                    <CommentIcon />
                    <p>Komentar</p>
                </div>
                <div className="podjeli__objava">
                    <ShareIcon />
                    <p>Podjeli</p>
                </div>
            </div></div>
        </div>
    );
}
export default Objava;