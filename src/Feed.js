import React from 'react';
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';


function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <Tweetbox />

            {/* Posts */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            
            
        </div>
    )
}


export default Feed
