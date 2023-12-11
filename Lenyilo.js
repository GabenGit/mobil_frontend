import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
<<<<<<< HEAD
import Ipcim from './Ipcim';
=======
import Ipcim from './Ipcim'
>>>>>>> 3026192577cf95695d74e853258223c2bd259087

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedSeged, setSelectedSeged] = useState();

  const getMovies = async () => {
    try {
<<<<<<< HEAD
      const response = await fetch(Ipcim.Ipcim+'uzlettipus');
=======
      const response = await fetch(Ipcim.Ipcim+'segedtabla');
>>>>>>> 3026192577cf95695d74e853258223c2bd259087
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const kattintas=()=>{
    alert(selectedSeged)
  }


  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>

<Picker
  selectedValue={selectedSeged}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedSeged(itemValue)
  }>
{data.map((item)=>{
        return(
<<<<<<< HEAD
            <Picker.Item label={item.uzlet_nev} value={item.uzlet_id} />
=======
            <Picker.Item label={item.seged_nev} value={item.seged_id} />
>>>>>>> 3026192577cf95695d74e853258223c2bd259087
        
	)}
	)}


</Picker>


<Button
        onPress={() => kattintas()}
        title="Teszt"
      />
      

    </View>
  );
};

export default App;