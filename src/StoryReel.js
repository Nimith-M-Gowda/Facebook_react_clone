import React from 'react'
import './StoryReel.css'
import Story from './Story.js'


function StoryReel() {
    return (
        <div className="storyreel">
            <Story 
            profilesrc={process.env.PUBLIC_URL+'images/messi.jpg'}
            image={process.env.PUBLIC_URL+'images/messi.jpg'}
            profilename='Messi'
            />
            <Story 
            profilesrc={process.env.PUBLIC_URL+'images/ronaldo.jpg'}
            image={process.env.PUBLIC_URL+'images/ronaldo.jpg'}
            profilename='Ronaldo'
            />
            <Story 
            profilesrc={process.env.PUBLIC_URL+'images/neymar.jpg'}
            image={process.env.PUBLIC_URL+'images/neymar.jpg'}
            profilename='Neymar'
            />
            <Story 
            profilesrc={process.env.PUBLIC_URL+'images/bale.jpg'}
            image={process.env.PUBLIC_URL+'images/bale.jpg'}
            profilename='Bale'
            />
            <Story 
            profilesrc={process.env.PUBLIC_URL+'images/dravid.jpg'}
            image={process.env.PUBLIC_URL+'images/dravid.jpg'}
            profilename='Dravid'
            />
        </div>
    )
}

export default StoryReel
 