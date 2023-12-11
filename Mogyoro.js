import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Mogyoro = ({navigation}) => {
 

  return (
    <View style={styles.container}>
      <Text>Mogyoró menüpont</Text>
      <Button
        onPress={() => navigation.navigate('Repa')}
        title="Répa képernyő meghívása"
      />
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

export default Mogyoro;