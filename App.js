import React from 'react';
import { View } from 'react-native';
import { estilos } from './src/styleSheet/style';
import Conteudo from './src/Conteudo';

export default function App() {
  return (
    <View style={estilos.fundo}>
      <Conteudo />
    </View>
  );
}