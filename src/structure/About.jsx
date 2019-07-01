import React from 'react';
import api from '../api/Blog';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            about: {}
        }
    }

    componentDidMount() {
        api.about().then(about => {
            this.setState({
                about: about
            })
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="w3-card w3-margin w3-margin-top">
                    <img src={this.state.about.avatar} alt="avatar_g" style={{ width: '100%' }} />
                    <div className="w3-container w3-white">
                        <h4><b>{this.state.about.name}</b></h4>
                        <p>{this.state.about.about}</p>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}