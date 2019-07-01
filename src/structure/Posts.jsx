import React from 'react';
import Post from './Post';

export default class Posts extends React.Component {
    render() {
        return (
            <div className="w3-col l8 s12">
                <Post image="https://www.w3schools.com/w3images/woods.jpg" imageAlt="Nature"
                    title="TITLE HEADING"
                    description="Title description"
                    date="April 7, 2014"
                    content="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
                    commentCount="0" />
                <hr />
                <Post image="https://www.w3schools.com/w3images/bridge.jpg" imageAlt="Norway"
                    title="BLOG ENTRY"
                    description="Title description"
                    date="April 2, 2014"
                    content="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
                    commentCount="2" />
            </div>
        );
    }
}