import React from 'react';

import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './chat.css';
import Kontakt from './Kontakt';
function Chat() {

    return (
        <div>
            <div className="gornji__dio">
                <div className="gornji__dio__naslov">
                    <h3>Kontakti</h3>
                </div>
                <div className="gornji__dio__ikone">
                    <CameraAltIcon/>
                    <SearchIcon/>
                    <MoreHorizIcon/>
                </div>
            </div>
            <div className="donji__dio">
                <Kontakt 
                    slika="https://media-exp1.licdn.com/dms/image/C4D03AQF2Na-3jQ1XBg/profile-displayphoto-shrink_200_200/0/1611239041860?e=1622678400&v=beta&t=0c4ZsIKr-m5l7ZlXM9-qN2HxhNR1iFcSCK3T4MDejGE"
                    ime="Kristijan Perković"
                />
                <Kontakt
                slika="https://d2halst20r4hcy.cloudfront.net/assets2/105/899/821/824/normal/20150602_2021553.jpg"
                ime="Brigita Perković"
                />
                <Kontakt
                slika="https://media-exp1.licdn.com/dms/image/C4D03AQHUrEoK5hCEmQ/profile-displayphoto-shrink_200_200/0/1597747048087?e=1622678400&v=beta&t=2xzFpKFACZGCa2erStGrUL8Wu22JTS5X1s8N0BE456A"
                ime="Valentino Poljak"/>
                <Kontakt
                slika="http://www.glas-slavonije.hr/Slike/2020/10/496496.jpg"
                ime="Edita Vidak"
                />
                <Kontakt
                slika="https://media-exp1.licdn.com/dms/image/C4D03AQFTDhilSZLE1Q/profile-displayphoto-shrink_200_200/0/1595793474300?e=1624492800&v=beta&t=Q4ktik8z3HKe-9S6Xvih8eTOhviS_SgNzzn87PZ-0xU"
                ime="Viktorija Sabo"/>
                <Kontakt
                slika="https://d1q1jqg91mol8o.cloudfront.net/eyJidWNrZXQiOiJjcnlwdG90YXNrLXB1YmxpYyIsImtleSI6IjAwMDAwMzE5MDQucy03ZGViZTViMmY2ZDE4ODc5MmRkYWM1Zjk2MWMxOTc5My5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9LCJyb3RhdGUiOm51bGx9fQ=="
                ime="Kristijan Mihaljinac"
                />
                <Kontakt
                slika="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564"
                ime="Lionel Messi"
                />
                <Kontakt
                slika="https://avatars.githubusercontent.com/u/37014410?v=4"
                ime="Jakov Kristović"/>
                <Kontakt
                slika="https://www.foi.unizg.hr/sites/default/files/styles/slike_na_vijestima_na_stranici__320x200_/public/field/image/esports.jpg?itok=7sS-hi3B"
                ime="Karlo Pavleka"/>
                <Kontakt
                slika="https://media-exp1.licdn.com/dms/image/C4D03AQE41Dy-rSECIQ/profile-displayphoto-shrink_200_200/0/1618900836420?e=1624492800&v=beta&t=BumXVSlhaPl_p3o4M4IHcAS3k6-5t1RvZjygPFWoo4Q"
                ime="Monika Peharda"/>
                <Kontakt
                slika="https://lh3.googleusercontent.com/proxy/coUzu9Da3tmk3-DMcftimLQiOSkT1YJyqWBG0jNFvZccDPnG25nlogstwHQBOWVn8Ma-R1rhbDO_4q1MUiZPdbdq-gfNEgdNWZ3mWG1FvuF4lfVh_gt6aDmEvo4gp34wSgL4BVom-4W4NHKldc0hcQVI2x-jwgLNHw"
                ime="Valentina Jelenčić"
                />
                <Kontakt
                slika="https://www.netokracija.com/wp-content/uploads/2018/11/3-2.png"
                ime="Kristijan Gašljević"/>
            </div>
        </div>
    );
}

export default Chat;