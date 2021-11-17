import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ScrollView, FlatList, ImageBackground } from 'react-native';

export default class perfilCm extends Component {
    constructor(props)
    {
        super(props)
        this.state = {}
    }

    render()
    {
        return(
            <View style={styles.container}>
                <View style={styles.ctnImg}>
                    <Image 
                    style={{width: 80, height: 80}} 
                    source={require('../../../assets/cell.svg')}
                    />
                </View>

                <View style={styles.opCtn}>
                    <TouchableOpacity>
                        <Text style={styles.txtOp}>Ver a lista de lojas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.txtOp}>Ler os termos de contrato</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infsCtn}>
                    <View style={styles.imageCtn}>
                        <Image 
                        style={{width: 120, height: 120}} 
                        source={require('../../../assets/perfil.svg')}/>

                        <TouchableOpacity>
                            <Text style={{color: 'white', fontSize: 17,}}>Editar Imagem</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.txtCtn}>

                        <Text style={{color: 'white', fontSize: 15, textAlign: 'center',}}>Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                        <TouchableOpacity>
                            <Text style={{color: 'white', fontSize: 17,}}>Editar Descrição</Text>
                        </TouchableOpacity>
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

    ctnImg: {
        width: '100%',
        height: '13%',
        // backgroundColor: 'red',

        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    opCtn: {
        width: '100%',
        height: '20%',
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

})