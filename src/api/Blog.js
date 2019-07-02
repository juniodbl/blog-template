const resources = {
    ABOUT: 'about',
    POSTS: 'posts',
    POPULAR_POSTS: 'popularPosts',
    TAGS: 'tags'
}

function fetchResource(recurso) {
    return fetch(`http://localhost:3001/${recurso}`)
        .then(resp => resp.text())
        .then(text => (async() => (JSON.parse(text)))())
}

export default {
    about: () => {
        return fetchResource(resources.ABOUT);
    },
    posts: () => {
        return fetchResource(resources.POSTS);
    },
    popularPosts: () => {
        return fetchResource(resources.POPULAR_POSTS);
    },
    tags: () => {
        return fetchResource(resources.TAGS);
    }
};