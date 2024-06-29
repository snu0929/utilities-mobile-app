import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import TextInputField from '../components/TextInputField';

const DayFinderScreen = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState('');

  const findDay = () => {
    const dayInt = parseInt(day, 10);
    const monthInt = parseInt(month, 10);
    const yearInt = parseInt(year, 10);

    if (isNaN(dayInt) || isNaN(monthInt) || isNaN(yearInt) || dayInt < 1 || dayInt > 31 || monthInt < 1 || monthInt > 12 || yearInt < 1) {
      alert('Please enter valid date values.');
      return;
    }

    const date = new Date(yearInt, monthInt - 1, dayInt);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[date.getDay()];

    setResult(dayOfWeek);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Day Finder</Text>
        <View style={styles.inputRow}>
          <TextInputField
            value={day}
            onChangeText={text => setDay(text)}
            placeholder="Day"
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInputField
            value={month}
            onChangeText={text => setMonth(text)}
            placeholder="Month"
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInputField
            value={year}
            onChangeText={text => setYear(text)}
            placeholder="Year"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <CustomButton
          title="Find Day"
          onPress={findDay}
          style={styles.button}
        />
        {result ? <Text style={styles.result}>Day of the Week: {result}</Text> : null}
      </View>
    </SafeAreaView>
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
  content: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  button: {
    marginTop: 20,
  },
  result: {
    fontSize: 22,
    color: '#ecf0f1',
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default DayFinderScreen;
