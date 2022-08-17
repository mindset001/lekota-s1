import {View, Text} from 'react-native';
import React from 'react';
import {StyledTextInput} from '../styles/styledUtils';
import { colors } from '../utils/assets';

const Input = ({label, formikProps, formikKey, onChangeText, ...rest}) => {
  const inputStyles = {};

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }
  return (
    <StyledTextInput
      placeholder={label}
      onChangeText={formikProps.handleChange(formikKey)}
      onBlur={formikProps.handleBlur(formikKey)}
      style={inputStyles}
      placeholderTextColor={colors.lightGrey}
      {...rest}
    />
  );
};

export default Input;
