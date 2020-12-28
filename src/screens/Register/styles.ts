import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #fff;
`;

export const BoxLogo = styled.View`
  width: 80px;
  height: 80px;
  margin: 45px 0 0;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  color: #2b2b2b;
  margin: 40px 0 50px;
`;

export const BoxCampo = styled.View`
  width: 90%;
  margin: 8px 0;
`;

export const Label = styled.Text`
  font-size: 15px;
  font-family: 'Poppins-Medium';
`;

export const Input = styled.TextInput`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  padding: 8px 10px;
`;

export const BoxCampoValor = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputValor = styled.TextInput`
  width: 45%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  padding: 8px 10px;
  text-align: center;
`;

export const BoxLocation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const InputLocation = styled.TextInput`
  width: 65%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  padding: 8px 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 250px;
  height: 60px;
  background: #e54545;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 50px 0 20px;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: #fff;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 15px;
`;

export const ButtonTags = styled.TouchableOpacity`
  flex-direction: row;
  padding: 5px;
  height: 40px;
  background: #e54545;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  border-radius: 5px;
`;

export const TextTags = styled.Text`
  font-family: 'Poppins-Light';
  font-size: 12px;
  color: #fff;
`;
