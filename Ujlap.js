import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import Ipcim from './Ipcim';
import React, {useEffect, useState} from 'react';
import { color } from 'react-native-reanimated';


const Ujlap = ({route}) => {
    const {atkuld1,atkuld2} =route.params
    const [data, setData] = useState([]);

    const getuzlet = async () => {
      try {
        var adatok ={
          "bevitel1":atkuld1
        }
        const response = await fetch(Ipcim.Ipcim+'keresuzlet',
        {
          method: "POST",
          body: JSON.stringify(adatok),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        }
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      getuzlet();
    }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 22, paddingTop:10, marginTop:10, letterSpacing:2, textShadowColor:'black', textShadowRadius:20}}>{atkuld2}</Text>
      <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={{borderWidth:1.5,padding:2, margin:2.5, borderColor:'red'}}>
              <Text style={{color: 'blue'}}>
                {item.uzlet_nev}
              </Text>
              <Text style={{color: 'blue'}}>
                {item.varos_nev}
              </Text>
              <Text style={{color: 'blue'}}>
                {item.uzlet_cim}
              </Text>
            </View>
          )}
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

export default Ujlap;