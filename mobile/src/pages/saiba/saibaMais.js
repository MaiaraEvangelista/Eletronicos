import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ScrollView, FlatList, ImageBackground } from 'react-native';

export default class SaibaMais extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
        }
    }

    nav = () =>
    {
        this.props.navigation.navigate('cadaLoja')
    }

    render()
    {
        return(
            <View style={styles.container}>
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
                        style={{fontSize: 16, textAlign: 'center'}}>
                            Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>

                    </View>

                </View>

                <View style={styles.txtCtn}>

                        <Text style={styles.txtValores}
                         style={{fontSize: 16, textAlign: 'center', color: 'white', 
                         width: '80%'}}>
                            Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>

                        <TouchableOpacity style={styles.btnCtn}>
                            <Text 
                                style={{color: 'white', fontSize: 20}}
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

    ImgBanner : {
        width: '100%',
        height: '100%',

        justifyContent: 'center',
        alignItems: 'center',
    },

    valoresCtn : {
        width: '100%',
        height: '35%',
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
        height: '80%',

        justifyContent: 'center',
        alignItems: 'center',

    },


    txtCtn: {
        width: '100%',
        height: '35%',

        marginTop: 20,

        backgroundColor: '#00873B',

        justifyContent: 'space-around',
        alignItems: 'center',
    },

    btnCtn: {
        width : '50%',
        height: '15%',

        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',

        justifyContent: 'center',
        alignItems: 'center',
    },
})