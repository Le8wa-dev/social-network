import React from 'react';
import s from './Users.module.css';
import Paginator from '../common/paginator/Paginator';
import User from './User';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

    return <div className={s.users}>
        <h2 className={s.title}>Users</h2>

        <Paginator currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize} />

        <div className={s.inner}>
            {
                users.map(u => <User key={u.id}
                    user={u}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow} />)
            }
        </div>

    </div>
}

export default Users;