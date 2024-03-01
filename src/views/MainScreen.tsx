import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Home/HomeScreen';
import AddScreen from './Add/AddScreen';
const Stack = createNativeStackNavigator();

export default function () {
  useEffect(() => {}, []);
  return (
    <>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({});
