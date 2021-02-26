import React, { useState } from 'react';
import {
	Container,
	Content,
	Button,
	Fab,
	Text,
	Icon,
	View,
} from 'native-base';
import { Modal } from 'react-native';
import Header from '../components/Header';

const Home = ({ navigation }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<Container>
			<Modal
				animationType="slide"
				transparent
				visible={isModalOpen}
				onRequestClose={() => {
					setIsModalOpen(!isModalOpen);
				}}
			>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#fff',
					}}
				>
					<Text>
            I'm a modal
					</Text>
					<Button onPress={() => setIsModalOpen(!isModalOpen)}>
						<Text>Close</Text>
					</Button>
				</View>
			</Modal>
			<Header />
			<Content padder contentContainerStyle={{ flex: 1 }}>
				<Text>This is Content Section</Text>
				<Fab position="bottomRight" onPress={() => setIsModalOpen(true)}>
					<Icon type="FontAwesome5" name="plus" />
				</Fab>
			</Content>
		</Container>
	);
};

export default Home;
