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
  ButtonCad,
  ButtonRemove,
  Footer,
  FooterText,
  Paragrafo,
  styles,
  BoxSF,
  SubBoxDados,
  BoxSFGray,
  TextBold,
  BoxOF,
  BoxOFGray,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageBack from '../../assets/Background.png';
import LogoWorkalu from '../../assets/WorkaluLogo512.png';

import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <Background>
        <BackgroundImage source={ImageBack} />
      </Background>
      <ButtonCad
        style={styles.elevationButton}
        onPress={() => navigation.navigate('Register')}>
        <Icon name="add" size={25} color="#fff" />
      </ButtonCad>
      <ButtonRemove
        style={styles.elevationButton}
        onPress={() => navigation.navigate('Remove')}>
        <Icon name="close" size={22} color="#FFF" />
      </ButtonRemove>
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
        <ButtonService
          style={styles.elevationButton}
          onPress={() => navigation.navigate('Servicos')}>
          <Text>Pesquisar por serviços e freelancers</Text>
        </ButtonService>
        <ButtonWork style={styles.elevationButton}>
          <Text>Pesquisar por ofertas de empregos</Text>
        </ButtonWork>
        <BoxDados>
          <SubBoxDados>
            <BoxSF style={styles.elevationButton}>
              <TextBold>SF</TextBold>
            </BoxSF>
            <BoxSFGray style={styles.elevationButton}>
              <TextDados>0</TextDados>
            </BoxSFGray>
          </SubBoxDados>
          <SubBoxDados>
            <BoxOF style={styles.elevationButton}>
              <TextBold>OF</TextBold>
            </BoxOF>
            <BoxOFGray style={styles.elevationButton}>
              <TextDados>0</TextDados>
            </BoxOFGray>
          </SubBoxDados>
        </BoxDados>
        <Footer>
          <FooterText>2020 - Workalu</FooterText>
        </Footer>
      </BoxWhite>
    </Container>
  );
}
