import React from 'react';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ButtonSearch() {
  return (
    <Container>
      <Icon name="search" size={25} color="#fff" />
    </Container>
  );
}
