import React, {useState} from 'react';

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
  ButtonTags,
  TextTags,
} from './styles';

import LogoWorkalu from '../../assets/WorkaluLogo512.png';

import {StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';

import Tags from 'react-native-tags';

import PickerCategory from '../../components/PickerCategory';
import PickerUf from '../../components/PickerUf';

export default function Register() {
  const [value, setValue] = useState('');
  const [valueUF, setValueUF] = useState('');
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
        <Label>Categoria:</Label>
        <PickerCategory valor={value} setValor={setValue} />
      </BoxCampo>
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
        <Label>Palavras-chaves:</Label>
        <Tags
          initialText=""
          textInputProps={{
            placeholder: 'Escreva as palavras-chaves',
          }}
          initialTags={[]}
          onChangeTags={(tags) => console.log(tags)}
          onTagPress={(index, tagLabel, event, deleted) =>
            console.log(
              index,
              tagLabel,
              event,
              deleted ? 'deleted' : 'not deleted',
            )
          }
          containerStyle={{justifyContent: 'center'}}
          inputStyle={{
            backgroundColor: 'white',
            color: '#2b2b2b',
            borderBottomWidth: 1,
            borderBottomColor: '#d9d9d9',
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
          }}
          renderTag={({tag, index, onPress, deleteTagOnPress, readonly}) => (
            <ButtonTags key={`${tag}-${index}`} onPress={onPress}>
              <TextTags>{tag}</TextTags>
            </ButtonTags>
          )}
        />
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
          <PickerUf valor={valueUF} setValor={setValueUF} />
        </BoxLocation>
      </BoxCampo>
      <Button>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
    </Container>
  );
}
