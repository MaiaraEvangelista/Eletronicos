import axios from "axios";
import React, { Component } from "react";
import { View, Text, StyleSheet, Style, TouchableOpacity, ImageBackground, Image, Modal } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { TextInputMask } from 'react-native-masked-text'
import { block } from "react-native-reanimated";


export default class cadastroUser extends Component{
  constructor(props)
  {
    super(props);
    this.state =
    {
      celular : '',
      cpfField : Boolean,
      CPF : '',
    }
  }

  cpfIsValid = () =>
  {
    this.state.cpfField.isValid()
    console.log(cpfIsValid)
  }

  returnToLogin = () =>
  {
    this.props.navigation.navigate('Login')
  }

    
  
  render()
    {
      return(
        <View style={styles.container}>
            <View style={styles.headerCtn}>
              <View style={styles.headerOpt}>
                <View style={styles.headerOptCtn}>
                  <TouchableOpacity style={styles.headerBtn} onPress={this.returnToLogin}>
                    <Image style={styles.headerArrow} source={require('./../../../assets/arrow.svg')}/>
                  </TouchableOpacity>

                  <Text style={styles.headerTxt}>Cadastro</Text>
                </View>
              </View>
            </View>

            <View style={styles.main}>
              <View style={styles.inputsCtn}>

                <View style={styles.firstInput}>
                  <TextInput
                    style={styles.firstInputEdit}
                    placeholder="Nome completo"
                    placeholderTextColor="black"
                    keyboardType="default"
                  />
                </View>

                <View style={styles.inputsLine}>

                  <View style={styles.inputsMiddle}>
                    <TextInput
                      style={styles.inputsEdit}
                      placeholder="Email"
                      placeholderTextColor="black"
                      keyboardType="email-address"
                    />
                  </View>

                  <View style={styles.inputsMiddle2}>
                    <TextInput
                      style={styles.inputsEdit}
                      placeholder="Senha"
                      placeholderTextColor="black"
                      keyboardType="visible-password"
                      secureTextEntry={true}
                    />
                  </View> 

                </View>

                 <View style={styles.inputsLine}>

                  <View style={styles.inputsMiddle}>
                    <TextInputMask
                    type={'cel-phone'}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99)'
                    }}
                      value={this.state.celular}
                      onChangeText={celular => this.setState({celular})}
                      style={styles.inputsEdit}
                      placeholder="Celular"
                      placeholderTextColor="black"
                    />
                  </View>

                  <View style={styles.inputsMiddle2}>
                    <TextInputMask
                    type={'cpf'}
                      value={this.state.CPF}
                      onChangeText={CPF => this.setState({CPF})}
                      style={styles.inputsEdit}
                      ref={(ref) => this.state.cpfField = ref}
                      placeholder="CPF"
                      placeholderTextColor="black"
                    />
                  </View> 

                </View>

                <View style={styles.btnCtn}>
                    <TouchableOpacity style={styles.btnEdit}>
                      <Text style={styles.txtBtn}>Prosseguir</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
        </View>
      )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : 'white',

      justifyContent: 'space-between',
  },

  headerCtn : {
    width: '100%',
    height: '30%',
    backgroundColor: '#00873B',

    justifyContent: 'center',
  },

  headerOpt : {
    width: '100%',
    height: '35%',
    // backgroundColor: 'orange',

    alignItems: 'flex-end'
  },

  headerOptCtn: {
    width: '90%',
    height: '100%',
    // backgroundColor: 'blue',

    alignItems: 'center',
    flexDirection: 'row'
  },

  headerBtn: {
    width: '15%',
    height: '40%',
    // backgroundColor: 'red',

    marginRight: 15,
  },

  headerArrow : {
    width: '100%',
    height: '100%',
  },

  headerTxt : {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  main: {
    width: '100%',
    height: '65%',
    // backgroundColor: 'red',

    justifyContent: 'center',
  },

  inputsCtn : {
    width: '100%',
    height: '70%',
    // backgroundColor: 'blue',
  },

  firstInput : {
    width: '100%',
    height: '25%',

    justifyContent: 'center',
    alignItems: 'center',
  },

  firstInputEdit : {
    width: '80%',
    height: '55%',

    borderColor: '#00873B',
    borderWidth: 4,
    borderRadius: 8,

    paddingLeft: 10,

    fontSize: 18,
  },

  inputsLine : {
    width: '100%',
    height: '25%',
    // backgroundColor: 'yellow',

    flexDirection: 'row',
    justifyContent: 'center',
  },

  inputsMiddle : {
    width: '40%',
    height: '100%',
    // backgroundColor: 'red',

    justifyContent: 'center',
  },

  inputsMiddle2 : {
    width: '40%',
    height: '100%',
    // backgroundColor: 'red',

    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  inputsEdit : {
    width: '90%',
    height: '55%',

    borderColor: '#00873B',
    borderWidth: 4,
    borderRadius: 8,

    paddingLeft: 10,

    fontSize: 18,
  },

  btnCtn : {
    width: '100%',
    height: '20%',
    // backgroundColor: 'red',

    marginTop: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },

  btnEdit : {
    width: '30%',
    height: '60%',
    backgroundColor: '#008763',

    borderRadius: 7,

    justifyContent : 'center',
    alignItems: 'center',
  },

  txtBtn : {
    color: 'white',
    fontSize: 18,
  },
})