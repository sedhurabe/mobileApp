import React from 'react';
import {View, StyleSheet, Platform, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: '#120047',
    },
})

const StatusBarBackground = ({style}) =>
    <View style={[styles.statusBarBackground, style || {}]}>
    	<StatusBar barStyle={'light-content'} />
    </View>;

StatusBarBackground.propTypes = {
    style: PropTypes.any,
};    

export default StatusBarBackground;