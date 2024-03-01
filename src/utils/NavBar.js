import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import { useNavigation } from "@react-navigation/native";

// Import the screen components
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Import SVG Icons
import HomeIcon from "../assets/nav-home.svg";
import ProfileIcon from "../assets/nav-profile.svg";
import PlusIcon from "../assets/nav-plus.svg";

const NavBar = () => {
  const navigation = useNavigation();

  const _renderIcon = (routeName, selectedTab) => {
    let IconComponent;
    let fillColor = routeName === selectedTab ? "#086788" : "none";
    let strokeColor = routeName === selectedTab ? "#086788" : "gray";
    let strokeWidth = 1.75;

    if (routeName === "Home") {
      IconComponent = () => (
        <HomeIcon
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      );
    } else if (routeName === "Profile") {
      IconComponent = () => (
        <ProfileIcon
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      );
    }

    return <IconComponent />;
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const renderCircle = (selectedTab) => {
    const isActive = selectedTab === "Add";
    const circleBgColor = isActive ? "#086788" : "#E8E8E8";

    return (
      <TouchableOpacity
        style={[styles.btnCircleUp, { backgroundColor: circleBgColor }]}
        onPress={() => navigation.navigate("Add")}
      >
        <PlusIcon width={25} height={25} fill="#FFFFFF" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shadow}
        height={60}
        circleWidth={50}
        bgColor="white"
        initialRouteName="Home"
        borderTopLeftRight
        renderCircle={({ selectedTab }) => renderCircle(selectedTab)}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="Home"
          component={HomeScreen}
          position="LEFT"
        />
        <CurvedBottomBarExpo.Screen
          name="Add"
          component={AddScreen}
          position="CENTER"
        />
        <CurvedBottomBarExpo.Screen
          name="Profile"
          component={ProfileScreen}
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
    </View>
  );
};

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    bottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 10,
  },
  // ... other styles if needed
});

export default NavBar;
