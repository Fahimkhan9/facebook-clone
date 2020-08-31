import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            {/* storreel */}
            <StoryReel/>
            {/* messagesender */},,,
            <MessageSender/>
            {/* post */}
            <Post
            // key={id}
            profilePic={"https://www.gstatic.com/tv/thumb/persons/614/614_v9_bc.jpg"}
            message={"wow"}
            image={"https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"}
            username={"Fahim alif"}
            timestamp={"timestamp"}

            />
            {/*  */}
              <Post
            
            // key={id}
            profilePic={"https://www.gstatic.com/tv/thumb/persons/614/614_v9_bc.jpg"}
            message={"wow"}
            // image={"https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"}
            username={"Fahim alif"}
            timestamp={"timestamp"}

            />
        </div>
    )
}

export default Feed
