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
                 
                <View style={styles.imgCtn}>
                    <View style={styles.img}>
                    </View>
                </View>

                <View style={styles.arrow}>

                    <TouchableOpacity style={styles.arrowCtn}>
                        <Image style={styles.arrowDown} source={require('../../../assets/flecha_baixo.svg')}/>
                    </TouchableOpacity>

                </View>

                <View style={styles.infsCtn}>
                    <View style={styles.img}>
                        <View style={styles.h1Ctn}>
                            <Text style={styles.h1}>Nome da loja</Text>
                        </View>
                        <View style={styles.txtCtn}>
                            <Text style={styles.txt}>3,5 estrelas</Text>
                            <Text style={styles.txt}>Https://siteEx.com.br</Text>
                            <Text style={styles.txt}>(11)98764-1243</Text>
                        </View>
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
        width: '80%',
        height: '22%',
        backgroundColor: 'green',

        flexDirection: 'row',

        borderRadius: 10,
    },

    imgCtn: {
        width: '45%',
        height: '100%',
        // backgroundColor: 'red',

        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    img: {
        width: '85%',
        height: '70%',
        // backgroundColor: 'gray',

        marginBottom: '15%'
    },

    arrow: {
        width: '10%',
        height: '100%',
        // backgroundColor: 'orange',
        
        justifyContent: 'flex-end',
    },

    arrowCtn: {
        width: '100%',
        height: '25%',
    },

    arrowDown: {
        width: '100%',
        height: '100%',
    },

    infsCtn: {
        width: '45%',
        height: '100%',
        // backgroundColor: 'pink',

        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    h1Ctn: {
        width: '100%',
        height: '20%',
        // backgroundColor: 'red',
    },

    h1: {
        fontSize: '100%',
        color: 'white',
        fontWeight: 'bold',
    },
    
    txtCtn: {
        width: '100%',
        height: '80%',

        justifyContent: 'space-around',

        flexWrap: 'wrap '  

    },

    txt: {
        fontSize: '85%',
        color: 'white',
    },  
})