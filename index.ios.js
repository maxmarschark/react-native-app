/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class omdb_search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => {
      response.json().then((movies) => {
        this.setState({
          movies: movies.movies,
        });
      });
    })
    .catch(err => console.error(err));
  }
  render() {
    console.log('rendering');
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
        Hello world
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('omdb_search', () => omdb_search);
