import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Text, ActivityIndicator } from 'react-native-paper';
import { fetchPopularMovies } from './api';

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularMovies().then(data => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <ActivityIndicator animating={true} />;
  }

  return (
    <ScrollView style={{ padding: 10 }}>
      {movies.map(movie => (
        <Card key={movie.id} onPress={() => navigation.navigate('Details', { movie })} style={{ marginBottom: 10 }}>
          <Card.Title title={movie.title} />
          <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
        </Card>
      ))}
    </ScrollView>
  );
}
