//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} stars, {result.review_count} reviews</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,

  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    //fontSize: 16
  }
});

//make this component available to the app
export default ResultsDetail;
