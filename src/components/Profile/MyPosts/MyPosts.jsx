import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from './../../../utils/validators/validators';
import { TextArea } from './../../common/formsControls/FormsControls';

const MyPosts = React.memo( props => {

    console.log('Rerender')
    let postsElements = props.posts.map(p => {
        return <Post message={p.message} key={p.id} likes={p.likesCount} />
    });

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.posts}>
            <h2 className={s.posts__title}>My Posts</h2>

            <AddNewPostFormRedux onSubmit={onAddPost} />

            <div className={s.posts__list}>

                {postsElements}

            </div>
        </div>
    );
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.posts__form}>
            <Field name='newPostText' component={TextArea} placeholder={'Your message'}
                validate={[required, maxLength10]} />
            <button>Add Post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;