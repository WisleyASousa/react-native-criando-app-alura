import { StyleSheet, View } from 'react-native';
import Topo from './components/Topo';
import Detalhes from './components/Detalhes';



export default function Cesta({ topo, detalhes}) {
  return (
      <>
        <Topo {...topo} />
        <View style={styles.containerBody} >
          <Detalhes {...detalhes} />
        </View>
      </>
    )
};

const styles = StyleSheet.create({
  containerBody: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})
