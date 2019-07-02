import api from '../../api/Blog';

export function search() {
    return (dispatch) => {
        api.posts().then(posts => {
            dispatch({ type: 'POSTS_ALL', payload: posts });
        });
    }
}