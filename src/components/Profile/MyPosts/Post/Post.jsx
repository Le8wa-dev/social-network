import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <div className={s.item_avatar}>
                <img src="https://png.pngtree.com/element_our/20190604/ourmid/pngtree-user-avatar-boy-image_1482937.jpg" alt="" />
            </div>
            <p className={s.item_text}>{props.message}</p>
            <span>like<sup>{props.likes}</sup></span>
        </div>

    );
}

export default Post;