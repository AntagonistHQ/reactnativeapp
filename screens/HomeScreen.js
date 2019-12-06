import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Startscherm',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Open Wikischerm"
                        onPress={() => this.props.navigation.navigate('Wiki')}
                />
            </View>
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
});
