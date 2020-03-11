import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Card extends Component {

  componentDidMount() {
    console.log('card props', Object.keys(this.props))
  }

  render() {
    const { image } = this.props;

    return (
      <View style={styles.containerStyle}>
        <Image source={{ uri: `data:image/png;base64,${image}` }} style={styles.imageStyle} />
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
    borderColor: '#D3D3D3',
    overflow: 'hidden'
  },
  imageStyle: {
    width: '100%',
    // height: '50%',
    aspectRatio: 1
  }
})

export default Card;
