import React from "react";
import {Platform, StyleSheet, TouchableOpacity, View} from "react-native";
import {Button, Header, Icon, SocialIcon} from 'react-native-elements'

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.viewContainer}>
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
                    centerComponent={{text: 'Login', style: {color: '#fff'}}}
                />
                <View>
                    {this.props.loginForm}
                </View>
                <Button
                    loading
                    loadingRight
                    // disabled
                    backgroundColor={'#0091EA'}
                    color={'white'}
                    borderRadius={48}
                    buttonStyle={styles.signInButton}
                    icon={{name: 'login', type: 'material-community'}}
                    title='Login'
                    onPress={this.props.onLogin}
                />
                <Button
                    loading
                    loadingRight
                    // disabled
                    backgroundColor={'#0091EA'}
                    color={'white'}
                    borderRadius={48}
                    buttonStyle={styles.signInButton}
                    icon={{name: 'account-plus', type: 'material-community'}}
                    title='Register'
                    onPress={() => this.props.navigation.navigate('Register')}
                />
                <SocialIcon
                    title='Login With Facebook'
                    button
                    type='facebook'
                    onPress={() => this.props.navigation.navigate('Home')}
                    style={styles.signInFacebook}
                />
                <SocialIcon
                    title='Login with Google'
                    button
                    type='google-plus-official'
                />
                <SocialIcon
                    title='Login with Twitter'
                    button
                    type='twitter'
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#FFFFFF',
    },
    signInButton: {
        marginLeft: -9,
        margin: 7,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 14,
        paddingBottom: 14,
        // borderRadius:100,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .4)',
                shadowOffset: {height: 1, width: 1},
                shadowOpacity: 1,
                shadowRadius: 1,
            },
            android: {
                elevation: 2,
            },
        }),
        height: 52,
        width: 361,

    },
    signInFacebook: {
        // padding: 12,
        paddingLeft: 12,
        paddingRight: 12,
    }
});

export default Login;
