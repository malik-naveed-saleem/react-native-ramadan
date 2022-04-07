import React from 'react';
import {View, Text, ImageBackground, Alert} from 'react-native';
import ButtonComponent from '../components/Button';

import Styles from '../styles/HomeStyle';
import UserArray from './UserArray';
const Home = ({navigation, route}) => {
  const {myName} = route.params;
  const handleLogout = () => {
    Alert.alert('Attnetion here', 'Are you want you Go back login page', [
      {text: 'cancel', onPress: () => console.log('cencel')},
      {
        text: 'Go BAck',
        onPress: () => navigation.navigate("login"),
      },
    ]);
  };

  return (
    <View>
      <View style={[Styles.main_view]}>
        <ImageBackground
          source={require('../assets/images/car2.jpeg')}  
          style={[Styles.image_style]}
        />
          
        <Text style={[Styles.wellcome_style]}> Wellcome! {myName}</Text>
        <UserArray/>
        <ButtonComponent onClick={handleLogout} text="GO Back" />

      </View>
    </View>
  );
};

export default Home;
