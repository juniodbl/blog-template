import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from './popularPosts.actions';

class PopularPosts extends React.Component {
    componentDidMount() {
        this.props.search();
    }

    render() {
        return (
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {this.props.popularPosts.map(pp => (
                        <li className="w3-padding-16">
                            <img src={pp.image} alt="workshop" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                            <span className="w3-large">{pp.title}</span><br />
                            <span>{pp.subTitle}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        popularPosts: state.popularPosts
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularPosts);