import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Alert,
  Animated,
  StatusBar,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import data from './data';
import { OptionsList } from './components';
import { CloseButton } from '../../components';
import { ITEM_HEIGHT, COLORS } from './constants';

const { width, height } = Dimensions.get('window');

const AnimatedPicker = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  const onConnectPress = useCallback(() => {
    Alert.alert('Connect with:', data[index].name.toUpperCase());
  }, [index]);


  const darkRef = useRef();
  const yellowRef = useRef();
  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );

  const onItemIndexChange = useCallback(setIndex, []);

  useEffect(() => {
    scrollY.addListener((v) => {
      if (darkRef?.current) {
        darkRef.current.scrollToOffset({
          offset: v.value,
          animated: false,
        });
      }
    });
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <SafeAreaView style={styles.closeButtonContainer}>
        <CloseButton onPress={() => navigation.popToTop()} />
      </SafeAreaView>
      <View style={styles.connectWidthContainer}>
        <Text style={styles.connectText}>Connect with...</Text>
      </View>
      <OptionsList
        data={data}
        color="yellow"
        ref={yellowRef}
        onScroll={onScroll}
        style={StyleSheet.absoluteFillObject}
        contentContainerStyle={[styles.contentContainer, styles.contentContainerFullList]}
        onMomentumScrollEnd={(ev) => {
          const newIndex = Math.round(ev.nativeEvent.contentOffset.y / ITEM_HEIGHT);
          onItemIndexChange(newIndex);
        }}
      />
      <OptionsList
        showText
        data={data}
        color="dark"
        ref={darkRef}
        scrollEnabled={false}
        style={styles.optionListSelector}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.line} />
      <View style={styles.buttonContanier}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onConnectPress}
          style={styles.buttonTouchable}
        >
          <Text style={styles.buttonText}>Connect!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLORS.dark,
  },
  connectWidthContainer: {
    position: 'absolute',
    top: height / 2 - ITEM_HEIGHT * 2,
    width: width * 0.7,
    paddingHorizontal: 14,
  },
  connectText: {
    color: COLORS.yellow,
    fontSize: 52,
    fontWeight: '700',
    lineHeight: 52,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  contentContainerFullList: {
    paddingTop: (height / 2) - (ITEM_HEIGHT / 2),
    paddingBottom: (height / 2) - (ITEM_HEIGHT / 2),
  },
  optionListSelector: {
    width,
    height: ITEM_HEIGHT,
    position: 'absolute',
    backgroundColor: COLORS.yellow,
    top: (height / 2) - (ITEM_HEIGHT / 2),
  },
  closeButtonContainer: {
    right: 10,
    zIndex: 10,
    position: 'absolute',
    top: 10,
  },
  line: {
    width: 2,
    left: 14,
    position: 'absolute',
    height: ITEM_HEIGHT * 3,
    backgroundColor: COLORS.yellow,
    top: height / 2 + ITEM_HEIGHT / 2,
  },
  buttonContanier: {
    position: 'absolute',
    left: 14,
    top: (height / 2 + ITEM_HEIGHT / 2) + (ITEM_HEIGHT * 3),
  },
  buttonTouchable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: COLORS.yellow,
  },
  buttonText: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.dark,
  },
});

export default AnimatedPicker;
