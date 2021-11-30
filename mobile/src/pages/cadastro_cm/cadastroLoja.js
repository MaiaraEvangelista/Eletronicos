import React, { Component } from "react";
import { View, Text, StyleSheet, Style, TouchableOpacity, ImageBackground, Image, Modal } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { TextInputMask } from 'react-native-masked-text'
import axios from "axios";


export default class cadastroUser extends Component{
    constructor(props)
    {
        super(props);
        this.state =
        {
            NomeLoja: '',
            cnpj: '',
            UF : '',
            endereco1: '',
            CEP: '',
            complemento: '',
            imagem : '',
            desc : '',

            endereco : [],

            ModalVisible : false,
            sucesso: '',
        }
    }

    navegacao = () =>
    {
        this.props.navigation.navigate('Home')
    }

    TurnModalVisible = () =>
    {
      if (this.state.NomeLoja == ''   || 
          this.state.cnpj == ''       ||
          this.state.CEP == ''        ||
          this.state.UF == ''         ||
          this.state.endereco1 == ''
          ) {
        this.setState({sucesso : 'Alguns campos estão vazios!!'})
      } 
      if (this.state.NomeLoja != ''   && 
          this.state.cnpj != ''       &&
          this.state.CEP != ''        &&   
          this.state.UF != ''         &&
          this.state.endereco1 != ''     
          ) {
        this.setState({sucesso : ''})
        this.setState({ModalVisible : true})
      }

    }

    buscarCep = () => {
      axios(`https://viacep.com.br/ws/${this.state.CEP}/json/`)
      .then(resposta => {
        this.setState({endereco: resposta.data})
        console.warn(resposta.data)
        this.setState({endereco1: resposta.data.logradouro})
        this.setState({UF: resposta.data.uf})
      })

      .catch(erro => console.warn(erro))
    }

    componentDidMount()
    {
      this.buscarCep()
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
                        >Selecione uma imagem para a sua loja</Text>

                        <TextInput
                        style={styles.InputImg}
                          placeholder='Imagem'
                        />
                    </View>


                    <View style={styles.ctnModal}>
                      <TextInput
                        style={styles.inputDesc}
                        placeholder='Faça uma descrição curta da sua loja'
                        multiline
                      />
                    </View>

                    <View style={styles.btnModalCtn}>
                      <TouchableOpacity style={styles.btnModal}>
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
                <Text style={styles.txtH1}>Loja</Text>
              </View>


            <View style={styles.ctn}>

              <View style={styles.ctnInput}>

                <View style={styles.inputStyle}>
                  <TextInput
                    style={styles.TxtInput}
                    placeholder="Nome da loja"
                    placeholderTextColor="black"
                    keyboardType="default"
                    onChangeText={NomeLoja => this.setState({NomeLoja})}
                  />

                  <TextInputMask
                  type={'cnpj'}
                  value={this.state.cnpj}
                  onChangeText={cnpj => this.setState({cnpj})}
                    style={styles.TxtInput}
                    placeholder="CNPJ"
                    placeholderTextColor="black"
                  />
                </View>

                <View style={styles.inputStyle}>
                <TextInputMask
                type={'custom'}
                options={{
                  mask : '99999-999'
                }}
                value={this.state.CEP}
                  onChangeText={CEP => this.setState({CEP})}
                    style={styles.TxtInput}
                    placeholder="CEP"
                    editable={true}
                    placeholderTextColor="black"
                    onBlur={this.buscarCep}
                    value={this.state.CEP} id="cep" name="cep"
                  />

                  <TextInput
                    onChangeText={UF => this.setState({UF})}
                    style={styles.TxtInput}
                    placeholder="UF"
                    placeholderTextColor="black"
                    editable={true}
                    value={this.state.UF} id="uf" name="uf"
                  />
                </View>


                <View style={styles.inputStyle}>
                <TextInput
                    style={styles.TxtInput}
                    placeholder="Endereço"
                    placeholderTextColor="black"
                    value={this.state.endereco1} id="logradouro" name="logradouro"
                    onChangeText={endereco1 => this.setState({endereco1})}
                  />
                   <TextInput
                    style={styles.TxtInput}
                    placeholder="Complemento"
                    placeholderTextColor="black"
                    onChangeText={complemento => this.setState({complemento})}
                  />
                </View>
                

                <View style={styles.btnInput}>
                  <Text style={{color: 'red', fontSize: 17}}>{this.state.sucesso}</Text>
                  <TouchableOpacity style={styles.btnCtn} onPress={this.TurnModalVisible}>
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
    height: '40%',
    // backgroundColor: 'red',

    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btnModalCtn : {
    width: '100%',
    height: '20%',
    // backgroundColor: 'red'

    alignItems: 'center',
    justifyContent: 'center',
  },

  btnModal: {
    width: '50%',
    height: '40%',
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