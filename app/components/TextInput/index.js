import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { FormLabel, FormInput } from 'react-native-elements'

const propTypes = {
  label: PropTypes.string,
};

const _TextField = (props) => {
  const { label, style, labelStyle } = props;
  return <View style = {style}>
    <FormLabel styles = {labelStyle}>{label}</FormLabel>
    <FormInput {...props}/>
  </View>
}

export default _TextField;