import { SafeAreaView, StatusBar } from 'react-native';
import Cesta from './src/screens/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

export default function App() {

  // Carregando as fontes instaladas com o expo-font
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  // Enquanto as fontes não forem carregadas, não renderiza o componente, vai aparecer uma tela em branco
  if (!fontCarregada) {
    return <AppLoading />;
  }

  return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />

                  {/* removendo a camada externa do objeto, e passando cada parametro como se fosse um  parametro da cesta */}
        <Cesta {...mock} />

      </SafeAreaView>
  );
}
