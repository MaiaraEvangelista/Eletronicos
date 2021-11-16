import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

export default class Edicao extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            celular : '',
            opacity : '30%',
            input : false,
            disable : true,
        }
    }

    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.cellCtn}>
                    <Image style={styles.cellImg} source={require('../../../assets/cell.svg')}/>
                </View>

                <View style={styles.ctnInput}>
                    <View style={styles.InputArea}>

                        <View style={styles.justInputs}>
                            <TextInput
                                editable={this.state.input}
                                style={styles.editInput}
                                placeholder="Nome completo"
                                placeholderTextColor='black'
                            />
                            <TextInputMask
                                editable={this.state.input}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                value={this.state.celular}
                                onChangeText={ x =>
                                {
                                    this.setState({
                                    celular : x
                                    })
                                }}
                                    style={styles.editInput}
                                    placeholder="Celular"
                                    placeholderTextColor="black"
                                />
                            <TextInput
                                editable={this.state.input}
                                style={styles.editInput}
                                placeholder="Email"
                                placeholderTextColor='black'
                            />
                            <TextInput
                                editable={this.state.input}
                                style={styles.editInput}
                                placeholder="Senha"
                                placeholderTextColor='black'
                            />
                        </View>

                        <View style={styles.btnArea}>
                            <TouchableOpacity 
                            onPress={() => 
                                this.setState
                                ({  opacity : 100,
                                    input : true,
                                    disable: false,
                                })}
                            style={styles.btnEditar}>
                                <Text style={styles.btnTxt}>Editar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnSalvar}
                                onPress={() => 
                                    this.setState
                                    ({  opacity : '30%',
                                        input : false,
                                    })}
                                
                                disabled={this.state.disable}
                                style={{ 
                                borderColor : '#008763',
                                width: '30%',
                                height: '50%',
                                fontSize: '100%',   
                                
                                opacity: this.state.opacity,
                                borderWidth: 3,
                                borderRadius: 7,
                        
                                alignItems: 'center',
                                justifyContent: 'center',}}
                            >
                                <Text style={styles.btnTxt}
                                    style={{ opacity : this.state.opacity}}
                                >Salvar</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    cellCtn: {
        flex: 0.2,
        // backgroundColor: 'green',

        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cellImg: {
        width: '30%',
        height: '100%',
    },

    ctnInput: {
        flex: 0.6,
        // backgroundColor: 'blue',

        justifyContent: 'flex-end',
    },

    InputArea: {
        width: '100%',
        height: '80%',

        //  backgroundColor: 'gray',
    },

    justInputs: {
        width: '100%',
        height: '70%',

        // backgroundColor: 'red',

        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    editInput: {
       
        width: '40%',
        height: '25%',
        
        borderColor: '#00873B',
        borderWidth: 3,
        borderRadius: 10,
        
        fontSize: 17,
        paddingLeft: 7,
          
    },

    btnArea: {
        width: '100%',
        height: '30%',
        // backgroundColor: 'red',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    btnEditar: {
        width: '30%',
        height: '50%',

        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 7,

        alignItems: 'center',
        justifyContent: 'center',
    },

    btnSalvar: {
        width: '30%',
        height: '50%',

        borderWidth: 3,
        borderRadius: 7,

        alignItems: 'center',
        justifyContent: 'center',
    },  

    btnTxt: {
        fontSize: 10,
        fontFamily: 'Arial',
    },
});