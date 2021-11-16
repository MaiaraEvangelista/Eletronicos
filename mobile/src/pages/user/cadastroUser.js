import axios from "axios";
import React, { Component } from "react";
import { View, Text, StyleSheet, Style, TouchableOpacity, ImageBackground, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { TextInputMask } from 'react-native-masked-text'


export default class cadastroUser extends Component{
    constructor(props)
    {
        super(props);
        this.state =
        {
            nomeCompleto : '',
            celular: '',
            email : '',
            senha : '',
            CEP: '',
            UF : '',
            endereco : '',
            complemento : '',
            idTipo : 1,
            cpf : 'teste',

            endereco: []
        }
        
    }

    cadastrarUser = () =>
    {
      try {

        fetch('http://localhost:5000/api/Usuario',
        {
          method : 'POST',
  
          body : JSON.stringify({
            idTiposUsuario: this.state.idTipo,
            nomeCompleto  : this.state.nomeCompleto,
            celular       : this.state.celular,
            email         : this.state.email,
            senha         : this.state.senha,
            cep           : this.state.CEP,
            cpf           : this.state.cpf,
            rua           : this.state.UF,
            nº            : this.state.endereco,
            complemento   : this.state.complemento,
          }),
        })

      } catch (error) {
        console.warn(error)
      }
    
    }

    buscarCep = () => {
      axios(`https://viacep.com.br/ws/${this.state.CEP}/json/`)
      .then(resposta => {
        this.setState({endereco: resposta.data})
        console.log(resposta.data)
      })

      .catch(erro => console.log(erro))
    }

    navegacao = () => 
    {
      this.props.navigation.navigate('login')
    }

    componentDidMount(){
      this.buscarCep();
    }
    
    render()
    {
        return(
            <View style={styles.container}>

              <View style={styles.ctnH1}>
                <TouchableOpacity style={styles.TouchH1} onPress={this.navegacao}>
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
                    onChangeText={nomeCompleto => this.setState({nomeCompleto})}
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
                    onChangeText={email => this.setState({email})}
                  />

                <TextInput
                    style={styles.TxtInput}
                    placeholder="Senha"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    keyboardType="visible-password"
                    secureTextEntry={true}
                    onChangeText={senha => this.setState({senha})}
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
                    placeholder=' CEP'
                    onBlur={this.buscarCep}
                    value={this.state.CEP} id="cep" name="cep"
                    placeholderTextColor="black"                   
                  />

                  <TextInput
                    style={styles.TxtInput}
                    placeholder="UF"
                    editable={false}
                    placeholderTextColor="black"
                    value={this.state.endereco.uf}
                    onChangeText={UF => this.setState({UF})}
                  />
                </View>


                <View style={styles.inputStyle}>
                <TextInput
                    style={styles.TxtInput}
                    placeholder="Endereço"
                    editable={false}
                    placeholderTextColor="black"
                    value={this.state.endereco.logradouro}
                    onChangeText={endereco => this.setState({endereco})}
                  />
                   <TextInput
                    style={styles.TxtInput}
                    placeholder="Complemento"
                    placeholderTextColor="black"
                    onChangeText={complemento => this.setState({complemento})}
                  />
                </View>

                

                <View style={styles.btnInput}>
                  <TouchableOpacity style={styles.btnCtn} onPress={this.cadastrarUser}>
                    <Text style={styles.txtBtn}>Cadastrar</Text>
                  </TouchableOpacity>
            </View>
                </View>|
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