import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ScrollView, FlatList, ImageBackground } from 'react-native';

export default class SaibaMais extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            setModal : false
        }
    }

    nav = async () =>
    {
        try {
            const resp = await AsyncStorage.getItem('userToken');

            console.log(resp);

            var decode = jwtDecode(resp).role;

            console.log(decode)

           if (decode === '2') 
           {
            return this.props.navigation.navigate('formLoja')
           }

           if (decode === '3') {
            this.setState({setModal : true})
           }

        } catch (error) {
            console.warn(error)
            this.setState({setModal : true})
        }

    }


    closeModal = () =>
    {
        this.setState({setModal : false})
    }
    
    render()
    {
        return(
            <View style={styles.container}>
                <Modal
                transparent={true}
                visible={this.state.setModal}
                animationType='slide'
                >
                    <View style={styles.modalContainer}>
                        
                        <View style={styles.modalCtn}>
                            <View style={styles.closeCtnModal}>

                                <TouchableOpacity style={styles.closeModal} onPress={this.closeModal}>
                                    <Image style={{height: '100%', width: '100%'}}  source={require('./../../../assets/x.svg')}/>
                                </TouchableOpacity>

                            </View>

                            <View style={styles.imgModal}>
                                <Image style={styles.imgStyle} source={require('./../../../assets/wrong.png')}/>
                            </View>

                            <View style={styles.txtModalCtn}>
                                <Text style={{fontSize: 20, fontWeight: "bold"}}>Acesso negado!!</Text>
                                <Text style={{fontSize: 16, width: '70%', textAlign: 'center'}}>Opss.. Para acessar este conteúdo é necessario ter efetuado um login ou seu usuário não tem permissão</Text>
                            </View>

                            {/* <View style={styles.btnModalCtn}>
                                <TouchableOpacity style={styles.btnCtnModal} onPress={this.login}>
                                    <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
                                </TouchableOpacity>
                            </View> */}
                        </View>

                    </View>
                </Modal>
                <View 
                style={{width: '100%', height: '17%', marginTop: 10}}
                >
                    <ImageBackground style={styles.ImgBanner} resizeMode='cover' source={require('../../../assets/bannerSaiba.png')}>
                        <Text 
                            style={{color: 'white', fontSize: 18}}
                        >Divulgue gratuitamente a sua empresa</Text>
                    </ImageBackground>

                </View>

                <View style={styles.valoresCtn}>
                    <View style={styles.h1Valores}>
                        <Text 
                            style={{fontSize: 24, fontWeight: 'bold'}}
                        >Valores da nossa empresa</Text>
                    </View>

                    <View style={styles.ctnTxt}>

                        <Text 
                        style={{fontSize: 15, textAlign: 'center'}}>
                            Nós somos a Recycle Tech e nossa missão é justamente fazer a preservação do meio ambiente, evitando que nossos problemas ambientais aumente como vem acontecendo atualmente com a evolução da tecnologia. E ainda trazer uma solução rápida e fácil para que nossos usuários possam ter soluções práticas e um bom serviço em relação ao serviço buscado por ambos. Queremos mostrar o quão fácil é dar um bom serviço, e ter uma boa ação, somos bem mais do que uma empresa, somos parceiros mútuos.
                        </Text>

                    </View>

                </View>

                <View style={styles.txtCtn}>

                        <Text style={styles.txtValores}
                         style={{fontSize: 15, textAlign: 'center', color: 'white', 
                         width: '80%'}}>
                            Então, se você e a sua empresa se identificou com os nossos valores e metas, aproveite e cadastre gratuitamente sua loja para a divulgação e ajuda na acessibilidade da reciclagem para os nossos usuários 
                        </Text>

                        <TouchableOpacity style={styles.btnCtn}>
                            <Text 
                                style={{color: 'white', fontSize: 16}}
                                onPress={this.nav}
                            >Cadastre-se já !!</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white'
    },

    modalContainer : {
        flex : 1,
        backgroundColor : 'rgba(200, 199, 199, 0.9)',

        alignItems: 'center',
        justifyContent: 'center',
    }, 

    modalCtn : {
        width : '80%',
        height : '50%',
        backgroundColor : 'white',

        borderRadius : 8,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },

    closeCtnModal : {
        width: '100%',
        height: '15%',
        // backgroundColor: 'yellow',

        justifyContent: 'center',
    },

    closeModal : {
        width: '10%',
        height: '50%',
        // backgroundColor: 'green',

        marginLeft: 20,
    },

    imgModal : {
        width: '100%',
        height: '35%',
        // backgroundColor: 'green',

        justifyContent: 'center',
        alignItems: 'center',
    },

    imgStyle : {
        width: '41%',
        height: '105%',
    },

    txtModalCtn : {
        width: '100%',
        height: '40%',
        // backgroundColor: 'red',

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',

        marginTop: 2,
    },

    btnModalCtn : {
        width: '100%',
        height: '20%',
        // backgroundColor: 'red',

        justifyContent: 'center',
        alignItems: 'center'
    },

    btnCtnModal : {
        width: '40%',
        height: '60%',
        backgroundColor: '#00873B',

        borderRadius : 8,

        justifyContent: 'center',
        alignItems: 'center'
    },  

    ImgBanner : {
        width: '100%',
        height: '100%',

        justifyContent: 'center',
        alignItems: 'center',
    },

    valoresCtn : {
        width: '100%',
        height: '45%',
        marginTop: 30,

        // backgroundColor: 'blue',

        alignItems: 'center',
    },

    h1Valores: {
        width: '100%',
        height: '20%',
        // backgroundColor: 'red',

        justifyContent: 'center',
        alignItems: 'center',
    },

    ctnTxt: {
        width: '80%',
        height: '90%',

        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: 'red'
    },


    txtCtn: {
        width: '100%',
        height: '25%',

        marginTop: 33,

        backgroundColor: '#00873B',

        justifyContent: 'space-around',
        alignItems: 'center',
    },

    btnCtn: {
        width : '40%',
        height: '25%',

        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',

        justifyContent: 'center',
        alignItems: 'center',
    },
})