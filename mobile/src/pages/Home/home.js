import { Component } from "react";
import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

const {width} = Dimensions.get("window");
const height = width * 100 / 140

const imagem = [
    'https://image.shutterstock.com/image-vector/3d-abstract-digital-technology-background-600w-1931157161.jpg',
    'https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg',
    'https://image.shutterstock.com/image-vector/abstract-gradient-wave-particles-big-600w-1930623710.jpg'
]


export default class Home extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        }
    }

    saibaMais = () => 
    {
        this.props.navigation.navigate('Divulgação')
    }

    verif = () =>
    {
        this.props.navigation.navigate('Verificação')
    }

    solucoes = () =>
    {
        this.props.navigation.navigate('Soluções')
    }

    list = () =>
    {
        this.props.navigation.navigate('Lojas')
    }

    render()
    {
        return(
            <View style={styles.container}>
                <View>
                    <ScrollView 
                    pagingEnabled 
                    horizontal 
                    // showsHorizontalScrollIndicator={true}
                    style={{width, height}} >
                        {
                            imagem.map((imagem, index) => (
                                <ImageBackground
                                key={index} 
                                style={{width, height, resizeMode: 'cover'}} 
                                source={{uri : imagem}}
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
                        style={{height: 250, width: '100%', backgroundColor: 'green', marginTop: 10, justifyContent: 'center', 
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