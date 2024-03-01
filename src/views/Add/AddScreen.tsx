import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TopScreen from '../../components/TopScreen';

export default function ({navigation}) {
  return (
    <View>
      <TopScreen navigation={navigation} showBack={true}></TopScreen>
      <View style={{padding: 10}}>
        <Text>Add</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
