import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  FlatList,
  StatusBar,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import { fetchImagesFromPexels } from './api';
import { CloseButton } from '../../components';
import { SPACING, IMAGE_SIZE } from './constants';
import { FullScreenImage, Thumbnail } from './components';
import { isThumbnailOutOfCenter, getThumbnailCenterOffset } from './utils';

const { width: screenWidth } = Dimensions.get('screen');

const PexelsGallery = ({ navigation }) => {
  const topRef = useRef();
  const thumbRef = useRef();
  const [images, setImages] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToActiveIndex = (index, scrollBg = false) => {
    setActiveIndex(index);

    if (scrollBg) {
      topRef?.current?.scrollToOffset({
        offset: index * screenWidth,
        animated: true,
      });
    }

    if (isThumbnailOutOfCenter(index)) {
      thumbRef?.current?.scrollToOffset({
        offset: getThumbnailCenterOffset(index),
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    };
  };

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetchImagesFromPexels();
      setImages(res);
    };

    fetchImages();
  }, []);

  if (!images) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingLabel}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.closeButtonContainer}>
        <CloseButton onPress={() => navigation.popToTop()} />
      </SafeAreaView>
      <FlatList
        horizontal
        ref={topRef}
        pagingEnabled
        data={images}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onMomentumScrollEnd={(e) => {
          const { x } = e.nativeEvent.contentOffset;
          const currentIndex = Math.round(x / screenWidth);
          scrollToActiveIndex(currentIndex);
        }}
        renderItem={({ item }) => <FullScreenImage imageUrl={item.src.portrait} />}
      />
      <FlatList
        horizontal
        data={images}
        ref={thumbRef}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        style={{ position: 'absolute', bottom: IMAGE_SIZE }}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        renderItem={({ item, index }) => (
          <Thumbnail
            imageUrl={item.src.portrait}
            highlight={index === activeIndex}
            onPress={() => scrollToActiveIndex(index, true)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  closeButtonContainer: {
    right: 10,
    zIndex: 10,
    position: 'absolute',
    top: StatusBar.currentHeight || 0,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  loadingLabel: {
    fontSize: 18,
    color: 'white',
  },
});

export default PexelsGallery;
