import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.containerStyle}>
      {/* <Text>Bettr</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: 60,
    borderBottomWidth: 1.5,
    marginBottom: 8,
    borderBottomColor: '#D3D3D3'
  }
});

export { Header }
