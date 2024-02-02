import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Proba from './Proba';
import Uzletek from "./Uzletek";
import Kozosscreen from './Kozosscreen';
import Video from './Video';
import Ujlap from './Ujlap';
import Keresesszoveg from './Keresesszoveg';

import Lenyilo from "./Lenyilo"

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
       <Button
        onPress={() => navigation.navigate('Proba')}
        title="Próba screen meghívása"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function Root({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    <Drawer.Screen name="Uzletek" component={Uzletek} />   
    <Drawer.Screen name="Lenyilo" component={Lenyilo} /> 
    <Drawer.Screen name="Kozosscreen" component={Kozosscreen} />
    <Drawer.Screen name="Video" component={Video} />  
    <Drawer.Screen name="Keresesszoveg" component={Keresesszoveg} />  
    </Drawer.Navigator>

  );
}




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Root" component={Root} options={{headerShown:false}} />
        <Stack.Screen name="Proba" component={Proba}  />
        <Stack.Screen name="Ujlap" component={Ujlap}  />
             
      </Stack.Navigator>     
    </NavigationContainer>
  );
}