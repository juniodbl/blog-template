import React from 'react';
import api from '../api/Blog';

export default () => {
    const tags = api.tags();

    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
                <p>
                    {
                        tags.map(tag => (
                            <span className={"w3-tag " + (tag.selected ? "w3-black" : "w3-light-grey w3-small") + " w3-margin-bottom"}>{tag.name}</span>
                        ))
                    }
                </p>
            </div>
        </div>
    );
}