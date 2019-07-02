import api from '../../api/Blog';

export function search() {
    return (dispatch) => {
        api.popularPosts().then(popularPosts => {
            dispatch({ type: 'POPULAR_POSTS_ALL', payload: popularPosts })
        });
    }
}