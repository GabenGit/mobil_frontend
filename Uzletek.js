import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image} from 'react-native';
import Ipcim from './Ipcim';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'uzlet');
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
            <Text>
              {item.uzlet_id}, {item.uzlet_nev}, {item.uzlet_cim},
              <Image source={{uri:Ipcim.Ipcim+item.uzlet_kep}} style={{width:300,height:300}}   />
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;