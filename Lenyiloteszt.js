import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Ipcim from './Ipcim';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'film');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

const valami=()=>{
    alert(selectedLanguage)
}

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
 <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
     {data.map((item)=>{
            return(
                <Picker.Item label={item.film_cim} value={item.film_id} />
             
        )}
        )}
  
  
</Picker>   
<Button
        onPress={() => valami()}
        title="Sorszám"
      />
    </View>
  );
};

export default App;