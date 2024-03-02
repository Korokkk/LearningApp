import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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

function CourseSquare() {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: course.image}} style={styles.imageBg}>
        <LinearGradient
          colors={['transparent', '#FFFFFF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}>
          <Text style={styles.text}>{course.name}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default CourseSquare;

const styles = StyleSheet.create({
  container: {
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
