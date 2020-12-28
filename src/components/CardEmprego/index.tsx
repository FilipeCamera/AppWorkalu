import React from 'react';

import {
  Container,
  BoxLogo,
  BoxCategoria,
  TextCategoria,
  ButtonSaibaMais,
  TextSaibaMais,
  Title,
  Desc,
  BoxDados,
  BoxSubDados,
  Subtitle,
  Subdesc,
  styles,
} from './styles';

export default function CardEmprego() {
  return (
    <Container style={styles.elevationCard}>
      <BoxLogo style={styles.elevationImage} />
      <BoxCategoria>
        <TextCategoria>Informática</TextCategoria>
      </BoxCategoria>
      <ButtonSaibaMais>
        <TextSaibaMais>Saiba mais</TextSaibaMais>
      </ButtonSaibaMais>
      <Title>Desenvolvedor Fullstack</Title>
      <Desc>
        Ter conhecimento em Java, Node.js, React. Plano de saúde, transporte e
        vale refeição
      </Desc>
      <BoxDados>
        <BoxSubDados>
          <Subtitle>Localização:</Subtitle>
          <Subdesc>Feira de Santana, BA</Subdesc>
        </BoxSubDados>
      </BoxDados>
    </Container>
  );
}
