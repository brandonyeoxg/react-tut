const initState = {
  posts: [
    {id: '1', title: 'Squirtle egg', body: 'lorem squirt'},
    {id: '2', title: 'Charmander egg', body: 'lorem char'},
    {id: '3', title: 'Helix egg', body: 'lorem helix'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;