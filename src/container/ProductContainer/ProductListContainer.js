//import liraries
import React, {Component} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import {connect} from "react-redux";
import datas from "./data";
import {fetchList} from "./actions";
import ListCar from '../../components/Product/product-list';

// create a component
class ListCarContainer extends Component {
    render() {
        const {params} = this.props.navigation.state;
        const itemId = params
            ? params.itemId
            : null;
        const otherParam = params
            ? params.otherParam
            : null;
        
        return (
            <View style={styles.container}>
                <Text>CarContainer</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <ListCar></ListCar>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
});

//make this component available to the app
function bindAction(dispatch) {
    return {
        fetchList: url => dispatch(fetchList(url))
    };
}

const mapStateToProps = state => ({data: state.homeReducer.list, isLoading: state.homeReducer.isLoading});
export default connect(mapStateToProps, bindAction)(ListCarContainer);
