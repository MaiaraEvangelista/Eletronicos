import React, { Component } from 'react';
import { StyleSheet, Text, View,} from 'react-native';

export default class form extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      show : false
    }
  }

  render()
  {
    return(
      <View style={styles.container}>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
