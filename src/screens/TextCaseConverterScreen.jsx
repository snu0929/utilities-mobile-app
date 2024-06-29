import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Clipboard, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';
import TextInputField from '../components/TextInputField';

const TextCaseConverterScreen = () => {
  const [text, setText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const textInputRef = useRef(null);

  const handleConvertToLower = () => {
    setConvertedText(text.toLowerCase());
  };

  const handleConvertToUpper = () => {
    setConvertedText(text.toUpperCase());
  };

  const handleConvertToTitleCase = () => {
    const words = text.toLowerCase().split(' ');
    const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    setConvertedText(titleCaseWords.join(' '));
  };

  const handleCopyToClipboard = async () => {
    if (!convertedText) {
      Alert.alert('Nothing to copy', 'Please convert some text first.');
      return;
    }

    try {
      await Clipboard.setString(convertedText);
      Alert.alert('Copied to clipboard', 'The converted text has been copied.');
    } catch (error) {
      Alert.alert('Copy failed', 'Something went wrong while copying the text.');
    }
  };

  const clearInput = () => {
    setText('');
    setConvertedText('');
    textInputRef.current.clear();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Text Case Converter</Text>
      <TextInputField
        ref={textInputRef}
        placeholder="Enter text to convert"
        multiline
        value={text}
        onChangeText={setText}
      />
      <View style={styles.buttonsContainer}>
        <CustomButton title="Lowercase" onPress={handleConvertToLower} />
        <CustomButton title="Uppercase" onPress={handleConvertToUpper} />
        <CustomButton title="Title Case" onPress={handleConvertToTitleCase} />
      </View>
      <TouchableOpacity style={styles.copyButton} onPress={handleCopyToClipboard}>
        <Text style={styles.copyButtonText}>Copy to Clipboard</Text>
      </TouchableOpacity>
      <Text style={styles.convertedText}>{convertedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  copyButton: {
    backgroundColor: '#2980b9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  copyButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  convertedText: {
    backgroundColor: '#34495e',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    color: '#ecf0f1',
    minHeight: 100,
    textAlignVertical: 'top',
  },
});

export default TextCaseConverterScreen;
