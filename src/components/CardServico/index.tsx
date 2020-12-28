import React from 'react';

import {
  Container,
  BoxCategoria,
  TextCategoria,
  BoxButton,
  ButtonInstagram,
  ButtonWhatsapp,
  WhatsImage,
  Title,
  BoxDados,
  Label,
  LabelDesc,
  BoxPalavrasChaves,
  TitlePalavrasChaves,
  DescPalavrasChaves,
  styles,
} from './styles';

import ImageWhats from '../../assets/whatsapp.png';
import Icon from 'react-native-vector-icons/AntDesign';

export default function CardServico() {
  return (
    <Container style={styles.elevationCard}>
      <BoxCategoria>
        <TextCategoria>Informática</TextCategoria>
      </BoxCategoria>
      <BoxButton>
        <ButtonInstagram>
          <Icon name="instagram" size={30} color="#fff" />
        </ButtonInstagram>
        <ButtonWhatsapp>
          <WhatsImage source={ImageWhats} />
        </ButtonWhatsapp>
      </BoxButton>
      <Title>Desenvolvimento de Aplicativos</Title>
      <BoxDados>
        <Label>Nome:</Label>
        <LabelDesc>Filipe Camera</LabelDesc>
      </BoxDados>
      <BoxDados>
        <Label>Valor do serviço:</Label>
        <LabelDesc>R$150 - R$500</LabelDesc>
      </BoxDados>
      <BoxDados>
        <Label>Localização:</Label>
        <LabelDesc>Feira de Santana, BA</LabelDesc>
      </BoxDados>
      <BoxPalavrasChaves>
        <TitlePalavrasChaves>Palavras-chaves:</TitlePalavrasChaves>
        <DescPalavrasChaves>
          Android, Typescript, Node.js, GraphQL, React, AWS
        </DescPalavrasChaves>
      </BoxPalavrasChaves>
    </Container>
  );
}
