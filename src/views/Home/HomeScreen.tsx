import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity} from 'react-native';
import BottomScreen from '../../components/BottomScreen';
import TopScreen from '../../components/TopScreen';

export default function ({navigation}) {
  return (
    <>
      <TopScreen navigation={navigation} showBack={false}></TopScreen>
      <BottomScreen navigation={navigation}></BottomScreen>
    </>
  );
}

const styles = StyleSheet.create({});
