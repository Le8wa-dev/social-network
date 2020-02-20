import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 35 },
        { id: 2, message: 'It\'s my first post', likesCount: 12 },
    ]
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('Love swimming');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('message new post should be correct', () => {
    let action = addPostActionCreator('Love swimming');

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe('Love swimming');
});

it('after deleting length of messages should be decremented', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

it('after deleting length should not be decremented if id is incorrect', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});


