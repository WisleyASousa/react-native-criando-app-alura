import { StyleSheet, Image, Dimensions } from 'react-native';
import Texto from '../../../components/Texto';
import topo from '../../../../assets/topo.png'

// calculando o tamanho da tela do dispositivo com a lib Dimensions, para q a imagem tenha a dimensao igual para todos os dispositivos.
const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
  return (
      <>
        <Image source={topo} style={styles.topo} />
        <Texto style={styles.titulo}>{ titulo }</Texto>
      </>
    )
}

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
});