import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  cabecalho: {
    backgroundColor: '#001f3f', // Azul Marinho
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#FFD700', // Dourado
  },
  cabTexto: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
  },
  sessaoTitulo: {
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#001f3f',
    marginVertical: 10,
    backgroundColor: '#f9f9f9'
  },
  txtLeiaMais: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001f3f'
  },
  noticiaContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  textoArea: {
    flex: 1,
    paddingRight: 10,
  },
  noticiaCategoria: {
    color: '#c62828',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  noticiaManchete: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    marginVertical: 3,
  },
  noticiaData: {
    fontSize: 11,
    color: '#999',
  },
  noticiaImagem: {
    width: 80,
    height: 60,
    borderRadius: 5,
  },
  rodape: {
    backgroundColor: '#001f3f',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rodTexto: {
    color: '#FFD700',
    fontWeight: 'bold',
  }
});