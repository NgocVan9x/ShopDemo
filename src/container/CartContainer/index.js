import React from "react";
import {connect} from "react-redux";
import {fetchList} from "./actions";
import Cart from "../../components/Cart";

class CartContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Cart navigation={this.props.navigation}/>;
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
export default connect(mapStateToProps, bindAction)(CartContainer);
