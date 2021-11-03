import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

export default class Lista extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            lista : [],
        }
    }

    render()
    {
        return(
         <View style={styles.container}>

             <View style={styles.listaCtn}>

                <View style={styles.ImgCtn}>
                    <View style={styles.Img}>
                    </View>
                </View>

                <View style={styles.arrow}>
                    <Image></Image>
                </View>

                <View style={styles.lista}>
                    <View style={styles.h1Lista}>
                        <Text style={styles.h1}>Nome da loja</Text>
                    </View>

                    <View style={styles.infsLista}>

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
        flexDirection: 'column',
        alignItems: 'center',
    },

    listaCtn: {
        width: '85%',
        height: '20%',
        backgroundColor: 'green',

        borderRadius: 10,

        flexDirection: 'row',
    },

    ImgCtn: {
        width: '40%',
        height: '100%',
        // backgroundColor: 'gray',

        justifyContent: 'center',
        alignItems: 'center',
    },
    
    Img: {
        width: '90%',
        height: '80%',
        backgroundColor: 'gray',
    },

    lista: {
        width: '55%',
        height: '100%',
        backgroundColor: 'red',

        justifyContent: 'flex-end'
    },

    arrow: {
        width: '5%',
        height: '100%',
        backgroundColor: 'orange',
    },

    h1Lista: {
        width: '100%',
        height: '15%',
        backgroundColor: 'blue'
    },

    h1: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },

    infsLista: {
        height: '75%',
        width: '100%',
        backgroundColor: 'purple'
    },
})