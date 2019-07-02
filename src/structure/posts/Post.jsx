import React from 'react';

export default class Post extends React.Component {
    render() {
        return (
            <div className="w3-card-4 w3-margin w3-white">
                <img src={this.props.image} alt={this.props.imageAlt} style={{ width: '100%' }} />
                <div className="w3-container">
                    <h3><b>{this.props.title}</b></h3>
                    <h5>{this.props.description}, <span className="w3-opacity">{this.props.date}</span></h5>
                </div>
                <div className="w3-container">
                    <p>{this.props.content}</p>
                    <div className="w3-row">
                        <div className="w3-col m8 s12">
                            <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                        </div>
                        <div className="w3-col m4 w3-hide-small">
                            <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">{this.props.commentCount}</span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}