import React from "react";
import Login from "../../components/Account/Login";
import {Field, reduxForm} from "redux-form";
import {StyleSheet, View} from "react-native";
import {FormInput, FormLabel, FormValidationMessage} from "react-native-elements";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? "Invalid email address"
        : undefined;
const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? "Only alphanumeric characters"
        : undefined;

class LoginForm extends React.Component {
    textInput: any;

    renderInput({input, label, type, meta: {asyncValidating, touched, error}}) {
        return (
            <View>
                <FormLabel>{label}</FormLabel>
                <FormInput ref={c => this.textInput = c}
                           placeholder={input.name === "email" ? "Email" : "Password"}
                           {...input}
                           secureTextEntry={input.name === "password" ? true : false}
                           inputStyle={error && touched && styles.error}
                />
                {error && touched && <FormValidationMessage>{error}</FormValidationMessage>}
            </View>
        );
    }

    login() {
        if (this.props.valid) {
            alert("login")
        } else {
            alert("fails")
        }
    }

    render() {
        const form = (
            <View style={styles.viewContainer}>
                <Field
                    label={'Email'}
                    name="email"
                    component={this.renderInput}
                    validate={[email, required]}
                />
                <Field
                    label={'Password'}
                    name="password"
                    component={this.renderInput}
                    validate={[alphaNumeric, minLength8, maxLength15, required]}
                />
            </View>
        );
        return (
            <Login
                navigation={this.props.navigation}
                loginForm={form}
                onLogin={() => this.login()}
            />
        );
    }
}

var styles = StyleSheet.create({
    viewContainer: {
        paddingTop: 5
    },
    error: {
        color: 'red'
    }
});
const LoginContainer = reduxForm({
    form: "login",
    asyncValidate: (values) => {
        return new Promise((resolve, reject) => {
            // simulate request
            setTimeout(() => {
                if (values.email.indexOf('@gmail.com') === -1) {
                    reject({email: 'Only mails at gmail are allowed'});
                } else {
                    resolve();
                }
            }, 1000);
        });
    },
    asyncBlurFields: ['email'],
})(LoginForm);

export default LoginContainer;
