import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { config } from '../../../theme/config';

const styles = StyleSheet.create({
    buttonRow: {
        backgroundColor: config.yellow,
        borderColor: config.yellow,
        flexDirection: 'row',
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 7,
        width:'100%',
        height:57,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor:'transparent',
        color: config.black,
        fontSize: config.fsMedium,
        fontFamily: config.fontBold,
        lineHeight: config.fsMedium+11,
        width:'100%',
        padding: 5,
        textAlign: 'center'
    },
    buttonDisabled:{
        backgroundColor: config.buttonDisable,
        borderColor: config.buttonDisable,
    }
});

const Button = ({ label, uppercase, style, onPress, isDisable }) =>{
    return <TouchableOpacity onPress={onPress} style={[styles.buttonRow, isDisable && styles.buttonDisabled ]} disabled={isDisable}>
	    <Text style={[styles.button, style]}>
	        {uppercase?label.toUpperCase():label}
	    </Text>
    </TouchableOpacity>};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    borderColor: PropTypes.any,
    uppercase: PropTypes.bool,
    style: PropTypes.any,
    shadowColor:PropTypes.any,
    onPress: PropTypes.func,
    shadow: PropTypes.bool,
};

export default Button;