import React from 'react';
import {
	Header,
	Title,
	Left,
	Right,
	Body,
	Icon,
} from 'native-base';

const AppHeader = () => (
	<Header>
		<Left />
		<Body>
			<Title>Header</Title>
		</Body>
		<Right>
			<Icon type="FontAwesome5" name="folder-plus" />
		</Right>
	</Header>
);

export default AppHeader;
