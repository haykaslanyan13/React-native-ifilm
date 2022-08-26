import React from 'react'
import {SafeAreaView} from "react-native";
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { store } from './store/store'
import { Provider } from 'react-redux'

export default function App() {
  const colorScheme = useColorScheme();

    return (
        <Provider store={store}>
          <SafeAreaView style={{flex: 1}}>
            <Navigation colorScheme={colorScheme} />
          </SafeAreaView>
        </Provider>
    );
}
