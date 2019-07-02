import React from 'react';
import api from '../api/Blog';

export default class Tags extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: []
        }
    }

    componentDidMount() {
        api.tags().then(tags => {
            this.setState({
                tags: tags
            })
        });
    }

    render() {
        return (
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                        {
                            this.state.tags.map(tag => (
                                <span className={"w3-tag " + (tag.selected ? "w3-black" : "w3-light-grey w3-small") + " w3-margin-bottom"}>{tag.name}</span>
                            ))
                        }
                    </p>
                </div>
            </div>
        );
    }
}