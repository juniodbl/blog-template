import React from 'react';

export default () => {
    const tags = ['New York', 'London', 'IKEA', 'NORWAY', 'DIY', 'Ideas', 'Baby', 'Family', 'News', 'Clothing', 'Shopping', 'Sports', 'Games'];

    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
                <p>
                    <span className="w3-tag w3-black w3-margin-bottom">Travel</span>
                    {
                        tags.map(tag => (
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">{tag}</span>
                        ))
                    }
                </p>
            </div>
        </div>
    );
}