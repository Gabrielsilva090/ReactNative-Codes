// TelaAjustes.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaAjustes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('CartoesScreen')}>
        <View style={styles.rectangle}></View>
        <Text style={styles.buttonText}>Cartões</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('InformacoesScreen')}>
        <View style={styles.rectangle}></View>
        <Text style={styles.buttonText}>Informações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
  },
  buttonText: {
    fontSize: 16,
    color: '#009CDE',
    marginLeft: 10,
  },
  rectangle: {
    backgroundColor: '#EFEFEF',
    height: 35,
    width: '95%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 50,
    borderRadius: 10,
  },
});

export default TelaAjustes;