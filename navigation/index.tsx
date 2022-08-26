import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FilmViewScreen from "../screens/FilmViewScreen";
import MenuBarComponent from "../components/MenuBar/menu-bar.component";
import {navigationRef} from "./RootNavigation";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <MenuBarComponent />
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen}  options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'black',
          }
        }}
      />
        <Stack.Screen name="Search" component={SearchScreen} options={{
            headerShown: false,
            contentStyle: {
                backgroundColor: 'black',
            }
        }}
        />
        <Stack.Screen name="FilmView" component={FilmViewScreen} options={{
            headerShown: false,
            contentStyle: {
                backgroundColor: 'black',
            }
        }}
        />
    </Stack.Navigator>
  );
}
