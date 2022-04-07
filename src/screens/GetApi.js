import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../styles/UserArrayStyle';
const GetApi = () => {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log("the data are",data.name);
    setUser(data);
  };

  useEffect(() => {
   
    getUser();
  },[]);

  return (
      <View style={styles.main_container}>

    <FlatList
      data={user}
      renderItem={({item}) =><>
      <View style={[styles.Api_View]}>
      <Text style={[styles.Api_Text,styles.individual_id]} >{`id => ${item.id}`}</Text>
      <Text style={[styles.Api_Text]} >{`name => ${item.name}`}</Text>
      <Text style={[styles.Api_Text]} >{`Email => ${item.email}`}</Text>
      <Text style={[styles.Api_Text]} >{`phone no => ${item.phone}`}</Text>



      </View>

      </>
          
        
      }
    />
          </View>
  );
};
export default GetApi;
