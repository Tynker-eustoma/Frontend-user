import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Games from './src/screens/Games/Games';
import Categories from './src/screens/Categories/Categories'
import 'react-native-gesture-handler';
import 'react-native-reanimated'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='categories' component={Categories} options={{headerShown: false}} />
        <Stack.Screen name='games' component={Games} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

