import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class form extends Component {
  constructor(props)
  {
      super(props)
      this.state = {
          btnYesColor1 : '#979797',
          btnNoColor1 : '#979797',

          btnYesColor2 : '#979797',
          btnNoColor2 : '#979797',

          btnYesColor3 : '#979797',
          btnNoColor3 : '#979797',

          btnYesColor4 : '#979797',
          btnNoColor4 : '#979797',

          totalValue : 0,

          modalVisible : false,
          txt : '',

          lockBtnTrue1 : false,
          lockBtnFalse1 : false,

          lockBtnTrue2 : false,
          lockBtnFalse2 : false,

          lockBtnTrue3 : false,
          lockBtnFalse3 : false,

          lockBtnTrue4 : false,
          lockBtnFalse4 : false,

          modalVisible1 : false,

      }
  }

  onPressYes1 = () =>
  {
      this.setState({btnYesColor1 : 'green'})
      this.setState({btnNoColor1 : '#979797'})

      var soma = this.state.totalValue + 1;

      this.setState({totalValue : soma})

      this.setState({lockBtnTrue1 : true})
      this.setState({lockBtnFalse1 : false})

      console.warn(soma)
  }

  onPressNo1 = () =>
  {
      this.setState({btnNoColor1 : 'red'})
      this.setState({btnYesColor1 : '#979797'})

      console.warn(this.state.totalValue)

      var soma = this.state.totalValue - 1;

      this.setState({totalValue : soma})

      this.setState({lockBtnFalse1 : true})
      this.setState({lockBtnTrue1 : false})

      console.warn(soma)
  }

  onPressYes2 = () =>
  {
      this.setState({btnYesColor2 : 'green'})
      this.setState({btnNoColor2 : '#979797'})
      var soma = this.state.totalValue + 1;

      this.setState({totalValue : soma})

      this.setState({lockBtnTrue2 : true})
      this.setState({lockBtnFalse2 : false})

      console.warn(soma)
  }

  onPressNo2 = () =>
  {
      this.setState({btnNoColor2 : 'red'})
      this.setState({btnYesColor2 : '#979797'})

      console.warn(this.state.totalValue)

      var soma = this.state.totalValue - 1;

      this.setState({totalValue : soma})

      this.setState({lockBtnFalse2 : true})
      this.setState({lockBtnTrue2 : false})

      console.warn(soma)
  }

  onPressYes3 = () =>
  {
      this.setState({btnYesColor3 : 'green'})
      this.setState({btnNoColor3 : '#979797'})
      var soma = this.state.totalValue + 1;

      this.setState({totalValue : soma})

      this.setState({lockBtnTrue3 : true})
      this.setState({lockBtnFalse3 : false})

      console.warn(soma)
  }

  onPressNo3 = () =>
  {
      this.setState({btnNoColor3 : 'red'})
      this.setState({btnYesColor3 : '#979797'})

      console.warn(this.state.totalValue)

      var soma = this.state.totalValue - 1;

      this.setState({totalValue : soma})

      this.setState({lockBtnFalse3 : true})
      this.setState({lockBtnTrue3 : false})

      console.warn(soma)
  }

  onPressYes4 = () =>
  {
      this.setState({btnYesColor4 : 'green'})
      this.setState({btnNoColor4 : '#979797'})
      var soma = this.state.totalValue + 1;

      this.setState({totalValue : soma})

      this.setState({lockBtnTrue4 : true})
      this.setState({lockBtnFalse4 : false})

      console.warn(soma)
  }

  onPressNo4 = () =>
  {
      this.setState({btnNoColor4 : 'red'})
      this.setState({btnYesColor4 : '#979797'})

      console.warn(this.state.totalValue)

      var soma = this.state.totalValue - 1;

      this.setState({totalValue : soma})

      this.setState({lockBtnFalse4 : true})
      this.setState({lockBtnTrue4 : false})

      console.warn(soma)
  }

  validation = () =>
  {
      try {
          if (this.state.totalValue > 0) {
              this.props.navigation.navigate('cadaLoja')
          }

          if (this.state.totalValue <= 0) {
             this.setState({modalVisible : true})
          }
      } catch (error) {
          console.warn(error)
      }
  }

  navLojas = () => 
  {
      this.props.navigation.navigate('Lojas')
      this.setState({modalVisible : false})
  }

  navSolucao = () =>
  {
      this.props.navigation.navigate('Home')
      this.setState({modalVisible : false})
  }

  back = () =>
  {
      this.props.navigation.navigate('Home')
  }

  turnModalVisible = () =>
  {
    this.setState({modalVisible1 : true})
  }

  render()
  {
      return(
          <View style={styles.container}>
              <Modal
                  transparent={true}
                  visible={this.state.modalVisible}
                  animationType='fade'
              >
                  <View style={styles.containerModal}>

                      <View style={styles.modalCtn}>

                          <View style={styles.headerModal}>
                            <Image style={styles.xStyle} source={require('./../../../assets/wrong.png')}/>
                          </View>

                          <View style={styles.txtModal}>
                            <Text 
                            style={{fontSize : 15, textAlign : 'center', width : '90%'}}
                            >Infelizmente sua loja não tem os requisitos para o cadastro dela em nosso sistema.</Text>
                          </View>

                          <View style={styles.btnModalCtn}>
                            <TouchableOpacity style={styles.btnModal} onPress={this.navSolucao}>
                              <Text style={{color : 'white', fontSize : 17}}>Voltar</Text>
                            </TouchableOpacity>
                          </View>
                      </View>

                  </View>
              </Modal>

              <Modal
                 transparent={true}
                 visible={this.state.modalVisible1}
                 animationType="slide"
                >
                    <View style={styles.modalCtn1}>
                        <View style={styles.modal1}>


                        <View style={styles.scrollCtn1}>
                            
                            <ScrollView style={styles.txtModalCtn1}>
                                <Text style={{textAlign : 'center', paddingTop : 20}}>
                                Termos Gerais: Ao se cadastrar em nosso programa, voçê está de acordo com nossos serviços, além de concordar com tudo oque é pedido nas perguntas abaixo, se você for aprovado, terá a divulgação de sua loja para várias pessoas da cidade de São Paulo. E caso percebemos que seu estabelecimento não esteja seguindo as normas corretamente, você estará sujeito a uma multa de 5% do lucro que sua loja teve no ultimo mês
                                </Text>
                            </ScrollView>
                        </View>

                        <View style={styles.btnModal1}>
                            <TouchableOpacity style={styles.btnModalCtn1}>
                                <Text style={{color: 'white', fontSize: 18}} onPress={() => this.setState({modalVisible1 : false})}>Entendido !</Text>
                            </TouchableOpacity>
                        </View>

                        </View>

                    </View>
                </Modal>
              <View style={styles.headerCtn}>

                  <View style={styles.header}>

                      <TouchableOpacity style={styles.headerGoBack} onPress={this.back}>
                          <Image style={styles.imgHeader} source={require('../../../assets/arrow.svg')}/>
                      </TouchableOpacity>

                      <Text style={{color : 'white', fontSize: 22, fontWeight: 'bold'}}>Formulário</Text>
                  </View>

              </View>

              <View style={styles.mainCtn}>

                <View style={styles.linkCtn}>
                    <TouchableOpacity style={styles.txtBtn}>
                        <Text
                          style={{fontSize : 18, 
                          fontWeight : 'bold', textTransform : 'uppercase',
                          textDecorationLine : 'underline'}}
                          onPress={this.turnModalVisible}
                        >Ler os termos de contrato</Text>
                    </TouchableOpacity>
                </View>
                  <ScrollView>

                  <View style={styles.questCtn}>
                      <View style={styles.quest}>
                          <Text style={{color: 'white', fontSize: 17, textAlign: 'center'}}>1- Sua loja tem espaço para o descarte separado de aparelhos eletrônicos para seus clientes?</Text>
                      </View>

                      <View style={styles.questBtnCtn}>
                          <View style={styles.questBtnMiddle}>
                              <TouchableOpacity 
                              disabled={this.state.lockBtnTrue1} 
                              onPress={this.onPressYes1} 
                              style={{
                                   width: '60%',
                                   height: '35%',
                                   backgroundColor: this.state.btnYesColor1,
                           
                                   justifyContent: 'center',
                                   alignItems : 'center',
                           
                                   borderRadius : 8,
                              }}>
                                  <Text style={{color : 'white', fontSize: 16}}>Sim</Text>
                              </TouchableOpacity>
                          </View>
                          <View style={styles.questBtnMiddle}>
                              <TouchableOpacity
                              onPress={this.onPressNo1}
                              disabled={this.state.lockBtnFalse1}
                              style={{
                                   width: '60%',
                                   height: '35%',
                                   backgroundColor: this.state.btnNoColor1,
                           
                                   justifyContent: 'center',
                                   alignItems : 'center',
                           
                                   borderRadius : 8,
                              }}>
                                  <Text style={{color : 'white', fontSize: 16}}>Não</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>
                  <View style={styles.questCtn}>
                      <View style={styles.quest}>
                          <Text style={{color: 'white', fontSize: 17, textAlign: 'center', width: '90%'}}>2- Sua loja terá o comprometimento com o nosso programa e manterá contato para futuras atualizações no sistema?</Text>
                      </View>

                      <View style={styles.questBtnCtn}>
                          <View style={styles.questBtnMiddle}>
                              <TouchableOpacity 
                              disabled={this.state.lockBtnTrue2} 
                              onPress={this.onPressYes2} 
                              style={{
                                   width: '60%',
                                   height: '35%',
                                   backgroundColor: this.state.btnYesColor2,
                           
                                   justifyContent: 'center',
                                   alignItems : 'center',
                           
                                   borderRadius : 8,
                              }}>
                                  <Text style={{color : 'white', fontSize: 16}}>Sim</Text>
                              </TouchableOpacity>
                          </View>
                          <View style={styles.questBtnMiddle}>
                              <TouchableOpacity
                              onPress={this.onPressNo2}
                              disabled={this.state.lockBtnFalse2}
                              style={{
                                   width: '60%',
                                   height: '35%',
                                   backgroundColor: this.state.btnNoColor2,
                           
                                   justifyContent: 'center',
                                   alignItems : 'center',
                           
                                   borderRadius : 8,
                              }}>
                                  <Text style={{color : 'white', fontSize: 16}}>Não</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>
                  <View style={styles.questCtn}>
                      <View style={styles.quest}>
                          <Text style={{color: 'white', fontSize: 17, textAlign: 'center'}}>3- Sua loja vende aparelhos eletrônicos ou equipamentos relacionados a computadores?</Text>
                      </View>

                      <View style={styles.questBtnCtn}>
                          <View style={styles.questBtnMiddle}>
                              <TouchableOpacity 
                              disabled={this.state.lockBtnTrue3} 
                              onPress={this.onPressYes3} 
                              style={{
                                   width: '60%',
                                   height: '35%',
                                   backgroundColor: this.state.btnYesColor3,
                           
                                   justifyContent: 'center',
                                   alignItems : 'center',
                           
                                   borderRadius : 8,
                              }}>
                                  <Text style={{color : 'white', fontSize: 16}}>Sim</Text>
                              </TouchableOpacity>
                          </View>
                          <View style={styles.questBtnMiddle}>
                              <TouchableOpacity
                              onPress={this.onPressNo3}
                              disabled={this.state.lockBtnFalse3}
                              style={{
                                   width: '60%',
                                   height: '35%',
                                   backgroundColor: this.state.btnNoColor3,
                           
                                   justifyContent: 'center',
                                   alignItems : 'center',
                           
                                   borderRadius : 8,
                              }}>
                                  <Text style={{color : 'white', fontSize: 16}}>Não</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>
                  <View style={styles.questCtn}>
                      <View style={styles.quest}>
                          <Text style={{color: 'white', fontSize: 17, textAlign: 'center'}}>4- Sua loja se encontra em uma região de fácil acesso para a remoção de lixo acumulado?</Text>
                      </View>

                      <View style={styles.questBtnCtn}>
                          <View style={styles.questBtnMiddle}>
                              <TouchableOpacity 
                              disabled={this.state.lockBtnTrue4} 
                              onPress={this.onPressYes4} 
                              style={{
                                   width: '60%',
                                   height: '35%',
                                   backgroundColor: this.state.btnYesColor4,
                           
                                   justifyContent: 'center',
                                   alignItems : 'center',
                           
                                   borderRadius : 8,
                              }}>
                                  <Text style={{color : 'white', fontSize: 16}}>Sim</Text>
                              </TouchableOpacity>
                          </View>
                          <View style={styles.questBtnMiddle}>
                              <TouchableOpacity
                              onPress={this.onPressNo4}
                              disabled={this.state.lockBtnFalse4}
                              style={{
                                   width: '60%',
                                   height: '35%',
                                   backgroundColor: this.state.btnNoColor4,
                           
                                   justifyContent: 'center',
                                   alignItems : 'center',
                           
                                   borderRadius : 8,
                              }}>
                                  <Text style={{color : 'white', fontSize: 16}}>Não</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>
                  

      

                  <View style={styles.btnCtn}>
                      <TouchableOpacity 
                      style={styles.btn} 
                      onPress={this.validation}>
                          <Text style={{ color:'white', fontSize: 17 }}>Finalizar</Text>
                      </TouchableOpacity>
                  </View>

                  </ScrollView>

              </View>

          </View>
      )
  }

}

const styles = StyleSheet.create({
  container : {
      flex : 1,
      backgroundColor: 'white'
  },
  modalCtn1: {
    flex: 1,
    // backgroundColor: 'black',

    justifyContent: 'center',
    alignItems: 'center',
},

modal1: {
    width: '70%',
    height: '60%',
    backgroundColor: 'white',

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,

    alignItems: 'center',
    paddingTop: 10,
},

txtModalCtn1: {
    width: '100%',
    height: '100%',

    paddingBottom: 10,
    // backgroundColor: 'black'
},

scrollCtn1: {
    width: '70%',
    height: '65%',
    backgroundColor: 'white',

    borderColor: '#00873B',
    borderBottomWidth: 3,
    borderRadius: 10,

    alignItems: 'center',
    paddingTop: 10,
},

btnModal1: {
    width: '100%',
    height: '35%',
    // backgroundColor: 'black',

    justifyContent: 'center',
    alignItems: 'center',
},

btnModalCtn1: {
    width: '50%',
    height: '25%',

    backgroundColor: '#4D65BD',

    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
},

  containerModal : {
      flex : 1,
      backgroundColor: 'rgba(200, 199, 199, 0.9)',

      justifyContent: 'center',
      alignItems: 'center',

  },
  
  modalCtn : {
    width: '80%',
    height: '40%',
    backgroundColor: 'white',

    shadowColor: 'red',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,

    borderRadius: 10,
    marginTop: 10,
  },

  headerModal : {
    width: '100%',
    height: '35%',
    // backgroundColor: 'red'

    alignItems : 'center',
    justifyContent: 'center'
  },

  xStyle : {
    width: '30%',
    height: '96%'
  },

  txtModal : {
    width: '100%',
    height : '40%',
    // backgroundColor : 'green',

    justifyContent: 'center',
    alignItems: 'center',
  },

  btnModalCtn : {
    width: '100%',
    height: '25%',
    // backgroundColor: 'blue',

    justifyContent : 'center',
    alignItems: 'center',
  },

  btnModal : {
    width: '35%',
    height: '55%',
    backgroundColor: '#00873B',

    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerCtn : {
      height: '30%',
      width: '100%',
      backgroundColor: '#00873B',

      justifyContent: 'center',
  },

  header : {
      width: '100%',
      height: '20%',
      // backgroundColor: 'red',

      flexDirection : 'row',
      alignItems: 'center',
  },

  headerGoBack : {
      width: '15%',
      height: '100%',
      //backgroundColor: 'blue',
      
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
  },

  imgHeader : {
      width: '87%',
      height: '80%',
  },

  mainCtn : {
      height: '70%',
      width: '100%',
      //backgroundColor: 'red',

      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column',
  },

  linkCtn : {
    width: '100%',
    height : '25%',
    // backgroundColor : 'red',

    justifyContent: 'center',
    alignItems : 'center',
  },

  txtBtn : {
    width : '70%',
    height : '30%',
    // backgroundColor : 'green',

    justifyContent: 'center',
    alignItems: 'center',
  },

  questCtn : {
      width: '100%',
      height: '60%',
    //   backgroundColor: 'yellow',

      justifyContent: 'center',
      alignItems: 'center'
  },

  quest : {
      width: '90%',
      height: '35%',
      backgroundColor: '#979797',

      borderRadius: 10,

      justifyContent: 'center',
      alignItems: 'center',
  },

  questBtnCtn: {
      width: '90%',
      height: '45%',
      // backgroundColor: 'blue',

      flexDirection : 'row',
  },

  questBtnMiddle: {
      width: '50%',
      height: '100%',
      // backgroundColor: 'red',

      justifyContent: 'center',
      alignItems: 'center'
  },

  btnCtn : {
      width: '100%',
      height: 90,
      // backgroundColor: 'red',

      justifyContent: 'center',
      alignItems: 'center',
  },

  btn : {
      width: '35%',
      height: '45%',
      backgroundColor: '#008763',

      borderRadius: 8,

      justifyContent: 'center',
      alignItems: 'center',
  },
}) 
   