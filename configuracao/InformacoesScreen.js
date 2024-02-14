// InformacoesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InformacoesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Versão: 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default InformacoesScreen;