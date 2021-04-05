import React, { useRef } from 'react';
import {
  View,
  Image,
  Animated,
  StatusBar,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import { CloseButton } from '../../components';
import { DATA, IMAGE_H, IMAGE_W } from './constants';

const { width } = Dimensions.get('screen');

const BlurCarousel = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor="#000" />
      <SafeAreaView style={styles.closeButtonContainer}>
        <CloseButton onPress={() => navigation.popToTop()} />
      </SafeAreaView>
      <View style={StyleSheet.absoluteFillObject}>
        {DATA.map((imageUrl, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });

          return (
            <Animated.Image
              blurRadius={50}
              key={`image-${index}`}
              source={{ uri: imageUrl }}
              style={[StyleSheet.absoluteFillObject, { opacity }]}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={DATA}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item }}
              style={styles.image}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },
  closeButtonContainer: {
    right: 10,
    zIndex: 10,
    position: 'absolute',
    top: 10,
  },
  imageContainer: {
    width,
    shadowRadius: 20,
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 0 },
  },
  image: {
    width: IMAGE_W,
    height: IMAGE_H,
    borderRadius: 16,
  },
});

export default BlurCarousel;
