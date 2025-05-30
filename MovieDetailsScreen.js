import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

export default function MovieDetailsScreen({ route }) {
  const { movie } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Card>
        <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }} />
        <Card.Content>
          <Text variant="titleLarge">{movie.title}</Text>
          <Text>{movie.overview}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
