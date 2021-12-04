import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import jwtDecode from 'jwt-decode';

import Home from '../Home/home'
import Login from '../user/login'
import Edicao from '../user/edicao'
import Lista from '../lista/lista';
import Trouble from '../troubleshooting/troubleshooting'
import Solucao from '../solucao/solucao'
import SaibaMais from '../saiba/saibaMais';
import perfilCm from '../user/perfilCm';
import cadastroUser from '../user/cadastroUser';

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

            if (decode === '2') {
                return this.setState({ userToken: '2' })
            }
            if (decode === '3') {
                return this.setState({ userToken: '3' })
            }
            if (decode !== '2' || decode !== '3') {
                return this.setState({ userToken: '' })
            }

        } catch (error) {
            console.warn(error)
        }

    }

    navegacao = () => {
        switch (this.state.userToken) {
            case '':
                <>
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen options={({ headerShown: false })} name="Login" component={Login} />
                    <Drawer.Screen options={({ headerShown: true })} name="Soluções" component={Solucao} />
                    <Drawer.Screen name="Lojas" component={Lista} />
                    <Drawer.Screen name="Divulgação" component={SaibaMais} />
                </>
                break;

            case '2':
                <>
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen options={({ headerShown: false })} name="Login" component={Login} />
                    <Drawer.Screen options={({ headerShown: true })} name="Soluções" component={Solucao} />
                    <Drawer.Screen options={{ headerShown: true }} name="Verificação" component={Trouble} />
                    <Drawer.Screen name="Lojas" component={Lista} />
                    <Drawer.Screen name="Editar Perfil" component={Edicao} />
                    <Drawer.Screen name="Perfil comerciante" component={perfilCm} />
                    <Drawer.Screen name="Divulgação" component={SaibaMais} />
                </>
                break;

            case '3':
                <>
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen options={({ headerShown: false })} name="Login" component={Login} />
                    <Drawer.Screen options={({ headerShown: true })} name="Soluções" component={Solucao} />
                    <Drawer.Screen options={{ headerShown: true }} name="Verificação" component={Trouble} />
                    <Drawer.Screen name="Lojas" component={Lista} />
                    <Drawer.Screen name="Editar Perfil" component={Edicao} />
                    <Drawer.Screen name="Divulgação" component={SaibaMais} />
                </>

            default:
                break;
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

                {/* <>
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen options={({ headerShown: false })} name="Login" component={Login} />
                    <Drawer.Screen options={({ headerShown: true })} name="Soluções" component={Solucao} />
                    <Drawer.Screen name="Lojas" component={Lista} />
                    <Drawer.Screen name="Divulgação" component={SaibaMais} />
                </> */}

                { this.navegacao() }

            </Drawer.Navigator>
        )
    }
}
