import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

import Home from '../Home/home'
import Login from '../user/login'
import Edicao from '../user/edicao'
import Lista from '../lista/lista';
import Trouble from '../troubleshooting/troubleshooting'
import Solucao from '../solucao/solucao'
import SaibaMais from '../saiba/saibaMais';
import perfilCm from '../user/perfilCm';
import Verificacao from '../troubleshooting/verficacao';

const Drawer = createDrawerNavigator()

export default class drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomePag: '',
            userToken: '',
        }
    }


    token = async () => {
        try {
            const resp = await AsyncStorage.getItem('userToken');

            console.log(resp)

            var decode = jwtDecode(resp).role;

            console.log(decode)

            if (decode === '2') 
            {
                return this.setState({ userToken: '2' })
            }
            if (decode === '3')
             {
                return this.setState({ userToken: '3' })
            }
            if (decode !== '2' || decode !== '3')
            {
                return this.setState({ userToken: '' })
            }

        } catch (error) {
            console.warn(error)
        }

    }

    componentDidMount() {
        this.token()
    }

    render() {
        return (
            <Drawer.Navigator
                options={({ route }) => ({ title: route.params.name })}
                screenOptions={{
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#00873B',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },

                    drawerActiveTintColor: '#FFF',
                    drawerInactiveTintColor: '#FFF',
                    drawerPosition: 'left',
                    drawerStyle: {
                        backgroundColor: '#00873B',
                        borderRadius: 20,
                        height: '60%',
                        width: '50%',
                    },
                }}>

            {
                this.state.userToken === '' ? (
                <>
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen options={({ headerShown: false })} name="Login" component={Login} />
                    <Drawer.Screen name="Lojas" component={Lista} />
                    <Drawer.Screen options={({ headerShown: true })} name="Soluções" component={Solucao} />
                    <Drawer.Screen name="Cadastrar sua loja" component={SaibaMais} />
                    {/* <Drawer.Screen name='teste' component={Verificacao} /> */}
                </>
                ) : (
                    this.state.userToken === '2' ? (
                        <>
                            <Drawer.Screen name="Home" component={Home} />
                            {/* <Drawer.Screen name='teste' component={Verificacao} /> */}
                            <Drawer.Screen name="Lojas" component={Lista} />
                            <Drawer.Screen options={({ headerShown: true })} name="Soluções" component={Solucao} />
                            <Drawer.Screen name="Verificação" component={Trouble} />
                            {/* <Drawer.Screen name="Perfil da loja" component={perfilCm} /> */}
                            <Drawer.Screen name="Cadastrar sua loja" component={SaibaMais} />

                        </>
                    ) : (
                        <>
                            <Drawer.Screen name="Home" component={Home} />
                            <Drawer.Screen name="Lojas" component={Lista} />
                            <Drawer.Screen options={({ headerShown: true })} name="Soluções" component={Solucao} />
                            <Drawer.Screen name="Verificação" component={Trouble} />
                            {/* <Drawer.Screen name="Perfil" component={Edicao} /> */}
                            <Drawer.Screen name="Cadastrar sua loja" component={SaibaMais} />
                            {/* <Drawer.Screen name='teste' component={Verificacao} /> */}
                        </>
                    )
                )
               
            }
            

            
            </Drawer.Navigator>
        )
    }
}


