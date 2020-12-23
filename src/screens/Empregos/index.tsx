import React from 'react';

import {Container, BoxTitleButton, ButtonBack, Title} from './styles';

import {useNavigation} from '@react-navigation/native';

import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonSearch from '../../components/ButtonSearch';
import ButtonFilter from '../../components/ButtonFilter/intex';
import CardEmprego from '../../components/CardEmprego';

export default function Empregos() {
  const navigation = useNavigation();
  return (
    <Container
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#B23636" />
      <BoxTitleButton>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#fff" />
        </ButtonBack>
        <Title>Ofertas de empregos</Title>
      </BoxTitleButton>
      <ButtonSearch />
      <ButtonFilter />
      <CardEmprego />
    </Container>
  );
}
