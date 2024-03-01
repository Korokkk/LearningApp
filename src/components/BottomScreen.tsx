import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {Icon} from '@rneui/themed';
import Bottom1Screen from '../views/Bottom1/Bottom1Screen';
import Bottom2Screen from '../views/Bottom2/Bottom2Screen';

export default function ({navigation}) {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Bottom1Screen':
        icon = 'home-filled';
        break;
      case 'Bottom2Screen':
        icon = 'user';
        break;
    }

    return (
      <Icon
        type={routeName === 'Bottom1Screen' ? 'material' : 'feather'}
        name={icon}
        color={routeName === selectedTab ? '#086788' : '#C1BFBF'}
        size={30}
      />
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity onPress={() => navigate(routeName)}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const addFunc = () => {
    navigation.navigate('AddScreen');
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      height={55}
      circleWidth={50}
      bgColor="white"
      initialRouteName="Bottom1Screen"
      borderTopLeftRight
      screenOptions={{headerShown: false}}
      renderCircle={({selectedTab, routeName}) => (
        <Animated.View style={styles.btnCircleDown}>
          <TouchableOpacity onPress={() => addFunc()}>
            <Icon
              name="add"
              color={routeName === selectedTab ? '#086788' : '#fff'}
              size={30}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="Bottom1Screen"
        position="LEFT"
        component={() => <Bottom1Screen />}
      />
      <CurvedBottomBar.Screen
        name="Bottom2Screen"
        component={() => <Bottom2Screen />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}

const styles = StyleSheet.create({
  btnCircleDown: {
    width: 45,
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C1BFBF',
    bottom: 17,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
});
