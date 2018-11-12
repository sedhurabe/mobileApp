import React, { Component } from 'react';
import { View, Platform } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

import MainScreen from './src/containers/App';


const viewContainer = {
    backgroundColor:'#000', 
    flex: 1,
};

class App extends Component {
    render() {
        return (
            <View style={viewContainer}>
                <Provider store={store}><MainScreen /></Provider>
            </View>
        );
    }
}

export default App;