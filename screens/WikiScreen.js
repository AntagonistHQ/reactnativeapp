import React, { Component } from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    search: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        marginBottom: 20,
    },
});

export default class WikiScreen extends Component {
    static navigationOptions = {
        title: 'Wikischerm',
    };

    constructor(props) {
        super(props);
        this.state = { searchText: '', result: '' };
    }

    searchWiki() {
        Keyboard.dismiss();

        fetch(`https://nl.wikipedia.org/w/api.php?action=opensearch&namespace=0&limit=1&format=json&search=${this.state.searchText}`)
            .then(response => response.json())
            .then((responseJson) => {
                if (Array.isArray(responseJson[2]) && responseJson[2].length) {
                    this.setState({
                        result: responseJson[2],
                    });
                } else {
                    this.setState({
                        result: `Er werd geen artikel gevonden voor: ${this.state.searchText}.`,
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    result: 'Fout bij het inladen van het artikel.',
                });
            });
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <TextInput
                        placeholder="Zoekterm"
                        onChangeText={searchText => this.setState({ searchText })}
                        value={this.state.searchText}
                        style={styles.search}
                    />
                    <Button
                        onPress={() => {
                            this.searchWiki();
                        }}
                        title="Zoek informatie"
                    />
                </View>
                <Text style={styles.container}>{this.state.result}</Text>
            </View>
        );
    }
}

