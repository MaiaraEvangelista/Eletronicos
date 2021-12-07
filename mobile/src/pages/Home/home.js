import { Component } from "react";
import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, Dimensions, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import { color } from "react-native-reanimated";


const {width} = Dimensions.get("window");
const height = width * 100 / 140

const imagem = [
    require('../../../assets/bannerHome.svg'),
    require('../../../assets/bannerHome2.svg'),
    require('../../../assets/bannerHome3.svg'),
]


export default class Home extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            setModal : false
        }
    }

    saibaMais = () => 
    {
        this.props.navigation.navigate('Divulgação')
    }

    verif = async () =>
    {
        try {
            const resp = await AsyncStorage.getItem('userToken');

            console.log(resp);

            var decode = jwtDecode(resp).role;

            console.log(decode)

           if (decode === '2' || decode === '3') 
           {
            this.props.navigation.navigate('Verificação')
           }

        } catch (error) {
            console.warn(error)
            this.setState({setModal : true})
        }
    }

    solucoes = () =>
    {
        this.props.navigation.navigate('Soluções')
    }

    list = () =>
    {
        this.props.navigation.navigate('Lojas')
    }

    login = () =>
    {
        this.props.navigation.navigate('Login')
        this.setState({setModal : false})
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
                                <Text style={{fontSize: 16, width: '70%', textAlign: 'center'}}>Opss.. Para acessar este conteúdo é necessario ter efetuado um login</Text>
                            </View>

                            <View style={styles.btnModalCtn}>
                                <TouchableOpacity style={styles.btnCtnModal} onPress={this.login}>
                                    <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </Modal>
                <View>
                    <ScrollView 
                    pagingEnabled 
                    horizontal 
                    showsHorizontalScrollIndicator={true}
                    style={{width, height}} >
                        {
                            imagem.map((imagem, index) => (
                                <ImageBackground
                                key={index} 
                                style={{width, height, resizeMode: 'cover'}} 
                                source={imagem}
                                >
                                </ImageBackground>
                            ))
                        }
                    </ScrollView>
                </View>
                    
                <View style={{height: '55%', width: '100%'}}>
                    <ScrollView>
                        <View 
                        style={{height: 230, width: '100%', justifyContent: 'space-around', alignItems: 'center'}}
                        >
                            <Text style={styles.txt}>
                                Deseja divulgar os seus negócios ?
                            </Text>

                            <TouchableOpacity style={styles.btnCtn} onPress={() => this.saibaMais()}>
                                <Text style={{fontSize: 17, fontWeight: 'bold'}}>Saiba mais !!</Text>
                            </TouchableOpacity>
                        </View>

                        <View 
                        style={{height: 250, width: '100%', backgroundColor: '#00873B', marginTop: 10, justifyContent: 'center', 
                        alignItems: 'center'}}
                        >
                            <ImageBackground style={{height: '100%', width: '100%'}} source={require('../../../assets/grup.svg')}>
                                <View 
                                style={{height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
                                >
                                    <Text style={styles.txtOp1}>Celular sem utilidade ?</Text>
                                </View>

                                <View style={styles.ctnOp1_2}>
                                    <TouchableOpacity style={styles.btn} onPress={() => this.verif()}>
                                        <Text style={styles.txtOp1_2}>Verificação</Text>
                                    </TouchableOpacity>

                                        <Text style={styles.txtOp1_2}>ou</Text>

                                    <TouchableOpacity style={styles.btn} onPress={() => this.solucoes()}>
                                        <Text style={styles.txtOp1_2}>Soluções</Text>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>

                        <View
                        style={{height: 230, width: '100%', marginTop: 40, justifyContent: 'space-around', alignItems: 'center'}}
                        >
                             <ImageBackground style={{height: '100%', width: '100%'}} source={require('../../../assets/Group2.svg')}>
                                <View 
                                style={{height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
                                >
                                    <Text style={styles.txtOp1}>Deseja reciclar o smartphone ?</Text>
                                </View>

                                <View style={styles.ctnOp1_2}>
                                    <TouchableOpacity style={styles.btn} onPress={() => this.list()}>
                                        <Text style={styles.txtOp1_2}>Recicle já !!</Text>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={styles.footer}>
                        </View>
                    </ScrollView>
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
        height: '30%',
        // backgroundColor: 'red',

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',

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

    txt : {
        width: '50%',
        fontSize: 20,
        color: 'black',

        textAlign: 'center'
    },

    btnCtn : {
        width: 150,
        height: 35,

        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 7,

        justifyContent: 'center',
        alignItems: 'center',
    },

    txtOp1: {
        fontSize: 20,
        color: 'white',

        textAlign: 'center'
    },

    ctnOp1_2: {
        width: '100%',
        height: '50%',

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        // backgroundColor: 'red',
    },

    btn: {
        width: 150,
        height: 35,

        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 7,

        justifyContent: 'center',
        alignItems: 'center',
    },

    txtOp1_2: {
        fontSize: 17,
        color: 'white',
    },

    footer: {
        marginTop: 40,
        width: '100%',
        height: 70,

        backgroundColor: '#3D3D3D',
    },
});