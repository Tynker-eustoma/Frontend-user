import Home from './screen/home';
import LoginRegister from './screen/LoginRegister';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Games from './src/screens/Games/Games';
import Categories from './src/screens/Categories/Categories'
import Play from './src/screens/Play';
import Profile from './screen/Profile';
import 'react-native-gesture-handler';
import 'react-native-reanimated'


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginRegister} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='categories' component={Categories} options={{headerShown: false}} />
        <Stack.Screen name='games' component={Games} options={{headerShown: false}} />
        <Stack.Screen name='plays' component={Play} options={{headerShown: false}} />
        <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

