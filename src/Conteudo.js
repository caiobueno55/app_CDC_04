import React from 'react';
import { ScrollView } from 'react-native';
import { estilos } from './styleSheet/style';
import ItemNoticia from './ItemNoticia';

export default function Conteudo() {
  const titulos = [
    "ECONOMIA", "MEIO AMBIENTE", 
    "TECNOLOGIA", "TURISMO", "INTERNACIONAL"
  ];
  const manchetes = [
    "Brasil lidera crescimento econômico na América Latina",
    "Chile anuncia novas medidas de preservação ambiental",
    "EUA projetam novos investimentos em tecnologia",
    "Portugal registra aumento histórico no turismo",
    "Novas parcerias internacionais fortalecem o mercado"
  ];
  const datas = ["23/04/2026", "22/04/2026", "21/04/2026", "20/04/2026", "19/04/2026"];
  const imagens = [
    require('../img/brasil.png'),
    require('../img/chile.png'),
    require('../img/eua.png'),
    require('../img/portugal.png'),
    require('../img/logo2.png')
  ];

  let listaNoticias = [];

  for (let i = 0; i < 5; i++) {
    listaNoticias.push(
      <ItemNoticia 
        key={i}
        titulo={titulos[i]}
        manchete={manchetes[i]}
        data={datas[i]}
        imagem={imagens[i]}
      />
    );
  }

  return (
    <ScrollView style={estilos.conteudo}>
      {listaNoticias}
    </ScrollView>
  );
}