import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {styles} from './style';

const Wrapper = ({ children, style }) =>
    <View style={[styles.wrapperStyle, style]}>
        {children}
    </View>;

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.any,
};

export default Wrapper;