import React from 'react';
import s from './Users.module.css';
import userAvatar from './../../assets/images/user-avatar.png'
import { NavLink } from 'react-router-dom';


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
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
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
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                props.unfollow(u.id);

                            }
                            }>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                props.follow(u.id);

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