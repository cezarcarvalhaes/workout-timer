import React from 'react';
import {
	Container,
	Content,
	Button,
	Fab,
	Text,
	Icon,
} from 'native-base';
import Header from '../components/Header';

const Home = ({ navigation }) => (
	<Container>
		<Header />
		<Content padder contentContainerStyle={{ flex: 1 }}>
			<Text>Settings</Text>
		</Content>
	</Container>
);

export default Home;
