import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet,Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import TextInputField from '../components/TextInputField';

const TimerScreen = () => {
  const [duration, setDuration] = useState('');
  const [remainingTime, setRemainingTime] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!duration.trim() || isNaN(duration)) {
      Alert.alert('Please enter a valid number for duration.');
      return;
    }

    const seconds = parseInt(duration, 10);
    setRemainingTime(seconds);

    intervalRef.current = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
          return null;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setRemainingTime(null);
    setDuration('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer Utility</Text>
      <TextInputField
        style={styles.input}
        value={duration}
        onChangeText={text => setDuration(text)}
        placeholder="Enter duration (seconds)"
        keyboardType="numeric"
        placeholderTextColor="#ccc"
        editable={!remainingTime}
      />
      <View style={styles.buttonContainer}>
        <CustomButton title="Play" onPress={handleStart} disabled={!!remainingTime || !duration.trim()} />
        <CustomButton title="Pause" onPress={handlePause} disabled={!remainingTime} />
        <CustomButton title="Stop" onPress={handleStop} disabled={!remainingTime} />
      </View>
      {remainingTime !== null && (
        <Text style={styles.remainingTime}>Remaining Time: {remainingTime} seconds</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50', 
    marginTop:35
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ecf0f1', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  remainingTime: {
    fontSize: 18,
    marginTop: 20,
    color: '#ecf0f1', 
  },
});

export default TimerScreen;
