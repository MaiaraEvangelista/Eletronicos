import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';

import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView,{Marker} from 'react-native-maps';

import customStyle from './customStyle';
import {Location, Permissions} from 'expo'

state ={
  errorMessage: ''
}

_getLocation = async () => {
  const {status} = await Permissions.askAsync(Permissions.Location);
  if (status !== 'granted') {
    console.log('Permissão não concedida');

    this.SetState({
      errorMessage: 'permissão não concedida'
    })

    const userLocation = Location.getCurrentPositionAsync();

    this.setState
  }
}

export default function App() {
  return (

    // state ={
    //   errorMessage: ''
    // }

    // _getLocation = async () => {
    //   const {status} = await Permissions.askAsync(Permissions.Location);
    //   if (status !== 'granted') {
    //     console.log('Permissão não concedida');

    //     this.SetState({
    //       errorMessage: 'permissão não concedida'
    //     })
    //   }
    // }



    <View style={styles.container}>
      
      <MapView
          customMapStyle={customStyle}
          style={styles.mapStyle}
          initialRegion={{
          latitude : -23.53622471380559 ,
            longitude :  -46.64623994371489,
            latitudeDelta : 0.0922,
            longitudeDelta: 0.0421
          }}
      >
        <Marker
          coordinate={{
            latitude:-23.536749384864496, 
            longitude: -46.64050050671381
          }}
          title = "Santa Efigênia eletrônico"
          description = "Reparo de eletrônicos"
        />
        <Marker
          coordinate={{
            latitude:-23.53698878077083, 
            longitude: -46.6411401284346 
          }}
          title = "Andra"
          description = "Desmontagem de Eletrônicos"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle:{
    width: Dimensions.get('window').width,
    height: '100%'
  }
});
