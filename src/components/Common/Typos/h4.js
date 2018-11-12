import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {styles} from './style';

const H4 = ({ children, uppercase, style, lastChild }) =>
    <Text style={[styles.titleH4, style, lastChild && styles.lastChild]}>
        {uppercase?children.toUpperCase():children}
    </Text>;

H4.propTypes = {
    children: PropTypes.node.isRequired,
    uppercase: PropTypes.bool,
    style: PropTypes.any,
    lastChild: PropTypes.any
};

export default H4;