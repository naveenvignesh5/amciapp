import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';

// hooks
import {useFetchQuestions} from '../hooks/useFetchQuestions';

// components
import {AppBar} from '../components';

// screens
import {Test} from './Test';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export function Home() {
  const {loading, data} = useFetchQuestions();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading</Text>
        <ActivityIndicator animating size="medium" />
      </View>
    );
  }

  if (!data) {
    return (
      <View>
        <AppBar title="AMCI App" />
        <Text>No test available</Text>
      </View>
    );
  }

  return <Test questions={data} />;
}
