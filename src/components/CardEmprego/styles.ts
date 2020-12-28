import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

export const Container = styled.View`
  background: #f4f4f4;
  width: 90%;
  height: 200px;
  border-radius: 10px;
  margin: 60px 0 0;
`;

export const BoxLogo = styled.View`
  background: #2b2b2b;
  width: 100px;
  height: 100px;
  border-width: 2px;
  border-radius: 50px;
  border-color: #fff;
  position: absolute;
  top: -40px;
  left: -10px;
`;

export const BoxCategoria = styled.View`
  top: 0;
  left: 70px;
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

export const ButtonSaibaMais = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #e54545;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 10px;
`;

export const TextSaibaMais = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 15px;
  color: #fff;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 15px;
  margin-top: 18px;
  margin-left: 15px;
  color: #2b2b2b;
`;

export const Desc = styled.Text`
  font-family: 'Poppins-Light';
  font-size: 14px;
  margin-left: 15px;
  text-align: justify;
`;

export const BoxDados = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
  position: absolute;
  bottom: 10px;
`;

export const BoxSubDados = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Subtitle = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  color: #2b2b2b;
`;

export const Subdesc = styled.Text`
  font-family: 'Poppins-Light';
  font-size: 11px;
  color: #2b2b2b;
`;

export const styles = StyleSheet.create({
  elevationCard: {
    elevation: 5,
  },
  elevationImage: {
    elevation: 2,
  },
});
