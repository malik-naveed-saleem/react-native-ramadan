import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Styles from './Styles';

const ButtonComponent = ({text, onClick}) => {
  return (
    <TouchableOpacity style={[Styles.btnOpacity]} onPress={onClick}>
      <Text style={[Styles.btnText]}>{text}</Text>
    </TouchableOpacity>
  );
};
export default ButtonComponent;
