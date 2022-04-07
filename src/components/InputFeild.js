import React from "react"
import {TextInput,View,Text}  from "react-native"
import Styles from "./Styles"
const InputFeilds=(props)=>{
  const {onChangeText,value,label,secureTextEntry ,multiline}=props
    return(
      <View>

<Text style={Styles.input_label}>{label}</Text>
        <TextInput

          style={Styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={true}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
          activeOpacity={1}
          multiline={multiline}
        />
      </View>
    )

}
export default InputFeilds;