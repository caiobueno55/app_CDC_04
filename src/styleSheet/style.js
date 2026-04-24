import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 30,
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 15,
  },
  noticiaContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  textoArea: {
    flex: 1,
    paddingRight: 10,
  },
  tituloNoticia: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  mancheteNoticia: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 20,
  },
  dataNoticia: {
    fontSize: 11,
    color: '#777',
    marginTop: 5,
  },
  imagemNoticia: {
    width: 80,
    height: 60,
    borderRadius: 4,
  }
});