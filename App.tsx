import React from "react";
import {NavigationContainer} from "@react-navigation/native";

import HomeScreen from './src/screens/Home'
import SeparateImageScreen from './src/screens/SeparateImage'

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./src/types/types";
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                  animation: 'slide_from_right',
                  headerTitleStyle: {
                      fontSize: 24,
                      fontWeight: '700'
                  }
              }}
          >
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: 'Главная' }}
              />
              <Stack.Screen
                  name="SeparateImage"
                  component={SeparateImageScreen}
                  options={({ route }) => ({ title: route.params.username })}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;