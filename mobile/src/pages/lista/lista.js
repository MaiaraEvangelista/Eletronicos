import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';


export default class Lista extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            lista : [],
        }
    }

    buscarLojas = async () => {

        const valorToken = await AsyncStorage.getItem('userToken')
        
        const resposta = await api.get('', {
            headers : {
              'Authorization' : 'Bearer ' + valorToken
            }
          });

          const dadosApi = resposta.data;
          this.setState({ lista : dadosApi });
    }

    componentDidMount() {

        // this.buscarLojas()
        
    }

    render()
    {
        return(
         <View style={styles.container}>

             <FlatList 

                contentContainerStyle={styles.mainBody}
                data={this.state.lista}
                keyExtractor={item => item.idLoja.id}
                renderItem={this.renderItem}

             />

         </View>
        )
    }

    renderItem = ({item}) => (
        <View style={styles.listaDesc}>

                <View style={styles.listaCtn}>

                    <View style={styles.imgCtn}>
                        <View style={styles.img}>
                        </View>
                    </View>

                    <View style={styles.arrow}>

                        {/* <TouchableOpacity style={styles.arrowCtn}>
                            <Image style={styles.arrowDown} source={require('../../../assets/flecha_baixo.png')}/>
                        </TouchableOpacity> */}

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
                    <View style={styles.ctnDesc}>
                    <Text style={styles.txtDesc}>Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Text>

                        <TouchableOpacity style={styles.tchDesc}>
                        <Text style={styles.txtBtnDesc}>Localização</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    listaDesc: {
        width: '80%',
        height: '35%',
        // backgroundColor: 'gray',

        alignItems: 'center',
    },

    listaCtn: {
        width: '100%',
        height: '63%',
        backgroundColor: '#00873B',

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
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue',
    },

    arrowDown: {
        width: '50%',
        height: '50%',
    },

    infsCtn: {
        width: '45%',
        height: '100%',
        // backgroundColor: 'pink',

        marginTop: '3%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    h1Ctn: {
        width: '100%',
        height: '20%',
        // backgroundColor: 'red',
    },

    h1: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },

    txtCtn: {
        width: '100%',
        height: '80%',

        justifyContent: 'space-around',
        // backgroundColor: 'orange',
        flexWrap: 'wrap ',

    },

    txt: {
        fontSize: 14,
        color: 'white',
    },

    ctnDesc: {
        width: '85%',
        height: '50%',
        backgroundColor: '#004F22',

        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,

        alignItems: 'center',
        justifyContent: 'space-around'
    },

    txtDesc: {
        width: '80%',
        height: '50%',

        textAlign: 'center',

        color: 'white',
        fontSize: 14,
    },

    tchDesc: {
       width: '35%',
       height: '25%',
    //    backgroundColor: 'red',

       borderColor: 'white',
       borderRadius: 5,
       borderWidth: 2,

       justifyContent: 'center',
       alignItems: 'center',
    },

    txtBtnDesc: {
        color: 'white',
    },
})