import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './styleSheet/style';

export default function ItemNoticia(props) {
  return (
    <View style={estilos.noticiaContainer}>
      <View style={estilos.textoArea}>
        <Text style={estilos.tituloNoticia}>{props.titulo}</Text>
        <Text style={estilos.mancheteNoticia}>{props.manchete}</Text>
        <Text style={estilos.dataNoticia}>{props.data}</Text>
      </View>
      <Image source={props.imagem} style={estilos.imagemNoticia} resizeMode="cover" />
    </View>
  );
}