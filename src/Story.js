import React from 'react'
import './Story.css'
import {Avatar} from '@material-ui/core';

function Story({profilesrc,image,profilename}) {
    return (
        <div className="story" style={{backgroundImage:`url(${image})`}}>
            <Avatar className="avatar" src= {profilesrc}/>
    <h4>{profilename }</h4>
        </div>
    )
}

export default Story
