import React, { Component } from 'react';
import { StyleSheet, View, NetInfo, BackHandler, Platform } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import WelcomeScreen from '../../components/Screens/Home';
import SignUpScreen from '../../components/Screens/SignUp';
import CarScreen from '../../components/Screens/Cars';
import MapScreen from '../../components/Screens/Map';

class AppRouter extends Component {
  render() {
    return (
        <Router>
            <Stack key='root' hideNavBar={true} panHandlers={null} swipeEnabled={false}>
                <Scene key='home' component={WelcomeScreen} initial />
                <Scene key='signup' component={SignUpScreen} />
                <Scene key='carlist' component={CarScreen} />
                <Scene key='map' component={MapScreen} />
            </Stack>
        </Router>      
    );
  }
}

export default AppRouter;