import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {styles} from './style';
import {config} from '../../../theme/config';

const P = ({ children, uppercase, style, numberOfLines }) =>
    <Text 
    	numberOfLines={numberOfLines} 
    	style={[styles.paragraph, style]}>
        {uppercase?children.toUpperCase():children}
    </Text>;
    
P.propTypes = {
    children: PropTypes.node.isRequired,
    uppercase: PropTypes.bool,
    numberOfLines: PropTypes.number,
    style: PropTypes.any,
};

export default P;	