import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/home';
import LoginRegister from './screen/LoginRegister';
import QuizSection from './screen/QuizSection';

const Stack = createNativeStackNavigator();

export default function App() {

   // return <LoginRegister />

   return (

   <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Quiz Section" component={QuizSection}/>
         {/* <Stack.Screen name="Login" component={LoginRegister} /> */}
         <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
   </NavigationContainer>

   );
}

