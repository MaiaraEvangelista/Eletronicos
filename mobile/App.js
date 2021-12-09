import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Drawer from './src/pages/drawer/drawer'
import cadastroUser from './src/pages/user/cadastroUser'
import cadastroLoja from './src/pages/cadastro_cm/cadastroLoja'
import Verificacao from './src/pages/troubleshooting/verficacao'

const AuthSatck = createStackNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <AuthSatck.Navigator
        headerMode='none'
      >
        
        <AuthSatck.Screen name = 'drawer' component={Drawer}/>
        <AuthSatck.Screen name = 'cadaUser' component={cadastroUser}/>
        <AuthSatck.Screen name = 'cadaLoja' component={cadastroLoja}/>
        <AuthSatck.Screen name='teste' component={Verificacao} />
 
      </AuthSatck.Navigator>
    </NavigationContainer>
  );
}
