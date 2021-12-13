import axios from "axios";
import React, { Component } from "react";
import { View, Text, StyleSheet, Style, TouchableOpacity, ImageBackground, Image, Modal } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { TextInputMask, TextMask } from 'react-native-masked-text'
import { block } from "react-native-reanimated";
import api from "../../services/api";


export default class cadastroUser extends Component{
  constructor(props)
  {
    super(props);
    this.state =
    {
      idUser : 0,
      idTipo : 0,
      nomeCompleto : '',
      email : '',
      senha : '',
      celular : '',
      cpfField : Boolean,
      CPF : '',

      CEP : '',

      valor : [],
      UF : '',
      endereco : '',
      complemento : '',
      numero : '',

      turnModal : false,
      sucesso : '',
      sucessoCad: '',
      turnCadModal : true,
    }
  }


  onModal = () =>
  {
    if (this.state.nomeCompleto !== '' &&
        this.state.email !== '' &&
        this.state.senha !== '' &&
        this.state.celular !== '' &&
        this.state.CPF !== ''
    ) 
    {
      this.setState({turnModal : true})
      this.setState({sucesso : ''})
      console.warn('foi')
    } if (this.state.nomeCompleto === '' ||
          this.state.email === '' ||
          this.state.senha === '' ||
          this.state.celular === '' ||
          this.state.CPF === '') 
    {
      this.setState({sucesso : 'Alguns campos não foram preenchidos!!'})
      console.warn('n foi')
    }
    
  }

  closeModal = () => 
  {
    this.setState({turnModal : false})
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

  buscarCep = () => {
    axios(`https://viacep.com.br/ws/${this.state.CEP}/json/`)
    .then(resposta => {
      console.warn(resposta.data)
      this.setState({valor: resposta.data})
      this.setState({endereco: resposta.data.logradouro})
      this.setState({UF: resposta.data.uf})
    })

    .catch(erro => console.warn(erro))
  }

    cadastrarUser = () =>
    {
      try {

        api.post('Usuario',
        {
          idUsuarios : this.state.idUser,
          idTiposUsuario : this.state.idTipo,
          email : this.state.email,
          senha : this.state.senha,
          cpf : this.state.CPF,
          nomeCompleto : this.state.nomeCompleto,
          rua : this.state.endereco,
          uf  : this.state.UF,
          complemento : this.state.complemento,
          n : this.state.numero,
          cep : this.state.CEP,
          celular : this.state.celular
        })
        .then(
          this.props.navigation.navigate('Home')
          )
          
        } catch (error) {
          console.warn(error)
      }
    }

    closeModal = () =>
    {
      this.props.navigation.navigate('Home')
      this.setState({turnCadModal : false})
    }

    comerciante = () =>
    {
      this.setState({idTipo : 2})
      this.setState({turnCadModal : false})
    }

    cliente = () =>
    {
      this.setState({idTipo : 3})
      this.setState({turnCadModal : false})
    }
  
  render()
    {
      return(
        <View style={styles.container}>


          <Modal
            transparent={true}
            visible={this.state.turnModal}
            animationType='slide'
          >
            <View style={styles.containerModal}>
              <View style={styles.modalCtn}>

                <View style={styles.modalHeaderCtn}>
                  <TouchableOpacity style={styles.closeModal} onPress={this.closeModal}>
                    <Image style={styles.closeStyle} source={require('./../../../assets/x.svg')}/>
                  </TouchableOpacity>
                </View>

                <View style={styles.inputs}>
                  <View style={styles.modalInputsCtn}>
                      <TextInputMask
                       type={'custom'}
                       options={{
                         mask : '99999-999'
                       }}
                       value={this.state.CEP}
                         onChangeText={CEP => this.setState({CEP})}
                           style={styles.inputsModalEdit}
                           placeholder="CEP"
                           editable={true}
                           placeholderTextColor="black"
                           onBlur={this.buscarCep}
                           value={this.state.CEP} id="cep" name="cep"
                      />

                      <TextInput
                        style={styles.inputsModalEdit}
                        placeholder='Unidade Federal'
                        placeholderTextColor='black'
                        value={this.state.UF}
                      />

                      <TextInput
                        style={styles.inputsModalEdit}
                        placeholder='Endereço'
                        placeholderTextColor='black'
                        value={this.state.endereco}
                      />

                       <TextInput
                        style={styles.inputsModalEdit}
                        placeholder='Número'
                        placeholderTextColor='black'
                        onChangeText={numero => this.setState({numero})}
                      />

                      <TextInput
                        style={styles.inputsModalEdit}
                        placeholder='Complemento'
                        placeholderTextColor='black'
                        onChangeText={complemento => this.setState({complemento})}
                      />

                      <Text style={{color : 'red', fontWeight: 'bold'}}>
                        {this.state.sucessoCad}
                      </Text>

                      <View style={styles.btnCtn}>
                          <TouchableOpacity style={styles.btnEdit} onPress={this.cadastrarUser}>
                              <Text style={styles.txtBtn}>Cadastrar</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>

          <Modal
            transparent={true}
            visible={this.state.turnCadModal}
            animationType='fade'
          >
            <View style={styles.containerModal}>

                <View style={styles.modalCadCtn}>

                    <View style={styles.goBackModalCtn}>
                       <TouchableOpacity style={styles.goBackModal} onPress={this.closeModal}>
                          <Image source={require('../../../assets/x.svg')} style={styles.btnModal}/>
                       </TouchableOpacity>

                          <Text style={{fontSize: 17}}>Selecione o seu usuário :</Text>
                    </View>

                    <View style={styles.modalBtnCtn}>
                       <View style={styles.modalBtnMiddle1}>
                            <TouchableOpacity style={styles.selectCtn} onPress={this.comerciante}>
                                <Text style={{color: 'white', fontSize: 16,}}>Comerciante</Text>
                            </TouchableOpacity>
                       </View>
                       <View style={styles.modalBtnMiddle1}>
                            <TouchableOpacity style={styles.selectCtn} onPress={this.cliente}>
                                <Text style={{color: 'white', fontSize: 16,}}>Cliente</Text>
                            </TouchableOpacity>
                       </View>
                    </View>
                </View>
            </View>
          </Modal>


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
                    onChangeText={nomeCompleto => this.setState({nomeCompleto})}
                  />
                </View>

                <View style={styles.inputsLine}>

                  <View style={styles.inputsMiddle}>
                    <TextInput
                      style={styles.inputsEdit}
                      placeholder="Email"
                      placeholderTextColor="black"
                      keyboardType="email-address"
                      onChangeText={email => this.setState({email})}
                    />
                  </View>

                  <View style={styles.inputsMiddle2}>
                    <TextInput
                      style={styles.inputsEdit}
                      placeholder="Senha"
                      placeholderTextColor="black"
                      keyboardType="visible-password"
                      secureTextEntry={true}
                      onChangeText={senha => this.setState({senha})}
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
                    <Text style={{color : 'red', fontWeight: 'bold', marginBottom: 10}}>{this.state.sucesso}</Text>
                    <TouchableOpacity style={styles.btnEdit} onPress={this.onModal}>
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

  containerModal: {
    flex : 1,
    backgroundColor: 'rgba(200, 199, 199, 0.9)',

    justifyContent: 'center',
    alignItems: 'center',
  },

  modalCtn : {
    width: '80%',
    height: '60%',
    backgroundColor: 'white',

    borderRadius: 10,

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,

    justifyContent: 'space-between',
  },

  modalHeaderCtn : {
    width: '100%',
    height: '15%',
    // backgroundColor: 'red',
  },

  closeModal : {
    width: '20%',
    height: '100%',
    // backgroundColor: 'blue',

    justifyContent: 'center',
    alignItems: 'center',
  },

  closeStyle : {
    width: '60%',
    height: '70%'
  },

  inputs : {
    width: '100%',
    height: '80%',
    // backgroundColor: 'red',

  },

  modalInputsCtn : {
    width: '100%',
    height: '95%',
    // backgroundColor: 'green',

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  inputsModalEdit : {
    width : '70%',
    height : '13%',

    borderColor: '#00873B',
    borderWidth: 4,
    borderRadius: 8,

    paddingLeft: 10,

    fontSize: 18,
  },

  modalCadCtn : {
    width: '80%',
    height: '30%',
    backgroundColor: 'white',

    borderRadius: 8,
  },

  goBackModalCtn : {
    width: '100%',
    height: '25%',
    // backgroundColor: 'red',

    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection : 'row'
  },

  goBackModal : {
    width: '10%',
    height: '70%',
    // backgroundColor: 'green',

    marginLeft: 10,
  },

  modalBtnCtn : {
    width: '100%',
    height: '75%',
    // backgroundColor: 'red',

    flexDirection: 'row'
  },

  modalBtnMiddle1 : {
    width: '50%',
    height: '100%',
    // backgroundColor: 'blue',

    justifyContent: 'center',
    alignItems: 'center',
  },

  selectCtn : {
    width: '70%',
    height: '25%',

    backgroundColor: '#00873B',
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center'
  },

  btnModal : {
    width: '100%',
    height: '100%'
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