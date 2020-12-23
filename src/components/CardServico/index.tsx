import React from 'react';

import {
  Container,
  BoxCategoria,
  TextCategoria,
  BoxButton,
  ButtonInstagram,
  ButtonWhatsapp,
  WhatsImage,
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
    </Container>
  );
}
