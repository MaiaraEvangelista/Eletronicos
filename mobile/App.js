import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/user/login'
import Drawer from './src/pages/drawer/drawer'
import cadastroUser from './src/pages/user/cadastroUser'
import cadastroLoja from './src/pages/cadastro_cm/cadastroLoja'
import formCad from './src/pages/cadastro_cm/form'
import edicao from './src/pages/user/edicao'
import lista from './src/pages/lista/lista'
import Trouble from './src/pages/troubleshooting/troubleshooting';
import Solucao from './src/pages/solucao/solucao';
import SaibaMais from './src/pages/saiba/saibaMais';
import perfilCm from './src/pages/user/perfilCm';

const AuthSatck = createStackNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <AuthSatck.Navigator
        headerMode='none'
      >

        <AuthSatck.Screen name = 'drawer' component={Drawer}/>
        <AuthSatck.Screen name ='perfilCm' component={perfilCm}/>
        <AuthSatck.Screen name ='SaibaMais' component={SaibaMais}/>
        <AuthSatck.Screen name = 'lista' component={lista}/>
        <AuthSatck.Screen name = 'cadastroUser' component={cadastroUser} />
        <AuthSatck.Screen name = 'login' component={Login} />
        <AuthSatck.Screen name = 'Trouble' component={Trouble}/>
        <AuthSatck.Screen name = 'cadastroLoja' component={cadastroLoja}/>
        <AuthSatck.Screen name = 'formCad' component={formCad}/>
        <AuthSatck.Screen name = 'edicao' component={edicao}/>
        <AuthSatck.Screen name = 'Solucao' component={Solucao}/>

      </AuthSatck.Navigator>
    </NavigationContainer>
  );
}