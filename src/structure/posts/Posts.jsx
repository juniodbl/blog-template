import React from 'react';
import Post from './Post';
import { search } from './posts.actions';
import { createComponentRedux } from '../../util/ComponentCreator';

class Posts extends React.Component {
    componentDidMount() {
        this.props.search();
    }

    render() {
        return (
            <div className="w3-col l8 s12">
                {this.props.posts.map(post => (
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

export default createComponentRedux(Posts, "posts", { search });