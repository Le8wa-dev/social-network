import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map( p => {
        return <Post message={p.message} likes={p.likesCount} />
    });

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.posts}>
            <h2 className={s.posts__title}>My Posts</h2>
            <div className={s.posts__form}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={onAddPost}>Add Post</button>
            </div>

            <div className={s.posts__list}>
                
                { postsElements }
                
            </div>
        </div>
    );
}

export default MyPosts;