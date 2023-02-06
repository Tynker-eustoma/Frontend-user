import Home from './screen/home';
import LoginRegister from './screen/LoginRegister';
import QuizSection from './screen/QuizSection';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Games from './src/screens/Games/Games';
import Categories from './src/screens/Categories/Categories'
import Play from './src/screens/Play';
import Profile from './screen/Profile';
import LandingPage from './screen/LandingPage';
import 'react-native-gesture-handler';
import 'react-native-reanimated'
import store from './src/stores';
import { Provider } from 'react-redux'
import learning from './src/screens/Games/learning';
import Guessing from './src/screens/Games/Guessing';


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name='Guessing' component={Guessing} options={{headerShown: false}} />
          <Stack.Screen name='learning' component={learning} options={{ headerShown: false }} />
          <Stack.Screen name='LandingPage' component={LandingPage} options={{headerShown: false}} />
          <Stack.Screen name='categories' component={Categories} options={{ headerShown: false }} />
          <Stack.Screen name="Quiz Section" component={QuizSection}/>
          <Stack.Screen name='games' component={Games} options={{ headerShown: false }} />
          <Stack.Screen name='plays' component={Play} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginRegister} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}

