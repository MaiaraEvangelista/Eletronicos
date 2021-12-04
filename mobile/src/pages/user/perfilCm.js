import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ScrollView, FlatList, ImageBackground } from 'react-native';
import jwtDecode from 'jwt-decode';

export default class perfilCm extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            modalVisible1 : false,
            dadosLista : {},
            
        }
    }

     decode = () => 
     {
         try {

             var Storage = AsyncStorage.getItem('userToken');

             var token = Storage.data.token;

             var decoded = jwtDecode(token).role;

             console.warn(decoded)
            
         } catch (error) {
             console.warn(error)
         }
     };

     listarLoja = () => 
     {

         try {
            
             const resp = axios.get('http://localhost:5000/api/Usuario/'+this.decode);
    
             this.setState({dadosLista : resp})

         } catch (error) {
             console.warn(error)
             console.warn(this.decode)
         }

     }

     componentDidMount()
     {
          this.decode();
          this.listarLoja();
     }

    nav = () => {
        this.props.navigation.navigate('lista')
    }

    render()
    {
        return(
            <View style={styles.container}>

                <Modal
                 transparent={true}
                 visible={this.state.modalVisible1}
                 animationType="slide"
                >
                    <View style={styles.modalCtn}>
                        <View style={styles.modal}>


                        <View style={styles.scrollCtn}>
                            
                            <ScrollView style={styles.txtModalCtn}>
                                <Text>
                                Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Text>
                            </ScrollView>
                        </View>

                        <View style={styles.btnModal}>
                            <TouchableOpacity style={styles.btnModalCtn}>
                                <Text style={{color: 'white', fontSize: 18}} onPress={() => this.setState({modalVisible1 : false})}>Entendido !</Text>
                            </TouchableOpacity>
                        </View>

                        </View>

                    </View>
                </Modal>
                <View style={styles.ctnImg}>
                    <Image 
                    style={{width: 80, height: 80}} 
                    source={require('../../../assets/cell.svg')}
                    />
                </View>

                <View style={styles.opCtn}>
                    <TouchableOpacity onPress={this.nav}>
                        <Text style={styles.txtOp}>Ver a lista de lojas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({modalVisible1 : true})}>
                        <Text style={styles.txtOp}>Ler os termos de contrato</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infsCtn}>
                    <View style={styles.imageCtn}>
                        <Image 
                        style={{width: 120, height: 120}} 
                        source={require('../../../assets/perfil.svg')}/>
                        {/* <TouchableOpacity>
                            <Text style={{color: 'white', fontSize: 17,}}>Editar Imagem</Text>
                        </TouchableOpacity> */}
                    </View>

                    <View style={styles.txtCtn}>

                        <Text style={{color: 'white', fontSize: 15, textAlign: 'center',}}>Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        </Text>

                        <TouchableOpacity>
                            <Text style={{color: 'white', fontSize: 17,}}>Editar Descrição</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.list}>
                        <View style={styles.listCtn}>

                            <View style={styles.meioList}>
                                <TextInput
                                style={styles.inputList}
                                placeholder='Nome da loja'
                                placeholderTextColor='black'
                                editable={false}
                                />

                                 <TextInput
                                style={styles.inputList}
                                placeholder='CEP'
                                placeholderTextColor='black'
                                editable={false}
                                />

                                 <TextInput
                                style={styles.inputList}
                                placeholder='Endereço'
                                placeholderTextColor='black'
                                editable={false}
                                />
                            </View>

                            <View style={styles.meioList2}>

                                <TextInput
                                style={styles.inputList2}
                                placeholder='CNPJ'
                                placeholderTextColor='black'
                                editable={false}
                                />

                                 <TextInput
                                style={styles.inputList2}
                                placeholder='Rua'
                                placeholderTextColor='black'
                                editable={false}
                                />

                                 <TextInput
                                style={styles.inputList2}
                                placeholder='Complemento'
                                placeholderTextColor='black'
                                editable={false}
                                />

                            </View>
                        </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: 'white',
    },

    modalCtn: {
        flex: 1,
        // backgroundColor: 'black',

        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
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

    txtModalCtn: {
        width: '100%',
        height: '100%',

        paddingBottom: 10,
        // backgroundColor: 'black'
    },

    scrollCtn: {
        width: '70%',
        height: '65%',
        backgroundColor: 'white',

        borderColor: '#00873B',
        borderBottomWidth: 3,
        borderRadius: 10,

        alignItems: 'center',
        paddingTop: 10,
    },

    btnModal: {
        width: '100%',
        height: '35%',
        // backgroundColor: 'black',

        justifyContent: 'center',
        alignItems: 'center',
    },

    btnModalCtn: {
        width: '50%',
        height: '25%',

        backgroundColor: '#4D65BD',

        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center',
    },

    ctnImg: {
        width: '100%',
        height: '13%',
        // backgroundColor: 'red',

        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    opCtn: {
        marginTop: 10,

        width: '100%',
        height: '15%',
        // backgroundColor: 'green',

        justifyContent: 'space-around',
        alignItems: 'center',
    },

    txtOp: {
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    infsCtn: {
        marginTop: 10,

        width: '100%',
        height: '30%',
        backgroundColor: '#00873B',

        flexDirection: 'row',
    },

    imageCtn : {
        width: '35%',
        height: '100%',
        // backgroundColor: 'black',

        justifyContent: 'space-around',
        alignItems: 'center',
    },

    txtCtn: {
        width: '65%',
        height: '100%',
        // backgroundColor: 'purple',

        justifyContent: 'space-around',
        alignItems: 'center',
    },

    list: {
        marginTop: 15,

        width: '100%',
        height: '30%',
        // backgroundColor: 'purple',

        justifyContent: 'center',
        alignItems: 'center',
    },

    listCtn: {
        width: '85%',
        height: '100%',
        backgroundColor: '#B4DEC6',

        flexDirection: 'row',
        borderRadius: 10,
    },

    meioList: {
        width: '50%',
        height: '100%',
        // backgroundColor: 'black'

        justifyContent: 'space-around',
    },

    meioList2: {
        width: '50%',
        height: '100%',
        // backgroundColor: 'pink',

        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },

    inputList: {
        width: '85%',
        height: '20%',
        backgroundColor: 'white',

        paddingLeft: 10,

        position: 'relative',
        right: 10,

        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#008763'
    },

    inputList2: {
        width: '85%',
        height: '20%',
        backgroundColor: 'white',

        paddingLeft: 10,

        position: 'relative',
        left: 10,

        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#008763'
    }

})