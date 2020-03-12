import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Card from './components/Card';
import { Header } from './components/Header';

import { API_URL } from './secret.js';

console.ignoredYellowBox = ['react-native BugReporting extraData:'];

export default class App extends Component {
  state = {
    profiles: []
  }

  async componentDidMount() {
    console.log('DID MOUNT')
    const response = await fetch(`${API_URL}/hot-singles`, {
      method: 'GET',
    });

    const responseData = await response.json();
    
    this.setState({ profiles: responseData }, () => {
      console.log('STATE', Object.keys(this.state))
    })
  }

  renderCards = () => {
    const { profiles } = this.state;
    console.log(profiles.length)
    const cards = [];

    if (profiles.length) {
      for (let i = 0; i < 3; i++) {
        // console.log(profiles, i)
        const profile = profiles[i];
        // console.log(profile)
  
        cards.push(
          <View key={`${i}${profile.name}`} style={[styles.cardContainerStyle, styles[`card${i}`]]}>
            <Card profile={profile} />
          </View>
        )
      }
    }

    // profiles.map((profile, i) => {

    // })

    return cards;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />

        <View style={styles.contentContainerStyle}>
          <View style={styles.cardsContainerStyle}>
            {this.renderCards()}
          </View>

          <View style={styles.actionButtonsContainer}>

          </View>
        </View>
      </SafeAreaView>
    );
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
    width: '100%',
    height: '100%',
    paddingHorizontal: 10
  },
  cardsContainerStyle: {
    flex: 1,

    width: '100%',
    height: '100%'
  },
  cardContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // height: '100%'
  },
  card0: {
    position: 'absolute',
    top: 0,
    zIndex: 3
  },
  card1: {
    position: 'absolute',
    top: 3,
    zIndex: 2
  },
  card2: {
    position: 'absolute',
    top: 6,
    zIndex: 1
  },
  actionButtonsContainer: {
    height: 80,
    width: '100%'
  }
});
