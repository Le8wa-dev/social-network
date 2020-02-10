import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h2 className={s.posts__title}>My Posts</h2>
            <form className={s.posts__form}>
                <textarea placeholder="Your news"></textarea>
                <button type="submit">Add Post</button>
            </form>

            <div className={s.posts__list}>
                <Post message="Hi, how are you?" likes="15"/>
                <Post message="Hey doode, it's my first post!" likes="20"/>
            </div>
        </div>
    );
}

export default MyPosts;