import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Repa = ({navigation}) => {
 

  return (
    <View style={styles.container}>
      <Text>Répa screen megjelenítése</Text>
      <Button
        onPress={() => navigation.navigate('Retek')}
        title="Retekkkkkkkkkkk képernyő meghívása"
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

export default Repa;