import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Text,
  Animated,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './style';
import {config} from '../../../../theme/config';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(10),
      labelFontSize: new Animated.Value(14),
    };
  }
 
  render() {
    const { placeholder, value, onChange, name, secureTextEntry, keyboardType, lastChild, multiline, numberOfLines, error } = this.props;
    const { fadeAnim, labelFontSize } = this.state;
    return (
      <View style={[styles.input, lastChild && { borderColor: 'transparent'} ]}>
        <TextInput
          value={value} 
          style={[styles.inputText, multiline && {height:75} ]}
          placeholder={placeholder}
          name={name}
          keyboardType ={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onChangeText={onChange}
          blurOnSubmit
          placeholderTextColor={config.placeHolderColor}
        />
      </View>
    );
  }
}

TextBox.propTypes = {
  value:PropTypes.string,
  onChange:PropTypes.func,
  name:PropTypes.string,
  secureTextEntry:PropTypes.bool,
  keyboardType:PropTypes.string,
  error: PropTypes.string
};

export default TextBox;