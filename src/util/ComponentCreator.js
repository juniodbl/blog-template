import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export function createComponentRedux(clazz, stateName, functions) {
    const mapStateToProps = state => {
        return {
            posts: state[stateName]
        }
    }

    const mapDispatchToProps = dispatch => {
        return bindActionCreators(functions, dispatch);
    }

    return connect(mapStateToProps, mapDispatchToProps)(clazz);
}