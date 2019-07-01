import React from 'react';
import Post from './Post';
import api from '../api/Blog'

export default class Posts extends React.Component {
    render() {
        const posts = api.posts();

        return (
            <div className="w3-col l8 s12">
                {posts.map(post => (
                    <React.Fragment>
                        <Post image={post.image}
                            imageAlt={post.imageAlt}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                            content={post.content}
                            commentCount={post.commentCount} />
                        <hr />
                    </React.Fragment>
                ))}
            </div>
        );
    }
}