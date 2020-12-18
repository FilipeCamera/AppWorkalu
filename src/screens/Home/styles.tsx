import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView``;

export const Background = styled.View`
  width: 100%;
  height: 250px;
`;

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const BoxWhite = styled.View`
  flex-direction: column;
  align-items: center;
  background: #fff;
  margin-top: -75px;
  border-top-right-radius: 80px;
`;

export const BoxLogo = styled.View`
  width: 90px;
  height: 90px;
  margin-top: -45px;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 0;
  background: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Logo = styled.Image`
  width: 80%;
  height: 80%;
`;

export const BoxApresentacao = styled.View`
  width: 50%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: rgba(10, 43, 51, 0.75);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: -25px;
  margin-left: -5px;
`;

export const TextApresentacao = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  text-align: center;
  width: 100%;
  color: #fff;
`;

export const Paragrafo = styled.Text`
  margin: 50px 0 20px;
  font-size: 15px;
  font-family: 'Poppins-Medium';
  text-align: center;
  width: 90%;
`;

export const ButtonService = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  background: #1f8299;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin: 20px 0 10px;
`;

export const ButtonWork = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  background: #e44545;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin: 10px 0 30px;
`;

export const Text = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #fff;
`;

export const TextBold = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 16px;
  color: #fff;
`;

export const BoxDados = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0 20px;
`;

export const TextDados = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #2b2b2b;
`;

export const ButtonCad = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: rgba(10, 43, 51, 0.9);
  position: absolute;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  top: 30px;
  right: 0px;
`;

export const SubBoxDados = styled.View`
  flex-direction: row;
`;

export const BoxSF = styled.View`
  background: #1f8299;
  width: 50px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const BoxSFGray = styled.View`
  background: #e1e1e1;
  width: 70px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const BoxOF = styled.View`
  background: #e45454;
  width: 50px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const BoxOFGray = styled.View`
  background: #e1e1e1;
  width: 70px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0 10px;
`;

export const FooterText = styled.Text`
  font-family: 'Poppins-Light';
  font-size: 13px;
`;

export const styles = StyleSheet.create({
  elevationLogo: {
    elevation: 2,
  },
  elevationApresentacao: {
    elevation: 1,
  },
  elevationButton: {
    elevation: 5,
  },
});
