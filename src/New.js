import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const New = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => back(props)}>
      <Text>Back</Text>
    </TouchableOpacity>
  );
};

const back = props => {
  props.navigation.goBack();
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'flex-start'},
});

export default New;
