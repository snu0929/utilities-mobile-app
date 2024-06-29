import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/screens/HomeScreen';
import RandomNumberScreen from './src/screens/RandomNumberScreen';
import TimerScreen from './src/screens/TimerScreen';
import TextCaseConverterScreen from './src/screens/TextCaseConverterScreen';
import DayFinderScreen from './src/screens/DayFinderScreen';
import DateDifferenceScreen from './src/screens/DateDifferenceScreen';
import NavigationFooter from './src/components/NavigationFooter';

export default function App() {
  const Stack = createNativeStackNavigator();   
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RandomNumber" component={RandomNumberScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Timer" component={TimerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TextCaseConverter" component={TextCaseConverterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DayFinder" component={DayFinderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DateDifference" component={DateDifferenceScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
        <NavigationFooter />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
