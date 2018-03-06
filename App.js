import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View,
  ToolbarAndroid,
  toolbarActions
} from 'react-native';

export default class balok extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panjang: 0,
      tinggi: 0,
      lebar: 0,
      luas: 0,
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>

      <View style={{ height: 24, backgroundColor: '#512DA8', }} />

      <ToolbarAndroid style={{ height: 56, backgroundColor: '#673AB7', elevation: 4, }}
        titleColor="white"
        title="Volume Balok"
      />

        <View style={{ borderRadius: 10, margin: 20, padding: 30, backgroundColor: 'white' }}>
            <TextInput style={styles.input}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput style={styles.input}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />
            <TextInput style={styles.input}
              placeholder="Masukkan  Lebar"
              onChangeText={(lebar) => this.setState({
                lebar
              })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                luas: (this.state.panjang * this.state.tinggi * this.state.lebar)
              })}
              title="Count"
              color="#673AB7"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ borderRadius: 10, margin: 20, backgroundColor: 'white', }}>
          <Text style={{ padding: 10, fontSize: 20, }}>
              panjang ={this.state.panjang} {'\n'}
              Tinggi ={this.state.tinggi } {'\n'}
              lebar = {this.state.lebar} {'\n'}
              volume = {this.state.luas}
          </Text>
         </View>
   </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 40,

  },
  judul: {
    color: 'green',
    fontSize: 30,
    textAlign: 'center',
  },
});
AppRegistry.registerComponent('AppForm2', () => balok);
