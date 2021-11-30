import axios from "axios";
import React, { Component } from "react";
import { View, Text, StyleSheet, Style, TouchableOpacity, ImageBackground, Image, Modal } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { TextInputMask } from 'react-native-masked-text'


export default class cadastroUser extends Component{
    constructor(props)
    {
        super(props);
        this.state =
        {
            idUsuario : 0,
            idTipoUsuario : 3,
            cnpj : '',

            nomeCompleto: '',
            celular: '',
            email: '',
            senha: '',
            cpf : '',
            CEP: '',
            UF : '',
            endereco2 : '',
            complemento: '',

            endereco: [],

            visible : false
        }
        
    }

    cadastrarUser = () =>
    {
      try {

       axios.post('http://localhost:5000/api/Usuario',
       {
         idUsuarios : this.state.idUsuario,
         idTiposUsuario : this.state.idTipoUsuario,
         email : this.state.email,
         senha : this.state.senha,
         cpf : this.state.cpf,
         cnpj : this.state.cnpj,
         nomeCompleto : this.state.nomeCompleto,
         rua : this.state.endereco2,
         uf : this.state.UF,
         complemento : this.state.complemento,
         cep : this.state.CEP,
         celular : this.state.celular,
       })

       this.setState({visible : false})

      } catch (error) {
        console.warn(error)
        console.warn('ta dando erro')
      }
    
    }


    buscarCep = () => {
      axios(`https://viacep.com.br/ws/${this.state.CEP}/json/`)
      .then(resposta => {
        this.setState({endereco: resposta.data})
        this.setState({UF : resposta.data.uf})
        this.setState({endereco2 : resposta.data.longradouro})
        console.warn(resposta.data)
      })

      .catch(erro => console.warn(erro))
    }

    navegacao = () => 
    {
      this.props.navigation.navigate('Login')
    }

    componentDidMount(){
      this.buscarCep();
    }
    
    render()
    {
        return(
            <View style={styles.container}>

              <Modal
                transparent={true}
                visible={this.state.visible}
                animationType="slide"
              >
                <View style={{flex : 1, justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{height: '30%', width: '55%', 
                  backgroundColor: 'white', borderRadius: 10, alignItems: 'center', 
                  justifyContent: 'space-around', flexDirection: 'column'}}>
                    <Image style={{height: '20%', width: '19%'}} source={require('./../../../assets/check.png')}/>
                    
                    <Text style={styles.CadSus}>Cadastro bem sucedido</Text>

                    <TouchableOpacity style={styles.btnCad}>
                      <Text style={{color: 'white', fontSize: 16}}>Prosseguir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

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
                    onChangeText={celular => this.setState({celular})}
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
                    mask : '999-999-999-99'
                  }}
                    value={this.state.cpf}
                    onChangeText={cpf => this.setState({cpf})}
                    style={styles.TxtInput}
                    placeholder='CPF'
                    placeholderTextColor="black"                   
                  />
                </View>

                <View style={styles.inputStyle}>
                <TextInputMask
                type={'custom'}
                options={{
                  mask : '99999-999'
                }}
                    onChangeText={CEP => this.setState({CEP})}
                    value={this.state.CEP} id="cep" name="cep"
                    style={styles.TxtInput}
                    placeholder=' CEP'
                    onBlur={this.buscarCep}
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
                    onChangeText={endereco2 => this.setState({endereco2})}
                  />
                   <TextInput
                    style={styles.TxtInput}
                    placeholder="Complemento"
                    placeholderTextColor="black"
                    onChangeText={complemento => this.setState({complemento})}
                  />
                </View>

                <View style={styles.btnInput}>
                  <TouchableOpacity style={styles.btnCtn} onPress={this.cadastrarUser()}>
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

  CadSus: {
    color : 'green',
    fontSize: 15,
    fontWeight: 'bold',
  },

  btnCad: {
    width: '40%',
    height: '15%',

    backgroundColor: '#4D65BD',

    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
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