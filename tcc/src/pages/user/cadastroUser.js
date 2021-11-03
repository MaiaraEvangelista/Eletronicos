import React, { Component } from "react";
import { View, Text, StyleSheet, Style, TouchableOpacity, ImageBackground, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { TextInputMask } from 'react-native-masked-text'
import { max } from "react-native-reanimated";


export default class cadastroUser extends Component{
    constructor(props)
    {
        super(props);
        this.state =
        {
            celular: '',
            CEP: '',
        }
    }

    render()
    {
        return(
            <View style={styles.container}>

              <View style={styles.ctnH1}>
                <TouchableOpacity style={styles.TouchH1}>
                  <Image style={styles.imgH1} source={require('../../../assets/Arrow.svg')}/>
                </TouchableOpacity>
                <Text style={styles.txtH1}>Cadastro</Text>
              </View>


            <View style={styles.ctn}>

              <View style={styles.ctnInput}>

                <View style={styles.inputStyle}>
                  <TextInput
                    style={styles.TxtInput}
                    placeholder="Nome completo"
                    placeholderTextColor="black"
                    keyboardType="default"
                  />

                  <TextInputMask
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                  }}
                  value={this.state.celular}
                  onChangeText={ x =>
                  {
                    this.setState({
                      celular : x
                    })
                  }}
                    style={styles.TxtInput}
                    placeholder="Celular"
                    placeholderTextColor="black"
                  />
                </View>


                <View style={styles.inputStyle}>
                <TextInput
                    style={styles.TxtInput}
                    placeholder="Email"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                  />

                <TextInput
                    style={styles.TxtInput}
                    placeholder="Senha"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    keyboardType="visible-password"
                    secureTextEntry={true}
                  />
                </View>


                <View style={styles.inputStyle}>
                <TextInputMask
                type={'custom'}
                options={{
                  mask : '99999-999'
                }}
                value={this.state.CEP}
                onChangeText={ x => {
                  this.setState({
                    CEP : x
                  })
                }}
                    style={styles.TxtInput}
                    placeholder="CEP"
                    placeholderTextColor="black"
                  />

                  <TextInput
                    style={styles.TxtInput}
                    placeholder="Rua"
                    placeholderTextColor="black"
                  />
                </View>


                <View style={styles.inputStyle}>
                <TextInput
                    style={styles.TxtInput}
                    placeholder="Endereço"
                    placeholderTextColor="black"
                  />
                   <TextInput
                    style={styles.TxtInput}
                    placeholder="Complemento"
                    placeholderTextColor="black"
                  />
                </View>

                

                <View style={styles.btnInput}>
                  <TouchableOpacity style={styles.btnCtn}>
                    <Text style={styles.txtBtn}>Cadastrar</Text>
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

  ctnInput : {
    flex: 0.9,
    // backgroundColor: 'blue',

    justifyContent: 'space-around',
  },

  ctn: {
    flex: 0.7,
    // backgroundColor : 'blue',

    justifyContent: 'center'
  },

  inputStyle: {
    flex: 0.12,
    // backgroundColor: 'yellow',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  TxtInput: {
    width: '40%',
    height: '70%',

    borderColor: '#00873B',
    borderWidth: 4,
    borderRadius: 10,

    fontSize: 17,
    paddingLeft: 7,
  },

  btnInput: {
    flex: 0.1,
    // backgroundColor: 'orange',

    justifyContent: 'center',
    alignItems: 'center',
  },

  btnCtn: {
    width: '35%',
    height: '80%',
    backgroundColor: '#008763',

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 10,
  },

  txtBtn: {
    color: 'white',
    fontSize: 20,
    fontFamily : 'Arial',
  },

})