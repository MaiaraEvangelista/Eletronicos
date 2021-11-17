import { createDrawerNavigator } from '@react-navigation/drawer';

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

import Home from '../Home/home'
import Login from '../user/login'
import Edicao from '../user/edicao'
import Lista from '../lista/lista';
import Trouble from '../troubleshooting/troubleshooting'
import Solucao from '../solucao/solucao'
import SaibaMais from '../saiba/saibaMais';
import perfilCm from '../user/perfilCm';

const Drawer = createDrawerNavigator()

export default class drawer extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            nomePag : ''
        }
    }


    render()
    {
        return(
            <Drawer.Navigator
            options={({ route }) => ({ title: route.params.name })}
            screenOptions={{
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle : {
                    backgroundColor : '#00873B',
                    alignItems: 'center',
                    justifyContent: 'center',
                },

                drawerActiveTintColor : '#FFF',
                drawerInactiveTintColor : '#FFF',
                drawerPosition : 'left',
                drawerStyle : {
                  backgroundColor :'#00873B',
                  borderRadius : 20,
                  height: '50%',
                  width: '50%',
                },
            }}> 
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen  options={({headerShown : false})} name="Login" component={Login}/>
                <Drawer.Screen  options={({headerShown : true})}  name ="Soluções" component={Solucao}/>
                <Drawer.Screen name ="Verificação" component={Trouble}/>
                <Drawer.Screen name="Lojas" component={Lista}/>
                <Drawer.Screen name="Editar Perfil" component={Edicao}/>
                <Drawer.Screen name="Perfil comerciante" component={perfilCm}/>
                <Drawer.Screen name="Saiba" component={SaibaMais}/>
            </Drawer.Navigator>
        )
    }
}

const styles = StyleSheet.create({

});