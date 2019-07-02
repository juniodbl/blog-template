export const postReducer = (state = [], action = { payload: [] }) => {
    switch (action.type) {
        case 'POSTS_ALL':
            return action.payload.concat();
        default:
            return state;
    }
};