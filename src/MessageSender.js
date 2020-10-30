import React from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'

function MessageSender() {
    let handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="messagesender">
            <div className="messagesender__top">
                <Avatar src= {process.env.PUBLIC_URL+'images/Profile.jpg'}/>
                <form>
                    <input placeholder="Whats on your Mind ?" className="form1"/>
                    <input placeholder="Image URL(optional)" className="form2"/>
                    <button onClick={handleSubmit} type="submit" className="hidebutton">Hidden Submit</button>
                </form>
            </div>
            
            <div className="messagesender__bottom">
            <div className= "messagesender__option" >
                <VideocamIcon style={{color:'red'}}/>
                <h4>Live Video</h4>
            </div>
            <div className= "messagesender__option">
            <PhotoLibraryIcon  style={{color:'green'}}/>
            <h4>Photo/Video</h4>
            </div>
            <div className= "messagesender__option" >
            <InsertEmotionIcon style={{color:"orange"}}/>
            <h4>Feeling/Activity</h4>
            </div>      
        </div>
    </div>
    )
}

export default MessageSender
 