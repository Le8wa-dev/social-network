import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../assets/images/user-avatar.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={s.users}>
                <h2 className={s.title}>Users</h2>

                <div className={s.pagination}>

                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && s.selectedPage}
                            onClick={() => { this.onPageChanged(p); }}>{p}</span>
                    })}

                </div>

                <div className={s.inner}>
                    {
                        this.props.users.map(u => <div key={u.id} className={s.user}>
                            <div className={s.logo}>
                                <img src={u.photos.small != null
                                    ? u.photos.small
                                    : userAvatar
                                } className={s.avatar} alt='user-avatar' />
                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
        )
    }
}

export default Users;