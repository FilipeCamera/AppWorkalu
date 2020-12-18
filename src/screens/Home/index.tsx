import React from 'react';

import {
  Container,
  Background,
  BackgroundImage,
  BoxWhite,
  BoxLogo,
  Logo,
  BoxApresentacao,
  TextApresentacao,
  ButtonService,
  ButtonWork,
  Text,
  BoxDados,
  TextDados,
  BoxImageDados,
  ImageDados,
  ButtonCad,
  Footer,
  FooterText,
  Paragrafo,
  styles,
} from './styles';

import ImageBack from '../../assets/Background.png';
import LogoWorkalu from '../../assets/WorkaluLogo512.png';

export default function Home() {
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <Background>
        <BackgroundImage source={ImageBack} />
      </Background>
      <BoxWhite>
        <BoxLogo style={styles.elevationLogo}>
          <Logo source={LogoWorkalu} />
        </BoxLogo>
        <BoxApresentacao style={styles.elevationApresentacao}>
          <TextApresentacao>Seja bem-vindo</TextApresentacao>
        </BoxApresentacao>
        <Paragrafo>
          aqui você encontra profissionais qualificados, oportunidades de
          empregos e serviços.
        </Paragrafo>
        <ButtonService style={styles.elevationButton}>
          <Text>Pesquisar por serviços e freelancers</Text>
        </ButtonService>
        <ButtonWork style={styles.elevationButton}>
          <Text>Pesquisar por ofertas de empregos</Text>
        </ButtonWork>
        <BoxDados>
          <TextDados>0</TextDados>
          <TextDados>0</TextDados>
          <ButtonCad>
            <Text>+</Text>
          </ButtonCad>
        </BoxDados>
        <Footer>
          <FooterText>2020 | Workalu | </FooterText>
        </Footer>
      </BoxWhite>
    </Container>
  );
}
