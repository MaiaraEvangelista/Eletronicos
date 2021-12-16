import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import api from '../../services/api';


export default class Lista extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            lista : [],
        }
    }

    buscarLojas = async () => {

        const resposta = await api.get('Loja');

        const dadosApi = resposta.data;
        this.setState({ lista : dadosApi });

        console.warn('ta funfando')
    }

    componentDidMount() {

        this.buscarLojas()

    }

    render()
    {
        return(
            <View style={styles.container}>
                <ScrollView>
                <FlatList
                    contentContainerStyle={styles.container}
                    data={this.state.lista}
                    keyExtractor={item => item.idLoja.id}
                    renderItem={this.renderItem}
                />
                </ScrollView>
            </View>
        )
    }

    renderItem = ({item}) => (

            <View style={styles.flatCtn}>
                <View style={styles.List}>
                    <View style={styles.listImgCtn}>
                        <Image style={{width : '75%',
                     height : '70%'}} source={require('../../../assets/loja.png')}/>
                    </View>
                    <View style={styles.listInfsCtn}>
                        <Text style={{fontSize : 16, fontWeight : 'bold',  flexWrap : 'wrap', width : '70%', textAlign : 'center', color : 'white'}}>{item.nomeComercio}</Text>

                        <View style={styles.txtCtn}>
                            <Text style={styles.listTxt}>{item.uf} -</Text>
                            <Text style={styles.listTxt}> {item.cidade}</Text>
                        </View>

                        <Text style={{fontSize : 13,  flexWrap : 'wrap', width : '100%', textAlign : 'center', color : 'white'}}>{item.rua}</Text>

                        <View style={styles.txtCtn}>
                            <Text style={styles.listTxt}>Número -</Text>
                            <Text style={styles.listTxt}>{item.n}</Text>
                        </View>

                        <View style={styles.txtCtn}>
                            <Text style={styles.listTxt}>Telefone -</Text>
                            <Text style={styles.listTxt}> {item.telefone}</Text>
                        </View>
                        
                    </View>
                </View>
                <View style={styles.descCtn}>
                    <ScrollView>
                        <Text style={{fontSize : 15, width : '90%', textAlign : 'center', color : 'white', marginTop : 10,
                    marginLeft : 18}}>
                            {item.descricao}
                        </Text>
                    </ScrollView>
                </View>
            </View>

    )
}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        // backgroundColor : 'red',
    },

    flatCtn : {
        // backgroundColor : 'blue',
        justifyContent : 'space-around',
        alignItems : 'center',
    },

    List : {
        marginTop : 20,
        width : '80%',
        height : 180,
        backgroundColor : '#00873B',
        borderRadius : 10,

        flexDirection : 'row'
    },

    listImgCtn : {
        width : '50%',
        height : '100%',
        // backgroundColor : 'red',
        justifyContent : 'center',
        alignItems : 'center',
    },

    listInfsCtn : {
        width : '50%',
        height : '100%',
        // backgroundColor : 'blue',

        flexDirection : 'column',
        justifyContent : 'space-around',
        alignItems : 'center',
    },

    txtCtn : {
        width : '100%',
        // backgroundColor : 'red',

        flexDirection : 'row',
        justifyContent : 'center'
    },

    listTxt : {
        color : 'white',
        fontSize : 13.5,
        textAlign : 'center'
    },

    descCtn : {
        width : '70%',
        height : 130,
        backgroundColor : '#004F22',

        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10,

    },
})