import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Proba from './Proba';
<<<<<<< HEAD
import Uzletek from "./Uzletek"

=======
import Mogyoro from "./Mogyoro"
import Repa from './Repa';
import Retek from "./Retek"
import Kepfeltoltes from "./Kepfeltoltes"
import Felvitel from "./Felvitel"
import Lenyiloteszt from "./Lenyiloteszt"
>>>>>>> 3026192577cf95695d74e853258223c2bd259087
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
<<<<<<< HEAD
    <Drawer.Screen name="Uzletek" component={Uzletek} />   
=======
    <Drawer.Screen name="Mogyoro" component={Mogyoro} />
    <Drawer.Screen name="Kepfeltotles" component={Kepfeltoltes} />  
    <Drawer.Screen name="Felvitel" component={Felvitel} />     
    <Drawer.Screen name="Lenyiloteszt" component={Lenyiloteszt} /> 
>>>>>>> 3026192577cf95695d74e853258223c2bd259087
    <Drawer.Screen name="Lenyilo" component={Lenyilo} /> 
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
<<<<<<< HEAD
             
=======
        <Stack.Screen name="Repa" component={Repa}  />       
        <Stack.Screen name="Retek" component={Retek}  />       
>>>>>>> 3026192577cf95695d74e853258223c2bd259087
      </Stack.Navigator>     
    </NavigationContainer>
  );
}