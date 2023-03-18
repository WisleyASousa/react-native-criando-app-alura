import { SafeAreaView, StatusBar } from 'react-native';
import Cesta from './src/screens/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { View } from 'react-native-web';


export default function App() {

  // Carregando as fontes instaladas com o expo-font
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  // Enquanto as fontes não forem carregadas, não renderiza o componente, vai aparecer uma tela em branco
  if (!fontCarregada) {
    return <View />;
  }

  return (
      <SafeAreaView>
        <StatusBar />
        <Cesta />
      </SafeAreaView>
  );
}
