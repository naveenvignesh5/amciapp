import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function Container(props) {
  return <View style={styles.container}>{props.children}</View>;
}

export default Container;
