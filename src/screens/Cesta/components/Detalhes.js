import { StyleSheet, Image, View} from 'react-native';
import Texto from '../../../components/Texto';
import Botao from './Botao';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
  return (
      <>
        <Texto style={styles.nome} >{nome}</Texto>
          <View style={styles.containerLogo}>
            <Image source={logoFazenda} style={styles.imglogo}/>
            <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
          </View>
          <Texto style={styles.descricao}>{descricao}</Texto>
          <Texto style={styles.preco}>{preco}</Texto>

          <Botao>
            {botao}
          </Botao>
          
      </>
    )
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 26,
    color: '#464646',
    lineHeight: 44,
    fontWeight: 'bold',
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
});