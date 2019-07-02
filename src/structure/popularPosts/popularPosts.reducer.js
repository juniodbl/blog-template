export const popularPostsReducer = (state = [], action = { payload: [] }) => {
    switch (action.type) {
        case 'POPULAR_POSTS_ALL':
            return action.payload.concat();
        default:
            return state;
    }
};