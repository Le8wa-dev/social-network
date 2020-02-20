import React from 'react';
import s from './Profileinfo.module.css'
import Preloader from './../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const Profileinfo = ({ profile, status, updateStatus }) => {

    if (!profile) {
        return (
            <Preloader />
        );
    }

    return (
        <div className={s.user}>
            <img className={s.user_logo} src={profile.photos.large} alt="user-logo" />
            <div className={s.user_info}>
                <h2 className={s.user_title}>{profile.fullName}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <p className={s.item}>Date of Birth: 01.06.1990</p>
                <p className={s.item}>City: Moscow</p>
                <p className={s.item}>Education: MGU 2015</p>
                <p className={s.item}>Web Site: <a href="https://google.com">https://google.com</a></p>
            </div>
        </div>
    );
}

export default Profileinfo
