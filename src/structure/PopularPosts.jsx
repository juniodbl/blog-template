import React from 'react';
import api from '../api/Blog';

export default () => (
    <div className="w3-card w3-margin">
        <div className="w3-container w3-padding">
            <h4>Popular Posts</h4>
        </div>
        <ul className="w3-ul w3-hoverable w3-white">
            {api.popularPosts().map(pp => (
                <li className="w3-padding-16">
                    <img src={pp.image} alt="workshop" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                    <span className="w3-large">{pp.title}</span><br />
                    <span>{pp.subTitle}</span>
                </li>
            ))}
        </ul>
    </div>
);