import React from 'react';

import {Picker} from '@react-native-picker/picker';

export default function PickerCategory({valor, setValor}) {
  return (
    <Picker
      selectedValue={valor}
      mode="dialog"
      style={{color: '#a1a1a1'}}
      onValueChange={(itemValue, itemIndex) => setValor(itemValue)}>
      <Picker.Item label="Selecione..." value="" />
      <Picker.Item label="Automotivo" value="Automotivo" />
      <Picker.Item label="Consultoria" value="Consultoria" />
      <Picker.Item label="Design" value="Design" />
      <Picker.Item label="Eventos" value="Eventos" />
      <Picker.Item label="Engenharia" value="Engenharia" />
      <Picker.Item label="Moda e Beleza" value="Moda e" />
      <Picker.Item label="Reformas" value="Reformas" />
      <Picker.Item label="Saúde" value="Saúde" />
      <Picker.Item label="Serviços Domésticos" value="Serviços Domésticos" />
      <Picker.Item label="Serviços Locais" value="Serviços Locais" />
      <Picker.Item label="Tecnologia" value="Tecnologia" />
      <Picker.Item label="Transporte" value="Transporte" />
    </Picker>
  );
}
