import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import NavigationFooter from '../components/NavigationFooter';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Utility Application</Text>
      <CustomButton
        title="Random Number Generator"
        onPress={() => navigation.navigate('RandomNumber')}
      />
      <CustomButton
        title="Timer"
        onPress={() => navigation.navigate('Timer')}
      />
      <CustomButton
        title="Text Case Converter"
        onPress={() => navigation.navigate('TextCaseConverter')}
      />
      <CustomButton
        title="Day Finder"
        onPress={() => navigation.navigate('DayFinder')}
      />
      <CustomButton
        title="Date Difference Calculator"
        onPress={() => navigation.navigate('DateDifference')}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:35,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: 20, 
    paddingTop: 40, 
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff', 
    marginBottom: 20,
  },
});

export default HomeScreen;
