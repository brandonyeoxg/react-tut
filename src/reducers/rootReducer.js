const initState = {
  posts: [
    {id: '1', title: 'Squirtle egg', body: 'lorem squirt'},
    {id: '2', title: 'Charmander egg', body: 'lorem char'},
    {id: '3', title: 'Helix egg', body: 'lorem helix'}
  ]
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (action.type === 'DELETE_POST') {
    console.log("deleting post");
    const newPosts = state.posts.filter(post => {
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
};

export default rootReducer;