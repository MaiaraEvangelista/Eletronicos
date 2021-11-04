import axios from "axios";
import React, { Component } from "react";
import { View, Text, StyleSheet,ImageBackground} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default class Trouble extends Component{
    constructor(props)
    {
        super(props);
        this.state = {

        }
    }

    render()
    {
        return(
            <View style={styles.container}>
                <View style={styles.banner}>
                        <ImageBackground resizeMode='cover' style={styles.bannerImg} source={require('../../../assets/bannerImg.png')}>
                            <Text style={styles.txtBanner}>Verifique se o seu smartphone está em boas condições</Text>
                        </ImageBackground>
                </View>

                <View style={styles.btnCtnVerif}>
                    <TouchableOpacity style={styles.btnVerif}>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    banner: {
        height: '25%',
        width: '100%',
        backgroundColor: 'black',
    },

    bannerView: {

    },

    bannerImg: {
        flex: 1,
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
        opacity: '80%',
    },

    txtBanner: {
        width: '60%',
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
    },

    btnCtnVerif: {
        width: '100%',
        height: '15%',
        backgroundColor: 'black'
    },

    btnVerif: {
        width: '30%',
        height: '50%',

        borderWidth: '2',
        borderColor: 'red',
    },
})