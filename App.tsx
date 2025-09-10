/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import {
  asyncStoragePersister,
  queryClient,
} from './src/services/query-client';
import StoreProvider from './src/store/store-provider';
import { Fonts } from './src/theme/fonts';

function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister: asyncStoragePersister }}
        >
          <View style={{ padding: 20 }}>
            <Text style={{ fontFamily: Fonts.inter.regular, fontSize: 18 }}>
              Inter Regular
            </Text>
            <Text style={{ fontFamily: Fonts.inter.bold, fontSize: 18 }}>
              Inter Bold
            </Text>
            <Text style={{ fontFamily: Fonts.garamond.regular, fontSize: 18 }}>
              Garamond Regular
            </Text>
            <Text
              style={{ fontFamily: Fonts.garamond.extraBold, fontSize: 18 }}
            >
              Garamond ExtraBold
            </Text>
          </View>
        </PersistQueryClientProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
