//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp'

// create a component
const ResultShowScreen = ({ navigation }) => {
  //state
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id')

  //methods
  const getResult = async (id) => {
    try {
      console.log(`fetching restaurant: ${id}`);
      const response = await yelp.get(`/businesses/${id}`);
      console.log(response);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          console.log('render item');
          return <Image style={styles.image} source={{ uri: item }} />
        }} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 10,
  },
  image: {
    height: 200,
    width: 300,
    marginVertical: 5,
    alignSelf: 'center'
  }
});

//make this component available to the app
export default ResultShowScreen;
