import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

export const Container = styled.TouchableOpacity`
  position: absolute;
  top: 100px;
  right: 0px;
  width: 40px;
  height: 40px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: #266699;
  justify-content: center;
  align-items: center;
`;

export const styles = StyleSheet.create({
  buttonElevation: {
    elevation: 6,
  },
});
