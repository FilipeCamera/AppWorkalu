import React from 'react';

import {Container, styles} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';

export default function ButtonFilter() {
  return (
    <Container style={styles.buttonElevation}>
      <Icon name="filter" size={22} color="#fff" />
    </Container>
  );
}
