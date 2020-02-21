import React, { useState } from 'react';
import s from './Profileinfo.module.css'
import Preloader from './../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import avatar from './../../../assets/images/user-avatar.png'
import ProfileDataFormRedux from './ProfileDataForm';

const Profileinfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return (
            <Preloader />
        );
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit =(formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
        
    }

    return (
        <div className={s.user}>
            <div className={s.user_logo}>
                <img src={profile.photos.large || avatar} alt="user-logo" />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            </div>
            {editMode
                ? <ProfileDataFormRedux initialValue={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData profile={profile}
                    updateStatus={updateStatus}
                    status={status}
                    isOwner={isOwner}
                    goEditMode={() => setEditMode(true)} />
            }
        </div>
    );
}

const ProfileData = ({ profile, updateStatus, status, isOwner, goEditMode }) => {
    return <div className={s.user_info}>
        <h2 className={s.user_title}>{profile.fullName}</h2>
        {isOwner && <button className={s.user_info_btn} onClick={goEditMode} >Edit</button>}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <p className={s.item}><span>Date of Birth: </span> 01.06.1990</p>
        <p className={s.item}><span>About Me: </span>{profile.aboutMe}</p>
        <p className={s.item}><span>Looking for a job: </span> {profile.lookingForAJob ? 'Yes' : 'No'}</p>
        {profile.lookingForAJob &&
            <p className={s.item}><span>Professional skills: </span> {profile.lookingForAJobDescription}</p>
        }
        <div className={s.contactsInner}>
            <b>Contacts: </b>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <p className={s.item + ' ' + s.contact}><span>{contactTitle}:</span> <a href={'https://' + contactValue}>{contactValue}</a></p>
}
export default Profileinfo
