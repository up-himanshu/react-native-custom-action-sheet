import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Home = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => show(props)}>
      <Text>Open</Text>
    </TouchableOpacity>
  );
};

const show = props => {
  props.navigation.navigate('New');
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'flex-start'},
});

export default Home;
