import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { max } from 'react-native-reanimated';

export default class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email : '',
            senha : '',
        }
    }

    render()
    {
        return (
          <View style={styles.container}>

               <View style={styles.ctnH1}>
                <TouchableOpacity style={styles.TouchH1}>
                  <Image style={styles.imgH1} source={require('../../../assets/Arrow.svg')}/>
                </TouchableOpacity>
                <Text style={styles.txtH1}>Login</Text>
              </View>
      
              <View style={styles.content}>

                  <TextInput
                    style={styles.inputLogin}
                    placeholder="Email"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    onChangeText={email => this.setState({email})}
                  />

                  <TextInput
                    style={styles.inputLogin}
                    placeholder="Senha"
                    placeholderTextColor="black"
                    keyboardType="visible-password"
                    secureTextEntry={true}
                    onChangeText={senha => this.setState({senha})}
                  />

                  <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textBtn}>Login</Text>
                  </TouchableOpacity>

                <TouchableOpacity style={styles.ctnCadastro}>
                  <Text style={styles.textCadastro}>Não tem uma conta? cadastre-se</Text>
                </TouchableOpacity>
              </View>

          </View>
        );

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imgH1: {
    width: '50%',
    height: '100%',
  },

  ctnH1: {
    flex: 0.3,
    backgroundColor: '#00873B',

    alignItems: 'center',
    flexDirection: 'row',
  },
  
  TouchH1: {
    width: '20%',
    height: '10%',
    // backgroundColor : 'blue',

    justifyContent: 'center',
    alignItems: 'center',
  },

  txtH1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },

  content: {
    flex : 0.4,
    width: '70%',
    // backgroundColor : 'red',

    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    margin: 'auto',
  },

  h1 : {
    fontFamily: 'Arial',
    fontSize: 30,
  },

  inputLogin : {
    height: '15%',
    width: '100%',
    backgroundColor: 'white',

    paddingLeft: 10,
    color: 'black',
    fontSize: 20,
    fontFamily: 'Arial',

    borderColor: '#008763',
    borderWidth: 3,
    borderRadius: 7,
  },

  btnLogin : {
    height: '15%',
    width: '35%',
    borderWidth: 3,
    borderRadius: 7,

    justifyContent: 'center',
    alignItems: 'center',
  },

  textBtn : {
    fontSize : 25,
    fontFamily : 'Arial'
  },

  ctnCadastro : {
    textAlign: 'center',
  },

  textCadastro : {
    fontSize: 13,
    fontFamily : 'Arial'
  },
});