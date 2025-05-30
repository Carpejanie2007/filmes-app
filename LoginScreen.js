import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';

export default function LoginScreen({ navigation }) {
  const { user, login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
   
    AsyncStorage.getItem('user').then(savedUser => {
      if (savedUser) {
        login(JSON.parse(savedUser).username);
        navigation.replace('Home');
      }
    });
  }, []);

  const handleLogin = async () => {
    if (username && password) {
      const userData = { username };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      login(username);
      navigation.replace('Home');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text variant="titleLarge">Login</Text>
      <TextInput label="Usuário" value={username} onChangeText={setUsername} style={{ marginVertical: 10 }} />
      <TextInput label="Senha" value={password} onChangeText={setPassword} secureTextEntry style={{ marginVertical: 10 }} />
      <Button mode="contained" onPress={handleLogin}>Entrar</Button>
    </View>
  );
}
