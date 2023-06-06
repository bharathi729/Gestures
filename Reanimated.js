
import React from 'react';
import { View, Button } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
export default function Reanimated() {
   
  const boxHeight = useSharedValue(150);
 
  const boxAnimation = useAnimatedStyle(() => {
    return {
      height: withTiming(boxHeight.value, {duration: 750})
    }
  });
  function toggleHeight() {
    boxHeight.value === 450 ?
    boxHeight.value = 150 :
    boxHeight.value = 450;
  };
  const styles = {
    box: {
      width: 300,
      height: 150,
      backgroundColor: 'grey',
      borderRadius: 15,
      marginLeft: 30,
      marginTop:80,
      padding: 20,
      display: 'flex'
    }
  };
  return (
    <View style={styles.app}>
      
      <Animated.View style={[styles.box, boxAnimation]}>
        
        <Button title='More' onPress={() => toggleHeight()} />
      </Animated.View>
    </View>
  )
};