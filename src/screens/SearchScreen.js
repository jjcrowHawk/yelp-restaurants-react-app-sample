//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';

// create a component
const SearchScreen = () => {
  //state
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' || '$$$'
    console.log(JSON.stringify(results.map(r => r.price)))
    return results.filter((result) => result.price === price);
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => { setTerm(newTerm) }}
        onTermSubmit={() => { searchApi(term) }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
        <ResultsList title="Rich Menace" results={filterResultsByPrice('$$$$')} />
      </ScrollView>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

//make this component available to the app
export default SearchScreen;
