import React from 'react';
import './Tweetbox.css';
import { Avatar, Button } from '@material-ui/core';

function Tweetbox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar 
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/q8yh1SmySmy5BNapeDem"
                        alt=""
                    /> 
                    <input placeholder="What's happenning?" type="text" />
                </div>
                    <input 
                        className="tweetBox__imageInput"
                        placeholder="Optional: Enter Image url" 
                        type="text" 
                    />
                <Button className="tweetBox__tweetButton">Tweet</Button> 
            </form>
        </div>
    )
}

export default Tweetbox
 