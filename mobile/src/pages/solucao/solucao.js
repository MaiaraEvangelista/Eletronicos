import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ScrollView, FlatList, ImageBackground } from 'react-native';

export default class Solucao extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalVisible1 : false,
            modalVisible2 : false,
            modalVisible3 : false,
            modalVisible4 : false,
            modalVisible5 : false,
        }
    }

    render()
    {
        return(
            <View style={styles.container}>

                    <Modal 
                    transparent={true}
                    visible={this.state.modalVisible1}
                    animationType="slide"
                    >
                        <View style={styles.containerModal}>
                            <View style={styles.ctnModal}>
                                <View style={styles.headModal}>
                                    <Text 
                                    style={{fontSize: 20, color: 'white'}}
                                    >
                                        Sistema de troca
                                    </Text>
                                    <TouchableOpacity 
                                    // style={{height: '100%', width: '100%'}} 
                                    onPress={() => this.setState({modalVisible1 : false})}
                                    >
                                        <Image style={styles.xImg} source={require('../../../assets/x.svg')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.txtModal}>

                                    <Text style={{color : 'white', fontSize: 15, marginLeft: 10, marginRight: 10, textAlign: 'center'}}>
                                        Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                                </View>

                            </View>
                        </View>
                    </Modal>

                    <Modal 
                    transparent={true}
                    visible={this.state.modalVisible2}
                    animationType="slide"
                    >
                        <View style={styles.containerModal}>
                            <View style={styles.ctnModal}>
                                <View style={styles.headModal}>
                                    <Text style={{fontSize: 20, color: 'white'}}>Desmontagem</Text>
                                    <TouchableOpacity 
                                    // style={{height: '100%', width: '100%'}} 
                                    onPress={() => this.setState({modalVisible2 : false})}
                                    >
                                        <Image style={styles.xImg} source={require('../../../assets/x.svg')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.txtModal}>

                                    <Text style={{color : 'white', fontSize: 15, marginLeft: 10, marginRight: 10, textAlign: 'center'}}>
                                        Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                                </View>

                            </View>
                        </View>
                    </Modal>

                    <Modal 
                    transparent={true}
                    visible={this.state.modalVisible3}
                    animationType="slide"
                    >
                        <View style={styles.containerModal}>
                            <View style={styles.ctnModal}>
                                <View style={styles.headModal}>
                                    <Text style={{fontSize: 20, color: 'white'}}>Montagem</Text>
                                    <TouchableOpacity 
                                    // style={{height: '100%', width: '100%'}} 
                                    onPress={() => this.setState({modalVisible3 : false})}
                                    >
                                        <Image style={styles.xImg} source={require('../../../assets/x.svg')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.txtModal}>

                                    <Text style={{color : 'white', fontSize: 15, marginLeft: 10, marginRight: 10, textAlign: 'center'}}>
                                        Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                                </View>

                            </View>
                        </View>
                    </Modal>

                    <Modal 
                    transparent={true}
                    visible={this.state.modalVisible4}
                    animationType="slide"
                    >
                        <View style={styles.containerModal}>
                            <View style={styles.ctnModal}>
                                <View style={styles.headModal}>
                                    <Text style={{fontSize: 20, color: 'white'}}>Venda</Text>
                                    <TouchableOpacity 
                                    // style={{height: '100%', width: '100%'}} 
                                    onPress={() => this.setState({modalVisible4 : false})}
                                    >
                                        <Image style={styles.xImg} source={require('../../../assets/x.svg')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.txtModal}>

                                    <Text style={{color : 'white', fontSize: 15, marginLeft: 10, marginRight: 10, textAlign: 'center'}}>
                                        Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                                </View>

                            </View>
                        </View>
                    </Modal>

                    <Modal 
                    transparent={true}
                    visible={this.state.modalVisible5}
                    animationType="slide"
                    >
                        <View style={styles.containerModal}>
                            <View style={styles.ctnModal}>
                                <View style={styles.headModal}>
                                    <Text style={{fontSize: 20, color: 'white'}}>Recolhimento</Text>
                                    <TouchableOpacity 
                                    // style={{height: '100%', width: '100%'}} 
                                    onPress={() => this.setState({modalVisible5 : false})}
                                    >
                                        <Image style={styles.xImg} source={require('../../../assets/x.svg')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.txtModal}>

                                    <Text style={{color : 'white', fontSize: 15, marginLeft: 10, marginRight: 10, textAlign: 'center'}}>
                                        Lorem Ipsum  an unknowntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releasop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                                </View>

                            </View>
                        </View>
                    </Modal>

                    <View style={styles.bannerCtn}>
                        <ImageBackground 
                        resizeMode="cover" 
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} 
                        source={require('../../../assets/reparo.svg')}>
                                <Text style={{color: 'white', fontSize: 18}}>
                                    Veja a solução para o seu smartphone e resolva já !!   
                                </Text>
                        </ImageBackground>
                    </View>

                    <View style={styles.linha1}>

                        <View style={styles.linhaMeio}>

                            <Text style={{marginBottom: 10, fontSize: 18}}>Sistema de</Text>

                            <View style={styles.btnSolucao}>
                                <TouchableOpacity 
                                onPress={() => this.setState({modalVisible1 : true})}>
                                    <Image style={{height: 90, width: 70}} source={require('../../../assets/flechas.svg')}/>
                                </TouchableOpacity>
                             </View>

                             <Text style={{marginTop: 10, fontSize: 18}}>Troca</Text>

                        </View>

                        <View style={styles.linhaMeio}>

                            <Text style={{marginBottom: 10, fontSize: 18}}>Desmontagem</Text>

                            <View style={styles.btnSolucao}>
                                <TouchableOpacity 
                                onPress={() => this.setState({modalVisible2 : true})}>
                                    <Image style={{height: 90, width: 90}} source={require('../../../assets/mob.svg')}/>
                                </TouchableOpacity>
                            </View>

                            <Text style={{marginTop: 10, fontSize: 18, color: 'white'}}>.</Text>

                        </View>


                    </View>

                    <View style={styles.linha1}>

                        <View style={styles.linhaMeio}>

                            <Text style={{marginBottom: 10, fontSize: 18}}>Montagem</Text>

                            <View style={styles.btnSolucao}>
                                <TouchableOpacity 
                                onPress={() => this.setState({modalVisible3 : true})}>
                                    <Image style={{height: 90, width: 90}} source={require('../../../assets/montagem.svg')}/>
                                </TouchableOpacity>
                             </View>

                             <Text style={{marginTop: 10, fontSize: 18, color: 'white'}}>Troca</Text>

                        </View>

                        <View style={styles.linhaMeio}>

                            <Text style={{marginBottom: 10, fontSize: 18}}>Venda</Text>

                            <View style={styles.btnSolucao}>
                                <TouchableOpacity 
                                onPress={() => this.setState({modalVisible4 : true})}>
                                    <Image style={{height: 90, width: 90}} source={require('../../../assets/venda.svg')}/>
                                </TouchableOpacity>
                            </View>

                            <Text style={{marginTop: 10, fontSize: 18, color: 'white'}}>.</Text>

                        </View>


                    </View>

                     <View style={styles.linha}>

                            <Text style={{marginBottom: 10, fontSize: 18}}>Recolhimento</Text>

                            <View style={styles.btnSolucao2}>
                                <TouchableOpacity 
                                onPress={() => this.setState({modalVisible5 : true})}>
                                    <Image style={{height: 90, width: 95}} source={require('../../../assets/recolhimento.svg')}/>
                                </TouchableOpacity>
                             </View>

                             <Text style={{marginTop: 10, fontSize: 18, color : 'white'}}>Troca</Text>

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

    containerModal: {
        flex : 1,

        justifyContent: 'center',
        alignItems: 'center',
    },

    ctnModal: {
        height: '30%',
        width: '60%',
        backgroundColor: '#008763',

        borderRadius: 8,

        alignItems: 'center',
    },

    headModal: {
        height: '20%',
        width: '70%',

        flexDirection : 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        // backgroundColor: 'black'
    },

    bannerCtn: {
        marginTop: 10,
        
        width: '100%',
        height: '17%',

        backgroundColor: 'black'
    },

    txtModal: {
        height: '70%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
    },

    xImg: {
        width: 30,
        height: 30, 
    },


    linha1: {
        height: '20%',
        width: '100%',

        flexDirection: 'row',
        marginTop: 70,
        //backgroundColor: 'black',
    },

    linha : {
        height: '20%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 70,
    },

    linhaMeio : {
        width: '50%',
        height: '100%',
        // backgroundColor: 'red',

        justifyContent: 'center',
        alignItems: 'center',
    },  

    btnSolucao: {
        height: '80%',
        width: '70%',
        backgroundColor: '#00873B',

        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center',
    },

    btnSolucao2: {
        height: '80%',
        width: '35%',

        backgroundColor: '#00873B',

        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center',
    },
})