import React from 'react';
import './Profile.css';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {

    return (
        <div className="page-content">

            <Profileinfo />

            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch} />

        </div>
    );
}

export default Profile;