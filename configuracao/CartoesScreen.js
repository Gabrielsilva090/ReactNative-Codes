// CartoesScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CartoesScreen = () => {
  const handleAdicionarNovo = () => {
    console.log('Botão "Adicionar Novo" pressionado');
    
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>CARTÕES</Text>
        <Text style={styles.subtitle}>Previamente adicionados</Text>
        {/* Renderize a lista de cartões previamente adicionados aqui, se houver */}
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAdicionarNovo}>
        <Text style={styles.buttonText}>Adicionar Novo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000000',
  },
  subtitle: {
    marginBottom: 16,
    color: '#000000',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    position: 'absolute',
    marginTop: 100,  
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartoesScreen;