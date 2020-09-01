import React from 'react';
import './Post.css'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    username, 
    verified, 
    // timestamp, 
    text,
    image, 
    avatar 
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar
                    src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/q8yh1SmySmy5BNapeDem"
                    alt=""
                />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Rafeh Qazi 
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a twitter clone with clever programmer</p>
                    </div>
                </div>
                <img 
                    src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
                    alt=""
                />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
