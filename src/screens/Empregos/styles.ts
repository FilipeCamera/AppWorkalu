import styled from 'styled-components/native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.ScrollView``;

export const BoxTitleButton = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  background: #e44545;
  margin-top: ${getStatusBarHeight()};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  color: #fff;
`;

export const ButtonBack = styled.TouchableOpacity``;
