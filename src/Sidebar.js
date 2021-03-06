import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow.js'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import {ExpandMoreOutlined} from '@material-ui/icons'

function Sidebar() {
    return (
        <div className= "sidebar">
            <SidebarRow src = {process.env.PUBLIC_URL+'images/Profile.jpg'} 
            title = 'Nimith M Gowda'/>
            <SidebarRow Icon = {LocalHospitalIcon} 
            title = "Covid 19 information Center"/>
            <SidebarRow Icon = {EmojiFlagsIcon} title = "Pages"/>
            <SidebarRow Icon = {PeopleIcon} title = "Friends"/>
            <SidebarRow Icon = {ChatIcon} title = "Messenger"/>
            <SidebarRow Icon = {StorefrontIcon} title = "MarketPlace"/>
            <SidebarRow Icon = {VideoLibraryIcon} title = "Videos "/>
            <SidebarRow Icon = {ExpandMoreOutlined} title = "More"/>
        </div>
    )
}

export default Sidebar;