import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import ButtonComponent from '../components/Button';
import styles from '../styles/LoginStyle';
import InputFeilds from '../components/InputFeild';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  // console.log(userName);
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    if (userName && password) {
      Alert.alert(`welcome`, ` ${userName}`);
      navigation.navigate(`home`, {myName: `${userName}`});
      console.log(userName, password);
    } else {
      Alert.alert('Attention here', 'Wrong userName or password', [
        {
          text: 'Dismiss',
          onPress: () => console.log('no'),
        },
      ]);
    }
    setPassword('');
    setUserName('');
  };
  const handleSubmitApi=()=>{
    navigation.navigate("api")
  }
return (
    <View style={styles.mainContainer}>
      <Text style={styles.main_heading}>LogIn Form</Text>
      <Text style={styles.discription}>
        You can contact us any time on any@Xstack.com
      </Text>
      <View>
        <InputFeilds
        multiline
          label="User Name"
          value={userName}
          onChangeText={anything => setUserName(anything)}
        />

        <InputFeilds
          label="enter passord"
          secureTextEntry={true}
          value={password}
          onChangeText={anything => setPassword(anything)}
        />
      </View>

      <ButtonComponent onClick={handleSubmit} text="Login" />
      <ButtonComponent onClick={handleSubmitApi} text="go To Api" />

    </View>
  );
};

export default Login;
