import {Header, Icon} from '@rneui/themed';
import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function (props) {
  const homeFunc = () => {
    props.navigation.navigate('HomeScreen');
  };
  return (
    <View>
      <Header
        backgroundColor="#fff"
        containerStyle={{borderBottomWidth: 0}}
        leftComponent={
          props.showBack ? (
            <Icon
              style={{
                marginTop: 15,
              }}
              name="arrow-back-ios"
              onPress={() => homeFunc()}
            />
          ) : null
        }
        centerComponent={
          <View>
            <Image
              source={require('../assets/images/topCenter.jpg')}
              style={{width: 30, height: 30, marginLeft: 20}}
            />
            <Text>Test header</Text>
          </View>
        }
        rightComponent={
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <Text style={{marginRight: 5}}>Stew Dent</Text>
            <Icon type="feather" name="user" color="#086788" size={20} />
          </View>
        }></Header>
    </View>
  );
}

const styles = StyleSheet.create({});
