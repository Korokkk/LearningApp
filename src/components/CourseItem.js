import LinearGradient from 'react-native-linear-gradient';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';

const coursesList = [
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
];

const course = {
  id: 0,
  name: 'Medicine',
  image: 'https://i.ibb.co/7Kz6Yqg/course1.png',
};

function CourseItem({name, image}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: image}} style={styles.imageBg}>
        <LinearGradient
          colors={[
            'rgba(255, 255, 255, 0)',
            'rgba(255, 255, 255, 0.2)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.8)',
          ]}
          // start={{x: 0.5, y: 0.5}}
          style={styles.gradient}>
          <Text style={styles.text}>{name}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default CourseItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    width: 150,
    height: 150,
    borderRadius: 22,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageBg: {
    width: 150,
    height: 150,
    flexDirection: 'column',
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
