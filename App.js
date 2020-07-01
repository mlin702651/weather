import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './src/Weather';
import WeatherAPI from './src/WeatherAPI';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <WeatherAPI></WeatherAPI>
      {/* <Weather></Weather> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393939',
  },
});
