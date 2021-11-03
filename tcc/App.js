import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/user/login'
import Drawer from './src/pages/drawer/drawer'
import cadastroUser from './src/pages/user/cadastroUser'
import cadastroLoja from './src/pages/cadastro_cm/cadastoLoja'
import formCad from './src/pages/cadastro_cm/form'
import edicao from './src/pages/user/edicao'
import lista from './src/pages/lista_lojas/lista'

const AuthSatck = createStackNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <AuthSatck.Navigator
        headerMode='none'
      >

        <AuthSatck.Screen name = 'lista' component={lista}/>
        <AuthSatck.Screen name = 'drawer' component={Drawer}/>
        <AuthSatck.Screen name = 'edicao' component={edicao}/>
        <AuthSatck.Screen name = 'login' component={Login} />
        <AuthSatck.Screen name = 'formCad' component={formCad}/>
        <AuthSatck.Screen name = 'cadastroLoja' component={cadastroLoja}/>
        <AuthSatck.Screen name = 'cadastroUser' component={cadastroUser} />

      </AuthSatck.Navigator>
    </NavigationContainer>
  );
}

