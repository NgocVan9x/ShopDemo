import React from 'react';
import {Provider} from 'react-redux';
import AppRouter from './router';
import configureStore from './configureStore';
import {PersistGate} from 'redux-persist/es/integration/react';
import {StyleProvider} from 'native-base';
import getTheme from './theme/components';
import variables from './theme/variables/platform';
import { Root } from "native-base";

const {persistor, store} = configureStore();

export default class App extends React.Component {

    render() {
        return (
            <StyleProvider style={getTheme(variables)}>
                <Provider store={store}>
                    < PersistGate persistor={persistor}>
                        <Root>
                            < AppRouter/>
                        </Root>
                    </PersistGate>  
                </Provider>
            </StyleProvider>
        );
    }
}