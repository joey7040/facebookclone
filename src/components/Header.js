import React from 'react';
// import '../../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { useStateValue } from '../../context/StateProvider';
import '../css/Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
                alt='Facebook Logo'
                />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder='Search Facebook' type='text' />
                </div>
            </div>
            <div className="header__center">
                <div className="header__option--active">
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header__option'>
                <FlagIcon fontSize='large' />
                </div>
                <div className='header__option'>
                <SubscriptionsIcon fontSize='large' />
                </div>
                <div className='header__option'>
                <StorefrontIcon fontSize='large' />
                </div>
                <div className='header__option'>
                <SupervisorAccountIcon fontSize='large' />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src="https://avatars2.githubusercontent.com/u/29186781?s=460&u=e14a1dec89530d5427db49b2efbdb70db55fbb29&v=4" />
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>


            </div>
        </div>

    )
}

export default Header
