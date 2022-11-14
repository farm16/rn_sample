import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
// import {axios} from 'axios';

export const Categories = props => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        'https://api.chucknorris.io/jokes/categories',
      );
      const data = await response.json();
      setCategories([...data]);
      console.log(JSON.stringify(data, null, 3));
    };
    fetchApi();
  }, []);

  const Items = ({categoryName}) => (
    <View style={Styles.item}>
      <Text>{categoryName}</Text>
    </View>
  );
  return (
    <View style={Styles.container}>
      <Text style={{color: 'black'}}>Categories</Text>
      <FlatList style={{flex: 1}} data={categories} renderItem={Items} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'blue',
  },
});
