import React,{useState} from 'react'
import './Messagesender.css'
import {Avatar}  from "@material-ui/core"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function MessageSender() {
    const [input,setInput] = useState('')
    const [imageurl,setImageurl]  = useState("")

    const handleSubmit = (e) => {
e.preventDefault()
setInput("")
setImageurl("")
    }
    return (
        <div className="messagesender" >
  <div className="messagesender__top">
      <Avatar/>
      <form>
          <input   value={input}  onChange={(e) =>  setInput(e.target.value)} placeholder={"What's on your mind?"}  className="messagesender__input" />
          <input value={imageurl}  onChange={(e) => setImageurl(e.target.value)}  placeholder="Image url (optional)" />
          <button onClick={handleSubmit}  type="submit" >Hidden Submit</button>
      </form>
  </div>
  <div className="messagesender__bottom">
      <div className="messagesender__option">
<VideocamIcon  style={{color:  "red"}} />
<h3>Live Video</h3>
      </div>
      <div className="messagesender__option">
<PhotoLibraryIcon  style={{color:  "green"}} />
<h3>Photos/Videos</h3>
      </div>
      <div className="messagesender__option">
<InsertEmoticonIcon style={{color:  "yellow"}} />
<h3>Feelings/Activity</h3>
      </div>
  </div>

        </div>
    )
}

export default MessageSender  
