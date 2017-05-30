import React from 'react';
import { View, ViewPropTypes } from 'react-native';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const propTypes = {
  label: ViewPropTypes.string,
};

const _TextField = (props) => {
  const { 
    containerStyle,

    label, 
    labelStyle, 
    labelContainerStyle, 
    labelFontFamily,

    inputStyle, 
    inputContainerStyle, 
    textInputRef,
    inputContainerRef,
    inputFocus,
    onChangeText,
    validator,
    textInputProps,

    errorMessage, 
    errorContainerStyle,
    errorLabelStyle,
    errorFontFamily,
  } = props;
  
  let _textInputProps = textInputProps || {};
  const { onEndEditing, value, ...otherTextInputProps } = _textInputProps;
  return <View style={containerStyle}>
      <FormLabel 
          containerStyle={labelStyle} 
          labelStyle={labelContainerStyle}
          labelFontFamily={labelFontFamily}>{label}</FormLabel>

      <FormInput 
          inputStyle={inputStyle} 
          containerStyle={inputContainerStyle}
          textInputRef={textInputRef}
          containerRef={inputContainerRef}
          focus={inputFocus}
          onChangeText={(text) => {
            if (onChangeText) {
              onChangeText(text);
            }
          }} 
          value={value}
          onEndEditing={(e) => {
            if (validator) {
              validator(e.nativeEvent.text);
            }
            if (onEndEditing) {
              onEndEditing(e);
            }
          }}

          {...otherTextInputProps}>
      </FormInput>

      <FormValidationMessage
          containerStyle={errorContainerStyle}
          labelStyle={errorLabelStyle}
          fontFamily={errorFontFamily}>{errorMessage}</FormValidationMessage>
  </View>
}

export default _TextField;