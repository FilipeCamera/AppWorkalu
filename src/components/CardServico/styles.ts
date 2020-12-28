import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

export const Container = styled.View`
  width: 90%;
  height: 240px;
  background: #f4f4f4;
  margin: 20px 0 0;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
`;

export const BoxCategoria = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 175px;
  height: 45px;
  background: #1f8299;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 80px;
  justify-content: center;
  align-items: center;
`;

export const TextCategoria = styled.Text`
  margin-left: -10px;
  font-family: 'Poppins-SemiBold';
  font-size: 14px;
  color: #fff;
`;

export const BoxButton = styled.View`
  width: 100px;
  height: 45px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 20px;
`;

export const ButtonInstagram = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  background: #1f8299;
  border-top-left-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonWhatsapp = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  background: #2ab640;
  border-bottom-right-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const WhatsImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #2b2b2b;
  margin-top: 55px;
`;

export const BoxDados = styled.View`
  flex-direction: row;
  width: 80%;
  align-items: baseline;
`;

export const Label = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: #2b2b2b;
  margin-right: 5px;
`;

export const LabelDesc = styled.Text`
  font-family: 'Poppins-Light';
  font-size: 14px;
  color: #2b2b2b;
`;

export const BoxPalavrasChaves = styled.View`
  width: 65%;
  position: absolute;
  bottom: 20px;
  left: 15px;
`;

export const TitlePalavrasChaves = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  color: #2b2b2b;
`;

export const DescPalavrasChaves = styled.Text`
  font-family: 'Poppins-Light';
  font-size: 10px;
  color: #2b2b2b;
`;

export const styles = StyleSheet.create({
  elevationCard: {
    elevation: 5,
  },
});
