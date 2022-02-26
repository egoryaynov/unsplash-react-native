import React from "react";
import {NavigationContainer} from "@react-navigation/native";

import HomeScreen from './screens/Home'
import SeparateImageScreen from './screens/SeparateImage'

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./types";
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: 'Главная' }}
              />
              <Stack.Screen
                  name="SeparateImage"
                  component={SeparateImageScreen}
                  options={{ title: 'Страница отдельного изображения' }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;