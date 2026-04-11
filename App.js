import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from './src/styleSheet/style';
import Conteudo from './src/Conteudo';

export default function App() {
  return (
    <View style={estilos.fundo}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.cabTexto}>PORTAL FUTEBOL CAIO BUENO</Text>
      </View>

      <Conteudo />

      <View style={estilos.rodape}>
        <Text style={estilos.rodTexto}>Caio Bueno</Text>
        <Text style={estilos.rodTexto}>10/04/2026</Text>
      </View>
    </View>
  );
}