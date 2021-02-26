import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import Home from './screens/Home';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

const App = () => (
	<NavigationContainer>
		{/* <Header /> */}
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					const iconName = route.name === 'Workouts' ? 'home' : 'cog';
					const iconColor = focused ? 'red' : color;
					return <Icon name={iconName} size={size} style={{ color: iconColor }} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
		>
			<Tab.Screen
				name="Workouts"
				component={Home}
				options={{
					headerRight: () => (
						<Icon type="FontAwesome5" name="folder-plus" style={{ marginRight: 15 }} />
					),
				}}
			/>
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	</NavigationContainer>
);

export default App;
