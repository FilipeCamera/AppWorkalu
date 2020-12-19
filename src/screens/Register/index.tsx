import React from 'react';

import {
  Container,
  BoxLogo,
  Logo,
  Title,
  BoxCampo,
  Label,
  Input,
  BoxCampoValor,
  InputValor,
  BoxLocation,
  InputLocation,
  Button,
  ButtonText,
  ButtonBack,
} from './styles';

import LogoWorkalu from '../../assets/WorkaluLogo512.png';

import {StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();
  return (
    <Container
      contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" />
      <BoxLogo>
        <Logo source={LogoWorkalu} />
      </BoxLogo>
      <ButtonBack onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={28} color="#2b2b2b" />
      </ButtonBack>
      <Title>Cadastrar Serviço</Title>
      <BoxCampo>
        <Label>Nome:</Label>
        <Input placeholder="Ex: João" />
      </BoxCampo>
      <BoxCampo>
        <Label>Nome do serviço:</Label>
        <Input placeholder="Ex: Desenvolvimento de aplicativo" />
      </BoxCampo>
      <BoxCampo>
        <Label>Whatsapp:</Label>
        <Input placeholder="Ex: 71988888888" />
      </BoxCampo>
      <BoxCampo>
        <Label>Instagram:</Label>
        <Input placeholder="Ex: workalu" />
      </BoxCampo>
      <BoxCampo>
        <Label>Valor do serviço:</Label>
        <BoxCampoValor>
          <InputValor placeholder="Valor Inicial" />
          <InputValor placeholder="Valor Final" />
        </BoxCampoValor>
      </BoxCampo>
      <BoxCampo>
        <Label>Localização:</Label>
        <BoxLocation>
          <InputLocation placeholder="Ex: Salvador" />
        </BoxLocation>
      </BoxCampo>
      <Button>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
    </Container>
  );
}
