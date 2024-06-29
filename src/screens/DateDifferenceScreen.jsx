import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import TextInputField from '../components/TextInputField';

const DateDifferenceCalculatorScreen = () => {
  const [day1, setDay1] = useState('');
  const [month1, setMonth1] = useState('');
  const [year1, setYear1] = useState('');
  const [day2, setDay2] = useState('');
  const [month2, setMonth2] = useState('');
  const [year2, setYear2] = useState('');
  const [difference, setDifference] = useState('');

  const calculateDifference = () => {
    const date1 = new Date(year1, month1 - 1, day1);
    const date2 = new Date(year2, month2 - 1, day2);

    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
      alert('Please enter valid dates.');
      return;
    }

    const differenceInTime = Math.abs(date2.getTime() - date1.getTime());
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    const differenceInWeeks = Math.floor(differenceInDays / 7);
    const differenceInMonths = Math.abs(date2.getMonth() - date1.getMonth() + (12 * (date2.getFullYear() - date1.getFullYear())));
    const differenceInYears = date2.getFullYear() - date1.getFullYear();

    setDifference(`Difference:
      Days: ${differenceInDays}
      Weeks: ${differenceInWeeks}
      Months: ${differenceInMonths}
      Years: ${differenceInYears}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Date Difference Calculator</Text>

        <View style={styles.inputSection}>
          <Text style={styles.label}>First Date</Text>
          <View style={styles.inputContainer}>
            <TextInputField
              value={day1}
              onChangeText={text => setDay1(text)}
              placeholder="Day"
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInputField
              value={month1}
              onChangeText={text => setMonth1(text)}
              placeholder="Month"
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInputField
              value={year1}
              onChangeText={text => setYear1(text)}
              placeholder="Year"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.label}>Last Date</Text>
          <View style={styles.inputContainer}>
            <TextInputField
              value={day2}
              onChangeText={text => setDay2(text)}
              placeholder="Day"
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInputField
              value={month2}
              onChangeText={text => setMonth2(text)}
              placeholder="Month"
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInputField
              value={year2}
              onChangeText={text => setYear2(text)}
              placeholder="Year"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        </View>

        <CustomButton
          title="Calculate Difference"
          onPress={calculateDifference}
          style={styles.button}
        />

        {difference ? (
          <View style={styles.resultContainer}>
            <Text style={[styles.result, styles.daysResult]}>Days: {difference.split('Days: ')[1].split(' ')[0]}</Text>
            <Text style={[styles.result, styles.weeksResult]}>Weeks: {difference.split('Weeks: ')[1].split(' ')[0]}</Text>
            <Text style={[styles.result, styles.monthsResult]}>Months: {difference.split('Months: ')[1].split(' ')[0]}</Text>
            <Text style={[styles.result, styles.yearsResult]}>Years: {difference.split('Years: ')[1]}</Text>
          </View>
        ) : null}
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
  inputSection: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 20,
    color: '#ecf0f1',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#918f8f',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 20,
    width: '50%',
  },
  resultContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  daysResult: {
    backgroundColor: '#3498db',
    color: '#ecf0f1',
  },
  weeksResult: {
    backgroundColor: '#2ecc71',
    color: '#ecf0f1',
  },
  monthsResult: {
    backgroundColor: '#e67e22',
    color: '#ecf0f1',
  },
  yearsResult: {
    backgroundColor: '#9b59b6',
    color: '#ecf0f1',
  },
});

export default DateDifferenceCalculatorScreen;
