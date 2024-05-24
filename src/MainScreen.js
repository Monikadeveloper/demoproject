import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const MainScreen = () => {
  return (
    <View style={{backgroundColor: '#F0F4F3'}}>
      <Image
        source={{
          uri: '/Users/dr.mac/demoproject/src/shape.png',
        }}
        style={styles.ImageTop}
      />
      <Image
        source={{
          uri: '/Users/dr.mac/demoproject/src/undraw_done_checking_re_6vyx 1.png',
        }}
        style={styles.Image}
      />
      <Text style={styles.text1}>Gets things with TODOs</Text>
      <Text style={styles.text2}>
        Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
        Consequat urna quam felis interdum quisque. Malesuada adipiscing
        tristique ut eget sed.
      </Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.ButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  text1: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 18,

    marginLeft: 85,
  },
  text2: {
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 13,
    marginLeft: 85,
    marginTop: 20,
    width: 203,
    height: 100,
  },
  addButton: {
    backgroundColor: '#50C2C9',
    padding: 10,
    borderRadius: 5,
    margin: 15,
    height: 60,
    marginTop: 60,
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 8,
  },
  Image: {
    height: 194,
    width: 254,
    marginLeft: 65,
    marginBottom: 70,
  },
  ImageTop: {
    height: 270,
    width: 300,
    marginLeft: -87,
    marginTop: -100,
  },
});
