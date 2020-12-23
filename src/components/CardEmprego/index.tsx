import React from 'react';

import {
  Container,
  BoxLogo,
  BoxCategoria,
  TextCategoria,
  styles,
} from './styles';

export default function CardEmprego() {
  return (
    <Container style={styles.elevationCard}>
      <BoxLogo style={styles.elevationImage} />
      <BoxCategoria>
        <TextCategoria>Informática</TextCategoria>
      </BoxCategoria>
    </Container>
  );
}
