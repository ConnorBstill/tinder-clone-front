import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Card from './components/Card';
import { Header } from './components/Header';

import { API_URL } from './secret.js';

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

  renderCards = () => {
    const { profiles } = this.state;

    const cards = [];

    profiles.map((profile, index) => {
      cards.push(
        <View key={`${index}${profile.name}`} style={styles[`card${index}`]}>
          <Card image={profile.profilePicture} />
        </View>
      )
    });

    return cards;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        {this.renderCards()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
