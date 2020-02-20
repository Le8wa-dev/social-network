import React from 'react';
import s from './Users.module.css';
import userAvatar from './../../assets/images/user-avatar.png'
import { NavLink } from 'react-router-dom';


let User = ({ user, followingInProgress, unfollow, follow }) => {

    return <div key={user.id} className={s.user}>
        <div className={s.logo}>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null
                    ? user.photos.small
                    : userAvatar
                } className={s.avatar} alt='user-avatar' />
            </NavLink>
            {user.followed
                ? <button className={s.btn} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id);
                }
                }>Unfollow</button>
                : <button className={s.btn} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id);
                }
                }>Follow</button>}
        </div>

        <div className={s.info}>
            <div className={s.info_name}>
                <h3 className={s.name}>{user.name}</h3>
                <p className={s.status}>I'm looking for friends</p>
            </div>
            <div className={s.info_location}>
                <p className={s.country}>{'u.location.country'}</p>
                <p className={s.city}>{'u.location.city'}</p>
            </div>
        </div>
    </div>
}

export default User;