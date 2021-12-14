import React, { Component } from "react";
import { View, Text, StyleSheet, Style, TouchableOpacity, ImageBackground, Image, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class userDuvida extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            txt : '',
            backColor1 : '#00873B',
            backColor2 : '#00873B'
        }
    }

    returnToCad = () =>
    {
        this.props.navigation.navigate('cadaUser')
    }

    comercianteTxt = () =>
    {
        this.setState({txt : 'se tu é comerciante tu clica no COMERCIANTE NÉ O ANIMAL'})
        this.setState({backColor1 : 'blue'})
        this.setState({backColor2 : '#00873B'})
    }

    usuarioTxt = () =>
    {
        this.setState({txt : 'se tu é cliente tu clica no CLIENTE NÉ O ANIMAL'})
        this.setState({backColor2 : 'blue'})
        this.setState({backColor1 : '#00873B'})
    }

    render()
    {
        return(
            <View style={styles.container}>
                <View style={styles.headerCtn}>
                    <View style={styles.headerOpt}>
                        <View style={styles.headerOptCtn}>
                            <TouchableOpacity style={styles.headerBtn} onPress={this.returnToCad}>
                                <Image style={styles.headerArrow} source={require('./../../../assets/arrow.svg')}/>
                            </TouchableOpacity>

                            <Text style={styles.headerTxt}>Qual selecionar ?</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.optionsCtn}>
                    <TouchableOpacity style={{
                         width : '35%',
                         height : '40%',
                         backgroundColor : this.state.backColor1,
                 
                         borderRadius : 8,
                 
                         alignItems : 'center',
                         justifyContent : 'center',
                    }} onPress={this.comercianteTxt}>
                        <Text style={styles.btnTxt}>Comerciante</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                         width : '35%',
                         height : '40%',
                         backgroundColor : this.state.backColor2,
                 
                         borderRadius : 8,
                 
                         alignItems : 'center',
                         justifyContent : 'center',
                    }} onPress={this.usuarioTxt}>
                        <Text style={styles.btnTxt}>Cliente</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.txtBtn}>
                    <View style={styles.descBtn}>
                            <Text 
                            style=
                            {{fontSize : 16, width : '90%', textAlign : 'center', marginTop : 10}}>{this.state.txt}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },

    headerCtn : {
        width: '100%',
        height: '30%',
        backgroundColor: '#00873B',
    
        justifyContent: 'center',
      },
    
      headerOpt : {
        width: '100%',
        height: '35%',
        // backgroundColor: 'orange',
    
        alignItems: 'flex-end'
      },
    
      headerOptCtn: {
        width: '90%',
        height: '100%',
        // backgroundColor: 'blue',
    
        alignItems: 'center',
        flexDirection: 'row'
      },
    
      headerBtn: {
        width: '15%',
        height: '40%',
        // backgroundColor: 'red',
    
        marginRight: 15,
      },
    
      headerArrow : {
        width: '100%',
        height: '100%',
      },
    
      headerTxt : {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },

      optionsCtn : {
        width : '100%',
        height : '15%',
        // backgroundColor : 'red',

        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
      },

      btnStyle : {
        width : '35%',
        height : '40%',
        backgroundColor : '#00873B',

        borderRadius : 8,

        alignItems : 'center',
        justifyContent : 'center',
      },

      btnTxt : {
        fontSize : 17,
        color : 'white',
        fontWeight : 'bold',
      },
    
      txtBtn : {
        width : '100%',
        height : '55%',

        justifyContent : 'center',
        alignItems : 'center',
    },
    
    descBtn : {
        width : '90%',
        height : '80%',
        backgroundColor : 'rgba(196, 196, 196, 0.75)',
        borderRadius : 10,
        alignItems : 'center',
      },
})

