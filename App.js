import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';

import Swiper from 'react-native-deck-swiper';

import Card from './components/Card';
import { Header } from './components/Header';
import { ActionButton } from './components/ActionButton';

import { API_URL } from './secret.js';

console.ignoredYellowBox = ['react-native BugReporting extraData:'];

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class App extends Component {
  state = {
    profiles: []
  }

  async componentDidMount() {
    const response = await fetch(`${API_URL}/hot-singles`, {
      method: 'GET',
    });

    const responseData = await response.json();
    
    this.setState({ profiles: responseData })
  }

  render() {
    const { profiles } = this.state;

    if (profiles.length) {
      return (
        <SafeAreaView style={styles.container}>
          <Header />
  
          <View style={styles.contentContainerStyle}>
            <Swiper
              cards={profiles}
              renderCard={(card) => {
                return (
                  <View>
                    <Card profile={card} />
                  </View>
                )
              }}
              onSwiped={(cardIndex) => {console.log(cardIndex)}}
              onSwipedAll={() => {console.log('onSwipedAll')}}
              cardIndex={0}
              backgroundColor={'#fff'}
              useViewOverflow={false}
              stackSize= {3}>
            </Swiper>

            <View style={styles.actionButtonsContainer}>
                <ActionButton 
                  style={styles.leftOuterButtonStyle}
                  iconName='undo'
                  iconType='font-awesome'
                  iconColor='orange' />

                <ActionButton 
                  style={styles.leftInnerButtonStyle} 
                  iconName='times'
                  iconType='font-awesome'
                  iconColor='red' 
                  bigButton />

                <ActionButton 
                  style={styles.rightInnerButtonStyle}
                  iconName='heart'
                  iconType='font-awesome'
                  iconColor='green'  
                  bigButton />

                <ActionButton 
                  style={styles.rightOuterButtonStyle}
                  iconName='star'
                  iconType='font-awesome' 
                  iconColor='blue' />
            </View>

          </View>
        </SafeAreaView>
      );
    } else {
      return <View><Text>Loading</Text></View>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    // paddingBottom: 15,
  },
  actionButtonsContainer: {
    height: 80,
    width: '100%',
    height: '20%',
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 75
  },
  leftOuterButtonStyle: {
    position: 'absolute',
    top: 10,
    left: 22
  },
  leftInnerButtonStyle: {
    position: 'absolute',
    top: 13,
    left: 90
  },
  rightInnerButtonStyle: {
    position: 'absolute',
    top: 13,
    right: 90
  },
  rightOuterButtonStyle: {
    position: 'absolute',
    top: 10,
    right: 22
  }
});
