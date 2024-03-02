import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BottomScreen from '../../components/BottomScreen';
import TopScreen from '../../components/TopScreen';
// import { FlatList } from 'react-native-gesture-handler';
import CourseItem from '../../components/CourseItem';

const coursesData = [
  {
    id: 0,
    name: 'Medicine',
    image: 'https://i.ibb.co/7Kz6Yqg/course1.png',
  },
  {
    id: 1,
    name: 'Engineering',
    image: 'https://i.ibb.co/ZJWrMmx/course2.png',
  },
  {
    id: 3,
    name: 'Medicine',
    image: 'https://i.ibb.co/7Kz6Yqg/course1.png',
  },
  {
    id: 4,
    name: 'Engineering',
    image: 'https://i.ibb.co/ZJWrMmx/course2.png',
  },
  {
    id: 5,
    name: 'Medicine',
    image: 'https://i.ibb.co/7Kz6Yqg/course1.png',
  },
  {
    id: 6,
    name: 'Engineering',
    image: 'https://i.ibb.co/ZJWrMmx/course2.png',
  },
];

export default function ({navigation}) {
  return (
    <>
      <TopScreen navigation={navigation} showBack={false} />
      <View style={styles.container}>
        <Text style={styles.title}>Your courses</Text>
        <FlatList
          style={styles.flatList}
          data={coursesData}
          renderItem={({item}) => (
            <CourseItem name={item.name} image={item.image} />
          )}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={2}
        />
      </View>
      <BottomScreen navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },
  title: {
    fontSize: 24,
    margin: 50,
  },
  flatList: {
    width: '100%',
  },
});
