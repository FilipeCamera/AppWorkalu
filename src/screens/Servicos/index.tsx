import React from 'react';

import {Container, BoxTitleButton, Title, ButtonBack} from './styles';

import {useNavigation} from '@react-navigation/native';

import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonFilter from '../../components/ButtonFilter/intex';
import ButtonSearch from '../../components/ButtonSearch';
import CardServico from '../../components/CardServico';

export default function Servicos() {
  const navigation = useNavigation();
  return (
    <Container
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#155766" />
      <BoxTitleButton>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#fff" />
        </ButtonBack>
        <Title>Serviços e Freelancers</Title>
      </BoxTitleButton>
      <ButtonSearch />
      <ButtonFilter />
      <CardServico />
    </Container>
  );
}
