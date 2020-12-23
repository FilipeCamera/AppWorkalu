import React from 'react';
import {Container, styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ButtonSearch() {
  return (
    <Container style={styles.buttonElevation}>
      <Icon name="search" size={25} color="#fff" />
    </Container>
  );
}
