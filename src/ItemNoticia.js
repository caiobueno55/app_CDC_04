import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './styleSheet/style';

export default function ItemNoticia(props) {
  return (
    <View style={estilos.noticiaContainer}>
      <View style={estilos.textoArea}>
        <Text style={estilos.noticiaCategoria}>{props.titulo}</Text>
        <Text style={estilos.noticiaManchete}>{props.manchete}</Text>
        <Text style={estilos.noticiaData}>{props.data}</Text>
      </View>
      <Image 
        source={{ uri: props.imagem }} 
        style={estilos.noticiaImagem} 
      />
    </View>
  );
}