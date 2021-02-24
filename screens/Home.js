import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';

const Home = ({ navigation }) => {
  return (
    <Container>
      <Content padder>
        <Text>This is Content Section</Text>
        <Button
        onPress={() => navigation.navigate('Details')}
      >
      <Text>Click here</Text>
      </Button>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Home;