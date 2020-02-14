import React from 'react';
import s from './Users.module.css';
import userAvatar from './../../assets/images/user-avatar.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }



    return <div className={s.users}>
        <h2 className={s.title}>Users</h2>

        <div className={s.pagination}>

            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={() => { props.onPageChanged(p); }}>{p}</span>
            })}

        </div>

        <div className={s.inner}>
            {
                props.users.map(u => <div key={u.id} className={s.user}>
                    <div className={s.logo}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null
                                ? u.photos.small
                                : userAvatar
                            } className={s.avatar} alt='user-avatar' />
                        </NavLink>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    wthCredentials: true,
                                    headers: {
                                        'API-KEY': 'b1775b2f-c3a5-4509-8dc9-90b5629de7c3'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });

                            }
                            }>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    wthCredentials: true,
                                    headers: {
                                        'API-KEY': 'b1775b2f-c3a5-4509-8dc9-90b5629de7c3'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });

                            }
                            }>Follow</button>}
                    </div>

                    <div className={s.info}>
                        <div className={s.info_name}>
                            <h3 className={s.name}>{u.name}</h3>
                            <p className={s.status}>I'm looking for friends</p>
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
}

export default Users;