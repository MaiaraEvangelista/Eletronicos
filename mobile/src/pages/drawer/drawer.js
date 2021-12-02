import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import cadastroUser from '../user/cadastroUser';

const Drawer = createDrawerNavigator()

export default class drawer extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            nomePag : '',
            userToken : Boolean,
            Token : '',
        }
    }

    
    token = async () => {
        const x = await AsyncStorage.getItem('userToken')

        await this.setState({Token : x})

        if (this.state.Token === null) {
            this.setState({userToken : false})
            console.warn('ta falso')

            const teste = await AsyncStorage.getItem('userToken')
            console.warn(teste)
        }
        if(this.state.Token !== null){
            this.setState({userToken : true})
            console.warn('ta true')

            const teste = await AsyncStorage.getItem('userToken')
            console.warn(teste)
        }
    }


    componentDidMount()
    {
        this.token()
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
                  height: '60%',
                  width: '50%',
                },
            }}> 

                    {
                        this.state.userToken === false ? (
                            <>
                              <Drawer.Screen name="Home" component={Home} />
                              <Drawer.Screen options={({headerShown : false})} name="Login" component={Login} />
                              <Drawer.Screen name="Lojas" component={Lista}/>
                              <Drawer.Screen  options={({headerShown : true})}  name ="Soluções" component={Solucao}/>
                              <Drawer.Screen name="Divulgação" component={SaibaMais}/>
                            </>
                          ) : (
                            <>
                              <Drawer.Screen  options={({headerShown : true})}  name ="Soluções" component={Solucao}/>
                              <Drawer.Screen name="Home" component={Home}/>
                              {/* <Drawer.Screen  options={({headerShown : false})} name="Login" component={Login}/> */}
                              <Drawer.Screen name="Lojas" component={Lista}/>
                              <Drawer.Screen  options={{headerShown: true}} name ="Verificação" component={Trouble}/>
                              <Drawer.Screen name="Editar Perfil" component={Edicao}/>
                              <Drawer.Screen name="Perfil comerciante" component={perfilCm}/>
                              <Drawer.Screen name="Divulgação" component={SaibaMais}/>
                            </>
                          ) 
                    }

            </Drawer.Navigator>
        )
    }
}
