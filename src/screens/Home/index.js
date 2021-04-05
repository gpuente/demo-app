import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {

  return (
    <View style={styles.root}>
      <Button
        title="Pexels Gallery"
        style={styles.button}
        onPress={() => navigation.navigate('PexelsGallery')}
      />
      <Button
        title="Blur Carousel"
        style={styles.button}
        onPress={() => navigation.navigate('BlurCarousel')}
      />
      <Button
        title="Animated Picker"
        style={styles.button}
        onPress={() => navigation.navigate('AnimatedPicker')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default Home;
