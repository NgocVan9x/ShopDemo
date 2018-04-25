import React from 'react';
import {Provider} from 'react-redux';
import AppRouter from "./router";
import configureStore from './configureStore';
import {PersistGate} from 'redux-persist/es/integration/react';

const {persistor, store} = configureStore();

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    persistor={persistor}
                >
                    <AppRouter/>
                </PersistGate>
            </Provider>
        );
    }

}