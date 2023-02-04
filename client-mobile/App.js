
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/home';
import LoginRegister from './screen/LoginRegister';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Games from './src/screens/Games/Games';
import Categories from './src/screens/Categories/Categories'
import 'react-native-gesture-handler';
import 'react-native-reanimated'
import Play from './src/screens/Play';
import store from './src/stores';
import { Provider } from 'react-redux'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name='categories' component={Categories} options={{ headerShown: false }} />
          <Stack.Screen name='games' component={Games} options={{ headerShown: false }} />
          <Stack.Screen name='plays' component={Play} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginRegister} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

