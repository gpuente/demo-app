import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {

  return (
    <View style={styles.root}>
      <Button
        title="Pexels Gallery"
        onPress={() => navigation.navigate('PexelsGallery')}
      />
      <Button
        title="Blur Carousel"
        onPress={() => navigation.navigate('BlurCarousel')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default Home;
