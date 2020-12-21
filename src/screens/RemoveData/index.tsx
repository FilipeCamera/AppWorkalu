import React, {useState} from 'react';

import {
  BoxCampo,
  BoxLogo,
  Button,
  ButtonBack,
  ButtonText,
  Container,
  Input,
  Label,
  Logo,
  Title,
} from './styles';

import {StatusBar} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoWorkalu from '../../assets/WorkaluLogo512.png';
import PickerCategory from '../../components/PickerCategory';

export default function Remove() {
  const [value, setValue] = useState('');
  const navigation = useNavigation();
  return (
    <Container contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
      <StatusBar barStyle="dark-content" />
      <BoxLogo>
        <Logo source={LogoWorkalu} />
      </BoxLogo>
      <ButtonBack onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={28} color="#2b2b2b" />
      </ButtonBack>
      <Title>Remover seus dados</Title>
      <BoxCampo>
        <Label>Categoria:</Label>
        <PickerCategory valor={value} setValor={setValue} />
      </BoxCampo>
      <BoxCampo>
        <Label>Nome:</Label>
        <Input placeholder="Ex: João" />
      </BoxCampo>
      <BoxCampo>
        <Label>Nome do serviço:</Label>
        <Input placeholder="Ex: desenvolvimento de websites" />
      </BoxCampo>
      <BoxCampo>
        <Label>Email:</Label>
        <Input placeholder="Ex: exemplo@gmail.com" />
      </BoxCampo>
      <Button>
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
}
