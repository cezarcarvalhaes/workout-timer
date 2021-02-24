import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Header from './components/Header';

const Stack = createStackNavigator();

const App = () => (
	<NavigationContainer>
		<Header />
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Details" component={Home} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default App;
