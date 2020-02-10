import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div className="page-content">

                <div className="user">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-520570876-1552598555.jpg?crop=0.617xw:0.412xh;0.215xw,0.0214xh&resize=640:*" alt="user-logo" className="user__logo" />
                    <div className="user__info">
                        <h2 className="user__info-title">Andrew S.</h2>
                        <p className="user__info-item">Date of Birth: 01.06.1990</p>
                        <p className="user__info-item">City: Moscow</p>
                        <p className="user__info-item">Education: MGU 2015</p>
                        <p className="user__info-item">Web Site: <a href="https://google.com">https://google.com</a></p>
                    </div>
                </div>

                <MyPosts />

        </div>
    );
}

export default Profile;