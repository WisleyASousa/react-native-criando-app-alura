import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png'
import logotipo from '../../assets/logo.png'

// calculando o tamanho da tela do dispositivo com a lib Dimensions, para q a imagem tenha a dimensao igual para todos os dispositivos.
const width = Dimensions.get('screen').width;

export default function Cesta() {
  return (
      <>
        <Image source={topo} style={styles.topo} />
        <Text style={styles.titulo}>Detalhes da Cesta</Text>

        <View style={styles.containerBody} >
          <Text style={styles.nome} >Cesta de Verduras</Text>
          <View style={styles.containerLogo}>
            <Image source={logotipo} style={styles.imglogo}/>
            <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
          </View>
          <Text style={styles.descricao}>Uma Cesta com Produtos Selecionados cuidadosamente da fazenda direto para sua Cozinha! </Text>
          <Text style={styles.preco}>R$ 40,00</Text>
        </View>
      </>
    )
};

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: 578 / 768 * width,
    fontFamily: 'Montserrat',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    width: '100%',
    marginTop: 100,
    textAlign: 'center',
  },
  containerBody: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  nome: {
    fontSize: 26,
    color: '#464646',
    lineHeight: 44,
    fontFamily: 'MontserratBold',
  },
  containerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
    paddingVertical: 12,
  },
  imglogo: {
    width: 44,
    height: 44,
    borderRadius: 20,
  },
  nomeFazenda: {
    fontSize: 18,
    color: '#464646',
    lineHeight: 26,
    fontWeight: 'semibold',
    fontFamily: 'MontserratRegular',
  },
  descricao: {
    fontSize: 16,
    color: '#A3A3A3',
    lineHeight: 26,
  },
  preco: {
    fontSize: 26,
    color: '#2A9F25',
    fontWeight: 'bold',
    marginTop: 8,
  },
})
