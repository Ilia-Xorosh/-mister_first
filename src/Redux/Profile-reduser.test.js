import profileReducer, {addPostActionCreator, deletePost, setUserProfile} from "./ProfileReducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, have are you?', likeCount: 5},
        {id: 2, message: 'It\'s my first post!', likeCount: 45}
    ],
    profile: null
}


test('Length of post should be incremented', () => {
    let action = addPostActionCreator("Its me");
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(3);
});

test('After deleting length of messages should by  decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(1);
});

test(`After deleting length shouldn't by  decrement if id is incorrect`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(2);
});
