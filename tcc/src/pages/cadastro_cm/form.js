import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

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
          <Text style={styles.txt}>teste</Text>

          <Modal>
              <Text>Teste</Text>
          </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    fontSize: 80,
  },
  
});
