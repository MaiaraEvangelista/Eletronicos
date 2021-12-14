import React, { Component } from "react";
import { View, Text, StyleSheet, Style, TouchableOpacity, ImageBackground, Image, Modal, Picker } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { TextInputMask } from 'react-native-masked-text'
import axios from "axios";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";


export default class cadastroUser extends Component{
    constructor(props)
    {
        super(props);
        this.state =
        {
            idUser : 5,
            idEsp : 0,
            idForm : 1,
            nomeComercio: '',
            desc : '',
            cnpj: '',
            cidade : '',
            rua: '',
            n : '',
            uf : '',
            complemento: '',
            CEP: '',
            telefone : '',

            endereco : [],

            ModalVisible : false,
            sucesso: '',
        }
    }

    navegacao = () =>
    {
        this.props.navigation.navigate('Home')
    }

    closeModal = () =>
    {
      this.setState({ModalVisible : false})
    }

    TurnModalVisible = () =>
    {
      if (this.state.NomeLoja == ''   || 
          this.state.cnpj == ''       ||
          this.state.telefone == ''   ||
          this.state.desc == ''       ||
          this.state.idEsp == 0
          ) {
        this.setState({sucesso : 'Alguns campos estão vazios!!'})
      } 
      if (this.state.NomeLoja != ''   && 
          this.state.cnpj != ''       &&
          this.state.telefone != ''   &&   
          this.state.desc != ''       &&
          this.state.idEsp != 0
          ) {
        this.setState({sucesso : ''})
        this.setState({ModalVisible : true})
      }

    }

    buscarCep = () => {
      axios(`https://viacep.com.br/ws/${this.state.CEP}/json/`)
      .then(resposta => {
        console.warn(resposta.data)
        this.setState({endereco: resposta.data})
        this.setState({rua: resposta.data.logradouro})
        this.setState({uf: resposta.data.uf})
        this.setState({cidade : resposta.data.localidade})
      })

      .catch(erro => console.warn(erro))
    }

    componentDidMount()
    {
      this.buscarCep()
    }

    listar = async () =>
    {
      console.warn(this.state.idUser)
      console.warn(this.state.idEsp)
    }

    cadastrarLoja = async () =>
    {

      const resp = await AsyncStorage.getItem('userToken');
      var decoded = jwtDecode(resp).jti;
      this.setState({idUser : decoded})

      api.post('Loja',{
        idUsuario       : this.state.idUser,
        idEspecialidade : this.state.idEsp,
        idFormulario    : this.state.idForm,
        nomeComercio    : this.state.nomeComercio,
        descricao       : this.state.desc,
        cnpj            : this.state.cnpj,
        cidade          : this.state.cidade,
        rua             : this.state.rua,
        n               : this.state.n,
        uf              : this.state.uf,
        complemento     : this.state.complemento,
        cep             : this.state.CEP,
        telefone        : this.state.telefone,
      })

      .then(
        this.props.navigation.navigate('Home')
      )

      .catch(erro => console.warn(erro))
    }

    render()
    {
        return(
            <View style={styles.container}>

              <Modal
                transparent={true}
                visible={this.state.ModalVisible}
                animationType='slide'
              >
                <View style={styles.conatinerModal}>
                  <View style={styles.ctnInputsModal}>

                  <View style={styles.ctnModal}>
                      <Text style={{textAlign : 'center', fontSize: 18, width: '60%'}}
                      >Adicione a localização do comércio</Text>

                    <TextInputMask
                    type={'custom'}
                    options={{
                      mask : '99999-999'
                    }}
                    value={this.state.CEP}
                    onChangeText={CEP => this.setState({CEP})}
                    style={styles.TxtInputModal}
                    placeholder="CEP"
                    editable={true}
                    placeholderTextColor="black"
                    onBlur={this.buscarCep}
                    value={this.state.CEP} id="cep" name="cep"
                    />

                    <TextInput
                    onChangeText={uf => this.setState({uf})}
                    style={styles.TxtInputModal}
                    placeholder="Unidade Federal"
                    placeholderTextColor="black"
                    editable={true}
                    value={this.state.uf} id="uf" name="uf"
                    />

                    <TextInput
                      onChangeText={cidade => this.setState({cidade})}
                      value={this.state.cidade}
                      style={styles.TxtInputModal}
                      placeholder="Cidade"
                      placeholderTextColor="black"
                      editable={true}
                    />

                    <TextInput
                    style={styles.TxtInputModal}
                    placeholder="Endereço"
                    placeholderTextColor="black"
                    value={this.state.rua} id="logradouro" name="logradouro"
                    onChangeText={endereco1 => this.setState({endereco1})}
                    />

                    <TextInput
                      onChangeText={n => this.setState({n})}
                      style={styles.TxtInputModal}
                      placeholder="Número"
                      placeholderTextColor="black"
                      editable={true}
                    />

                   <TextInput
                    style={styles.TxtInputModal}
                    placeholder="Complemento"
                    placeholderTextColor="black"
                    onChangeText={complemento => this.setState({complemento})}
                    />
                </View>
                        

                    <View style={styles.btnModalCtn}>
                      <TouchableOpacity style={styles.btnModal} onPress={this.cadastrarLoja}>
                        <Text style={{color: 'white', fontSize: 17}}>Cadastre-se</Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                </View>
              </Modal>

              <View style={styles.ctnH1}>
                <TouchableOpacity style={styles.TouchH1} onPress={this.navegacao}>
                  <Image style={styles.imgH1} source={require('../../../assets/Arrow.svg')}/>
                </TouchableOpacity>
                <Text style={styles.txtH1}>Cadastre a sua loja!!</Text>
              </View>


            <View style={styles.ctn}>

              <View style={styles.ctnInput}>

                <View style={styles.inputStyle}>
                  <TextInput
                    style={styles.TxtInputNome}
                    placeholder="Nome da loja"
                    placeholderTextColor="black"
                    keyboardType="default"
                    onChangeText={nomeComercio => this.setState({nomeComercio})}
                  />

                </View>

                <View style={styles.inputStyle}>
                    <TextInputMask
                      type={'cnpj'}
                      value={this.state.cnpj}
                      onChangeText={cnpj => this.setState({cnpj})}
                      style={styles.TxtInput}
                      placeholder="CNPJ"
                      editable={true}
                      placeholderTextColor="black"
                    />

                    <TextInputMask
                      type={'cel-phone'}
                      options={{
                        maskType : 'BRL',
                        widthDDD : true,
                        dddMask : '(99) '
                      }}
                      value={this.state.telefone}
                      onChangeText={telefone => this.setState({telefone})}
                      style={styles.TxtInput}
                      placeholder="Celular"
                      editable={true}
                      placeholderTextColor="black"
                    />
                </View>

                <View style={styles.inputStyle}>
                      <Picker
                        selectedValue={this.state.idEsp}
                        onValueChange={idEsp => this.setState({idEsp})}
                        style={styles.pickerStyle}
                      >
                        <Picker.Item label='Selecione uma especialidade' value={0}/>
                        <Picker.Item label='Troca de Smartphones' value={1}/>
                        <Picker.Item label='Montagem/Desmontagem' value={2}/>
                        <Picker.Item label='Descarte' value={3}/>
                        <Picker.Item label='Venda' value={4}/>
                      </Picker>
                </View>

                <View style={styles.inputStyleBig}>
                <TextInput
                  style={styles.TxtInputDesc}
                  placeholder='Breve descrição do seu comércio'
                  placeholderTextColor='black'
                  maxLength='100'
                  multiline={true}
                  onChangeText={desc => this.setState({desc})}
                />
                </View>


                <View style={styles.btnInput}>
                  <Text style={{color: 'red', fontSize: 17}}>{this.state.sucesso}</Text>
                  <TouchableOpacity style={styles.btnCtn} onPress={this.TurnModalVisible}>
                    <Text style={styles.txtBtn}>Proseguir</Text>
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

  conatinerModal: {
    flex: 1,
    backgroundColor: 'rgba(200, 199, 199, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ctnInputsModal: {
    width: '80%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
  },

  ctnModal: {
    width: '100%',
    height: '85%',
    // backgroundColor: 'red',

    alignItems: 'center',
    justifyContent: 'space-around',
  },

  TxtInputModal : {
    width: '60%',
    height: '10%',
    
    borderColor: '#00873B',
    borderWidth: 4,
    borderRadius: 7,

    fontSize: 17,
    paddingLeft: 7,
  },

  btnModalCtn : {
    width: '100%',
    height: '15%',
    // backgroundColor: 'red',

    alignItems: 'center',
    justifyContent: 'center',
  },

  btnModal: {
    width: '50%',
    height: '50%',
    backgroundColor: '#4D65BD',

    borderRadius: 7,

    alignItems: 'center',
    justifyContent: 'center',
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
    flex: 0.135,
    // backgroundColor: 'yellow',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  pickerStyle : {
    width : '90%',
    height: '60%',

    borderColor: '#00873B',
    borderWidth: 4,
    borderRadius: 7,

    fontSize: 17,
  },

  inputStyleBig: {
    flex : 0.270,
    // backgroundColor : 'yellow',

    justifyContent : 'center',
    alignItems : 'center',
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

  TxtInputNome : {
    width: '90%',
    height: '70%',

    borderColor: '#00873B',
    borderWidth: 4,
    borderRadius: 10,

    fontSize: 17,
    paddingLeft: 7,
  },

  TxtInputDesc : {
    width: '90%',
    height: '70%',

    borderColor: '#00873B',
    borderWidth: 4,
    borderRadius: 10,

    fontSize: 17,
    paddingLeft: 7,
  },

  btnInput: {
    flex: 0.2,
    // backgroundColor: 'orange',

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },

  btnCtn: {
    width: '35%',
    height: '50%',
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

  arrow: {
    color: 'white',
    width: '60%',
    height: '80%'
  },

  inputBig: {
    flex: 0.25,
    backgroundColor: 'red',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  inputDesc: {
    height: '50%',
    width: '50%',

    borderColor: '#00873B',
    borderWidth: 4,
    borderRadius: 10,

    fontSize: 17,
    paddingTop: 7,

    textAlign: 'center',
    textAlignVertical: 'center',
  },

  InputImg: {
    height: '50%',
    width: '50%',

    borderColor: '#00873B',
    borderWidth: 4,
    borderRadius: 10,

    fontSize: 17,
    paddingTop: 7,
    paddingLeft: 3,
    paddingRight: 3,

    textAlign: 'center',
    textAlignVertical: 'center',
  },

})