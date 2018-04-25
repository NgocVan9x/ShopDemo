import React, {Component} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Header, Icon} from "react-native-elements";

class Account extends React.Component {

    render() {
        return (
            <View>
                <Header
                    placement="left"
                    leftComponent={<TouchableOpacity
                        onPress={() => this.props.navigation.goBack(null)}
                    >
                        <Icon
                            name='arrow-back'
                            color='#ffff'
                        />
                    </TouchableOpacity>}
                    centerComponent={{text: 'Account', style: {color: '#fff'}}}
                />
                <Text>Account!</Text>
            </View>
        );
    }
}

export default Account;
