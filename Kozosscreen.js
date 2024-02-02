import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button} from 'react-native';
import Ipcim from './Ipcim';

const Kozosscreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'uzlettipus');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View>
              <Text>
                {item.uzlettipus_id}, {item.uzlettipus_nev}
              </Text>
              <Button 
            onPress={() => navigation.navigate('Ujlap',{atkuld1:item.uzlettipus_id,atkuld2:item.uzlettipus_nev})}
            title="Részletek"
          />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Kozosscreen;