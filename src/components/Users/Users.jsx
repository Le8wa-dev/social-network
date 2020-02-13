import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../assets/images/user-avatar.png'

const Users = (props) => {

    let getUsers = ({ target }) => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }
        target.style.display = 'none';
    }


    // props.setUsers([
    //     { id: 1, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: false, fullName: 'Dmitriy', status: 'I wanna find friends', location: { city: 'Moscow', country: 'Russia' } },
    //     { id: 2, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: true, fullName: 'Alex', status: 'I love traveling', location: { city: 'Kiev', country: 'Ukrain' } },
    //     { id: 3, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: false, fullName: 'Elena', status: 'Just married', location: { city: 'S-Peterburg', country: 'Russia' } },
    //     { id: 4, photoURL: 'https://www.wydawnictwoliteratura.pl/pub/skin/wyd-skin/img/avatar.png', followed: true, fullName: 'Andrew', status: 'Looking for job', location: { city: 'N.Novgorod', country: 'Russia' } },
    // ]);


    return (
        <div className={s.users}>
            <h2 className={s.title}>Users</h2>

            <button onClick={getUsers}>Get Users</button>

            <div className={s.inner}>
                {
                    props.users.map(u => <div key={u.id} className={s.user}>
                        <div className={s.logo}>
                            <img src={u.photos.small != null
                                ? u.photos.small
                                : userAvatar
                            } className={s.avatar} alt='user-avatar' />
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>

                        <div className={s.info}>
                            <div className={s.info_name}>
                                <h3 className={s.name}>{u.name}</h3>
                                <p className={s.status}>{u.status}</p>
                            </div>
                            <div className={s.info_location}>
                                <p className={s.country}>{'u.location.country'}</p>
                                <p className={s.city}>{'u.location.city'}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}

export default Users;