import React from 'react';
import {
	Header,
	Title,
	Button,
	Left,
	Right,
	Body,
	Icon,
} from 'native-base';

const AppHeader = () => (
	<Header>
		<Left>
			<Button transparent>
				<Icon name="menu" />
			</Button>
		</Left>
		<Body>
			<Title>Header</Title>
		</Body>
		<Right />
	</Header>
);

export default AppHeader;
