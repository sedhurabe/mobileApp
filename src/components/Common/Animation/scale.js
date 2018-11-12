import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

class Scale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
        };
    }

    UNSAFE_componentWillMount() {
        this._visibility = new Animated.Value(this.props.visible ? 1 : 0);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({ visible: true });
        }
        Animated.timing(this._visibility, {
            toValue: nextProps.visible ? 1 : 0,
            duration: 300,
        }).start(() => {
            this.setState({ visible: nextProps.visible });
        });
    }

    render() {
        const { style, children, ...rest } = this.props;

        const containerStyle = {
            opacity: this._visibility.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
            }),
            transform: [
                {
                    scale: this._visibility.interpolate({
                        inputRange: [0.8, 1],
                        outputRange: [0.8, 1],
                    }),
                },
            ],
        };

        const combinedStyle = [containerStyle, style];
        return (
            <Animated.View style={this.state.visible ? combinedStyle : containerStyle} {...rest}>
                {this.state.visible ? children : null}
            </Animated.View>
        );
    }
}

Scale.propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    children: PropTypes.node,
    visible: PropTypes.bool,
};

export default Scale;