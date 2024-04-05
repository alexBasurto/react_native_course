import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {Dimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');
// este dimensions no se actualiza al girar pantalla

export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.5,
          }}
        />
      </View>

      <Text style={styles.title}>
        w: {width}, h: {height}
      </Text>
    </View>
  );
};

const styles = {
  container: {
    //width: '100%',
    width: 400,
    backgroundColor: 'red',
    height: 300,
  },
  purpleBox: {
    width: '50%',
    height: '50%',
    backgroundColor: 'purple',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
};
