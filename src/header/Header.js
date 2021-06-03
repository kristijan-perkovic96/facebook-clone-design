import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import GamesIcon from '@material-ui/icons/Games';
import MenuIcon from '@material-ui/icons/Menu';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './header.css';
import { Avatar } from '@material-ui/core';
function Header() {


    return (
        <div className="header__cijeli">
            <div className="header__lijevi">
                <img className="logo__facebook" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
                <div className="search__div">
                    <SearchIcon />
                    <input className="input__header" placeholder="Pretraži Facebook" />
                </div>
            </div>
            <div className="header__sredina">
                <div className="izbornik__option">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="izbornik__option">
                    <MovieIcon fontSize="large" />
                </div>
                <div className="izbornik__option">
                    <AccountBalanceIcon fontSize="large" />
                </div>
                <div className="izbornik__option">
                    <PeopleOutlineIcon fontSize="large" />
                </div>
                <div className="izbornik__option">
                    <GamesIcon fontSize="large" />
                </div>


            </div>
            <div className="header__desno">
                <div className="avatar__header">
                    <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQF2Na-3jQ1XBg/profile-displayphoto-shrink_200_200/0/1611239041860?e=1622678400&v=beta&t=0c4ZsIKr-m5l7ZlXM9-qN2HxhNR1iFcSCK3T4MDejGE" />
                    <p>Kristijan</p>
                </div>

                <div className="desna__opcija">
                    <MenuIcon fontSize="large" />
                </div>
                <div className="desna__opcija">
                    <MessageIcon fontSize="large" />
                </div>
                <div className="desna__opcija">
                    <NotificationsIcon fontSize="large" />
                </div>
                <div className="desna__opcija">
                    <ArrowDropDownIcon fontSize="large" />
                </div>
            </div>
        </div>
    );
}
export default Header;
