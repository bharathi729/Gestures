
import PullToRefresh from './PullToRefresh';
import { createStackNavigator } from '@react-navigation/stack';
import SwipeGesture from './SwipeGesture';
import {NavigationContainer} from '@react-navigation/native';
import Reanimated from './Reanimated';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
      <Stack.Screen name="SwipeGesture" component={SwipeGesture} /> 
      <Stack.Screen name="Reanimated" component={Reanimated} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}
  
