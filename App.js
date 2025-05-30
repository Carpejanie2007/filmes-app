import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './HomeScreen';
import MovieDetailsScreen from './MovieDetailsScreen';
import LoginScreen from './LoginScreen';

import { FavoritesProvider } from './FavoritesContext';
import { AuthProvider } from './AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <FavoritesProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={MovieDetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoritesProvider>
      </AuthProvider>
    </PaperProvider>
  );
}
