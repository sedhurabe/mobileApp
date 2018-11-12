import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {styles} from './style';

const H1 = ({ children, uppercase, style }) =>
    <Text style={[styles.titleH1, style]}>
        {uppercase?children.toUpperCase():children}
    </Text>;

H1.propTypes = {
    children: PropTypes.node.isRequired,
    uppercase: PropTypes.bool,
    style: PropTypes.any,
};

export default H1;