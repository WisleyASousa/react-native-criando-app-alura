import { FlatList, StyleSheet, View } from 'react-native';
import Topo from './components/Topo';
import Detalhes from './components/Detalhes';
import Item from './components/Item';
import Texto from '../../components/Texto';



export default function Cesta({ topo, detalhes, itens}) {
  return (
      <>
        <FlatList
          data={itens.lista}
          renderItem={Item}
          keyExtractor={nome => nome}
          ListHeaderComponent={() => {
            return (
              <>
                <Topo {...topo} />
                <View style={styles.containerBody} >
                  <Detalhes {...detalhes} />
                  <Texto style={styles.titulo}>{itens.titulo}</Texto>
                </View>
              </>
            )
          }}
        />
      </>
    )
};

const styles = StyleSheet.create({
  containerBody: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titulo: {
    color: '#464646',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
})
