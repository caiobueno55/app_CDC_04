import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { estilos } from './styleSheet/style';
import ItemNoticia from './ItemNoticia';

export default function Conteudo() {
  const noticias = [
    { 
      id: 1, 
      t: 'LIBERTADORES', 
      m: 'Final da Libertadores 2026 terá sede em Curitiba', 
      d: '10/04/2026', 
      img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200' 
    },
    { 
      id: 2, 
      t: 'SELEÇÃO BRASILEIRA', 
      m: 'Convocação para as Eliminatórias sai nesta sexta-feira', 
      d: '10/04/2026', 
      img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=200' 
    },
    { 
      id: 3, 
      t: 'MERCADO DA BOLA', 
      m: 'Novo craque assina contrato milionário com time europeu', 
      d: '10/04/2026', 
      img: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=200' 
    },
    { 
      id: 4, 
      t: 'FUTEBOL PARANAENSE', 
      m: 'Estádios de Curitiba passam por reformas para nova temporada', 
      d: '10/04/2026', 
      img: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200' 
    },
    { 
      id: 5, 
      t: 'GIRO EUROPEU', 
      m: 'Liga dos Campeões define confrontos das quartas de final', 
      d: '10/04/2026', 
      img: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=200' 
    },
  ];

  let lista = [];
  for (let i = 0; i < noticias.length; i++) {
    lista.push(
      <ItemNoticia 
        key={noticias[i].id}
        titulo={noticias[i].t}
        manchete={noticias[i].m}
        data={noticias[i].d}
        imagem={noticias[i].img} 
      />
    );
  }

  return (
    <ScrollView>
       <View style={estilos.sessaoTitulo}>
          <Text style={estilos.txtLeiaMais}>NOTÍCIAS DE HOJE</Text>
       </View>
       {lista}
    </ScrollView>
  );
}