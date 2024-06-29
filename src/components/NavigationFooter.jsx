import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NavigationFooter = () => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState('Home'); 

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    setActiveScreen(screenName); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => navigateToScreen('Home')}>
        <AntDesign name="home" size={24} color={activeScreen === 'Home' ? '#cf57cd' : '#a26969'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => navigateToScreen('RandomNumber')}>
        <AntDesign name="questioncircle" size={24} color={activeScreen === 'RandomNumber' ? '#cf57cd' : '#a26969'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => navigateToScreen('Timer')}>
        <AntDesign name="clockcircleo" size={24} color={activeScreen === 'Timer' ? '#cf57cd' : '#a26969'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => navigateToScreen('TextCaseConverter')}>
        <AntDesign name="edit" size={24} color={activeScreen === 'TextCaseConverter' ? '#cf57cd' : '#a26969'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => navigateToScreen('DayFinder')}>
        <AntDesign name="calendar" size={24} color={activeScreen === 'DayFinder' ? '#cf57cd' : '#a26969'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => navigateToScreen('DateDifference')}>
        <AntDesign name="calculator" size={24} color={activeScreen === 'DateDifference' ? '#cf57cd' : '#a26969'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#444444',
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavigationFooter;
