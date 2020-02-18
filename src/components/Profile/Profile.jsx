import React from 'react';
import './Profile.css';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

    return (
        <div className="page-content">

            <Profileinfo 
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus} />

            <MyPostsContainer />

        </div>
    );
}

export default Profile;