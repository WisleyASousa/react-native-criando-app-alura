import { FlatList, StyleSheet, Image, View } from "react-native";
import Texto from "../../../components/Texto";


export default function Item({ item: { nome, imagem } }) {

  return <View style={styles.item}>
  <Image source={imagem} style={styles.imgItem} />
  <Texto style={styles.nomeItem}>{nome}</Texto>
</View>
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    gap: 11,
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  imgItem: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  nomeItem: {
    fontSize: 16,
    color: '#464646',
    lineHeight: 26,
    fontWeight: 'semibold',
  },
});