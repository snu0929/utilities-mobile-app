import React, { forwardRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputField = forwardRef(({ value, onChangeText, placeholder, keyboardType, multiline }, ref) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    placeholderTextColor="#bdc3c7"
    keyboardType={keyboardType}
    multiline={multiline}
    ref={ref}
  />
));

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#7f8c8d',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#34495e',
    color: '#ecf0f1',
  },
});

export default TextInputField;
