/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
//  import { persistor, store } from '@redux/store';
import { store, persistor } from './src/redux/store';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './src/shared/service/nav.servises';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Route from './src/navigation';


const App = () => {

  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>

          <NavigationContainer ref={navigationRef}>
            <Route />
            <Toast position={'bottom'} />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>

  );
};

export default App;
