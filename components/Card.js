import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Card extends Component {

  render() {
    const { profile } = this.props;
      console.log(Object.keys(profile), profile.name)
   
    return (
      <View style={styles.containerStyle}>
        <Image source={{ uri: `data:image/png;base64,${profile.profilePicture}` }} style={styles.imageStyle} />

        <View style={styles.infoContainerStyle}>
          <View style={styles.nameContainerStyle}>
            <Text style={styles.textStyle}>{profile.name}, </Text>
            <Text style={styles.textStyle}>{profile.age}</Text>
          </View>
          
          <Text style={styles.bioTextStyle}>{profile.bio}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 500,
    width: '100%',
    borderWidth: .5,
    borderRadius: 8,
    borderColor: '#D3D3D3',
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  imageStyle: {
    width: '100%',
    height: '85%',
  },
  infoContainerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: '15%',
    paddingHorizontal: 10,
    paddingVertical: 3
  },
  nameContainerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  textStyle: {
    fontSize: 32,
    fontWeight: '300',
  },
  bioTextStyle: {
    fontWeight: '300',
  }
})

export default Card;
