import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import {Avatar} from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { IconButton } from '@material-ui/core';


function Header() {
    return (
        <div className = 'header'>
        <div className = "header__left">
        <img src = {process.env.PUBLIC_URL+'images/facebook.png'} alt = 'facebook logo'/>
        <div className = "header__input">
        <SearchIcon fontSize = "large"/>
        <input type = 'text' placeholder="Search FaceBook" />
        </div>
        </div>

        <div className = 'header__middle'>
        <div className = "header__option header__option--active">
        <HomeIcon fontSize='large'/>
        
        </div>
        <div className = "header__option ">
        <FlagIcon/>
        </div>
        <div className = "header__option">
        <SubscriptionsIcon/>
        </div>
        <div className = "header__option">
        <StorefrontIcon/>
        </div>
        <div className = "header__option">
        <SupervisedUserCircleIcon/>
        </div>
        </div>


        <div className = 'header__right'>
        <div className = "header__info">
        <Avatar src= {process.env.PUBLIC_URL+'images/Profile.jpg'}/>
        <h4 align-text="center">Nimith M Gowda</h4>
        </div>
        <IconButton>
        <AddIcon/>
        </IconButton>
            
        <IconButton>  
        <ForumIcon/>
        </IconButton>
            
        <IconButton>
        <NotificationsActiveIcon/></IconButton>
            
        <IconButton>
        <ExpandMoreIcon/>
        </IconButton>
            
        </div>

        </div>
    )
}

export default Header
