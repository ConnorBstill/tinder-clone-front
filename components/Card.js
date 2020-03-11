import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Card extends Component {


  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>This is the Card component!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '65%',
    width: '95%',
    borderWidth: .5,
    borderRadius: 8,
    borderColor: '#D3D3D3'
  }
})

export default Card;
