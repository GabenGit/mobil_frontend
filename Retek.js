import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Retek = ({navigation}) => {
 

  return (
    <View style={styles.container}>
      <Text>Retek képernyő</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Retek;