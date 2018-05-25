import React, {Component} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Header, Icon} from "react-native-elements";

class RegisterScreen extends React.Component {
    render() {
        return (
            <View>
                <Header
                    placement="left"
                    leftComponent={
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack(null)}
                        >
                            <Icon
                                name='arrow-back'
                                color='#ffff'
                            />
                        </TouchableOpacity>
                    }
                    centerComponent={{text: 'Register', style: {color: '#fff'}}}
                />
                <Text>Register!</Text>
            </View>
        );
    }
}

export default RegisterScreen;
