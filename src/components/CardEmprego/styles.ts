import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

export const Container = styled.View`
  background: #f4f4f4;
  width: 85%;
  height: 200px;
  border-radius: 10px;
  margin: 60px 0 0;
`;

export const BoxLogo = styled.View`
  background: #2b2b2b;
  width: 100px;
  height: 100px;
  border-width: 2px;
  border-radius: 5px;
  border-color: #fff;
  position: absolute;
  top: -40px;
  left: -20px;
`;

export const BoxCategoria = styled.View`
  top: 0;
  left: 80px;
  position: relative;
  background: #6b6b6b;
  width: 180px;
  height: 45px;
  border-bottom-right-radius: 80px;
  justify-content: center;
  align-items: center;
`;

export const TextCategoria = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 14px;
  color: #fff;
  margin-left: -10px;
`;

export const styles = StyleSheet.create({
  elevationCard: {
    elevation: 5,
  },
  elevationImage: {
    elevation: 2,
  },
});
