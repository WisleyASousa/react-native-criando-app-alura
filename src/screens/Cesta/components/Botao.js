import { StyleSheet, TouchableOpacity} from 'react-native';
import Texto from '../../../components/Texto';


export default function Botao({children} ) {
  return (
    <>
      <TouchableOpacity style={styles.botao} onPress={() => { alert('Otimo') }}>
        <Texto style={styles.textoBotao}>{children}</Texto>
      </TouchableOpacity>
    </>
    );
}

const styles = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});