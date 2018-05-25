import React from "react";
import {connect} from "react-redux";
import {fetchList} from "./actions";
import Register from '../../components/Account/Register';

class RegisterContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Register navigation={this.props.navigation}/>;
    }
}

function bindAction(dispatch) {
    return {
        fetchList: url => dispatch(fetchList(url)),
    };
}

const mapStateToProps = state => ({
    isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(RegisterContainer);
