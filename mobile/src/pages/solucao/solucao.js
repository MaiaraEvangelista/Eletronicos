import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ScrollView, FlatList, ImageBackground } from 'react-native';

export default class Solucao extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalVisible1 : false,   

            titulo : '',
            txt : '',
        }
    }

    closeModal = () => 
    {
        this.setState({modalVisible1 : false})
    }

    modalSistema = () =>
    {
        this.setState({
            modalVisible1 : true,
            titulo : 'Sistema de troca',
            txt: 'O sistema de troca é simples, você leva seu aparelho danificado para um ponto de troca e recebe uma porcentagem de desconto em um novo aparelho, ajudando assim a evitar um descarte inadequado.'
        })
        
    }

    modalDesmontagem = () => 
    {
        this.setState({
            modalVisible1 : true,
            titulo : 'Desmontagem',
            txt: 'No sistema de desmontagem, você leva seu aparelho com mau funcionamento, onde eles vão retirar peças funcionais do seu aparelho, e reutilizar em outros aparelhos, como uma substituição, evitando o descarte inadequado.'
        })
    }

    modalMontagem = () =>
    {
        this.setState({
            modalVisible1 : true,
            titulo : 'Montagem',
            txt : 'No sistema de montagem, é praticamente igual o sistema de desmontagem, todas as boas peças retiradas de aparelhos com problemas, vão ser unidas em um aparelho substituindo a peça que estava com problema para voltar a ter um bom funcionamento.'
        })
    }

    modalVenda = () =>
    {
        this.setState({
            modalVisible1 : true,
            titulo : 'venda',
            txt : 'No sistema de venda você leva seu aparelho para ser revendido, com um preço mais acessível.'
        })
    }

    modalRecolhimento = () =>
    {
        this.setState({
            modalVisible1 : true,
            titulo : 'Recolhimento',
            txt : 'No sistema de recolhimento, todas as partes que não possuam um bom funcionamento são recolhidas e "recicladas" ou "destruídas" para que não sejam descartados de forma inadequada no meio ambiente.'
        })
    }

    render()
    {
        return(
            <View style={styles.container}>

                <Modal 
                transparent={true}
                visible={this.state.modalVisible1}
                animationType='slide'
                >
                    <View style={styles.containerModal}>
                        <View style={styles.ctnModal}>
                            <View style={styles.ctnHeaderModal}>

                                <View style={styles.headerModal}>
                                    <Text style={styles.h1Modal}>{this.state.titulo}</Text>
                                    <TouchableOpacity style={styles.btnArrow} onPress={this.closeModal}>
                                        <Image style={styles.arrowModal} source={require('./../../../assets/arrow2.svg')}/>
                                    </TouchableOpacity>
                                </View>

                            </View>
                                <View style={styles.txtCtnModal}>
                                    <ScrollView>
                                        <Text style={styles.txtModal}>
                                            {this.state.txt}
                                        </Text>
                                    </ScrollView>
                                </View>
                        </View>
                    </View>
                </Modal>

                <View style={styles.bannerCtn}>
                    <Image style={styles.bannerImg} source={require('./../../../assets/bannerSolucao.svg')}/>
                </View>

                <View style={styles.infsCtn}>
                    <View style={styles.infsHeader}>
                        <View style={styles.infsMiddle}>
                            <TouchableOpacity style={styles.infsBtn} onPress={this.modalSistema}>
                                <Image style={styles.infsImg} source={require('./../../../assets/sisTroca.svg')}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.infsBtn} onPress={this.modalMontagem}>
                                <Image style={styles.infsImg} source={require('./../../../assets/montagem.svg')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.infsMiddle}>
                        <TouchableOpacity style={styles.infsBtn} onPress={this.modalDesmontagem}>
                                <Image style={styles.infsImg} source={require('./../../../assets/desmontagem.svg')}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.infsBtn} onPress={this.modalVenda}>
                                <Image style={styles.infsImg} source={require('./../../../assets/venda.svg')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.infsFooter}>
                        <TouchableOpacity style={styles.infsFooterBtn} onPress={this.modalRecolhimento}>
                                <Image style={styles.infsFooterImg} source={require('./../../../assets/recolhimento.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'white'
    },

    containerModal : {
        flex: 1,
        backgroundColor: 'rgba(200, 199, 199, 0.8)',

        justifyContent: 'center',
        alignItems: 'center',
    },

    ctnModal : {
        width: '70%',
        height: '50%',
        backgroundColor: '#008763',

        borderRadius: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
    },

    ctnHeaderModal : {
        width: '100%',
        height: '20%',
        // backgroundColor: 'red',

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    headerModal: {
        height: '100%',
        width: '70%',
        // backgroundColor: 'green',

        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    h1Modal : {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },

    btnArrow : {
        height: '40%',
        width: '22%',

        // backgroundColor: 'blue'
    },

    arrowModal :{
        width: '100%',
        height: '100%'
    },

    txtCtnModal : {
        width: '90%',
        height: '71%',

        backgroundColor: 'rgba(0, 197, 144, 0.5)',
        borderRadius: 7,

        marginBottom: 10,

    },

    txtModal : {
        fontSize: 15,
        color: 'white',
        textAlign : 'center',

        marginTop : 10,
    },

    bannerCtn : {
        width: '100%',
        height: '25%',
        // backgroundColor: 'black',

        marginTop: 10,
    },

    bannerImg : {
        width: '100%',
        height: '100%'
    },

    infsCtn : {
        width: '100%',
        height: '70%',
        // backgroundColor: 'black',

        marginTop : 15,
    },

    infsHeader : {
        width: '100%',
        height: '70%',
        // backgroundColor: 'red',

        flexDirection: 'row'
    },

    infsMiddle : {
        width: '50%',
        height: '100%',
        // backgroundColor: 'green'

        justifyContent: 'space-around',
        alignItems: 'center',
    },

    infsBtn : {
        width: '50%',
        height: '45%',
        // backgroundColor: 'red'
    },

    infsImg : {
        width: '100%',
        height: '100%'
    },

    infsFooter : {
        width: '100%',
        height: '30%',
        // backgroundColor: 'blue',

        justifyContent: 'center',
        alignItems: 'center',
    },

    infsFooterBtn : {
        width: '30%',
        height: '100%',
        // backgroundColor: 'green',

        justifyContent: 'center',
        alignItems: 'center',
    },

    infsFooterImg : {
        width: '90%',
        height: '100%',
    },

})