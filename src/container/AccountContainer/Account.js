import React from "react";
import {connect} from "react-redux";
import {fetchList} from "./actions";
import Account from '../../components/Account/Account';

class AccountContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Account navigation={this.props.navigation}/>;
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
export default connect(mapStateToProps, bindAction)(AccountContainer);
