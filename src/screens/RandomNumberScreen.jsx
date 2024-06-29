import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import TextInputField from '../components/TextInputField';

const RandomNumberScreen = () => {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [generatedNumber, setGeneratedNumber] = useState(null);
  const navigation = useNavigation();

  const generateRandomNumber = () => {
    const min = parseInt(minValue);
    const max = parseInt(maxValue);

    if (isNaN(min) || isNaN(max) || min >= max) {
      alert('Please enter valid minimum and maximum values.');
      return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setGeneratedNumber(randomNumber);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="#ffffff" />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Random Number Generator</Text>
        <View style={styles.inputContainer}>
          <TextInputField
            style={styles.input}
            value={minValue}
            onChangeText={text => setMinValue(text)}
            placeholder="Minimum Value"
            keyboardType="numeric"
            placeholderTextColor="#ccc"
          />
          <TextInputField
            style={styles.input}
            value={maxValue}
            onChangeText={text => setMaxValue(text)}
            placeholder="Maximum Value"
            keyboardType="numeric"
            placeholderTextColor="#ccc"
          />
        </View>
        <CustomButton
          title="Generate Number"
          onPress={generateRandomNumber}
        />
        {generatedNumber !== null && (
          <Text style={styles.generatedNumber}>Generated Number: {generatedNumber}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:35,
    flex: 1,
    backgroundColor: '#2c3e50', // Dark background color
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 999, // Ensure it's above other content
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ecf0f1', // Light text color
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#34495e', // Darker background color
    color: '#ecf0f1', // Light text color
  },
  generatedNumber: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    color: '#6ac4da', // Light text color
  },
});

export default RandomNumberScreen;
