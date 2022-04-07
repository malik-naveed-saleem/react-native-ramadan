import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  uerText: {
    paddingVertical: 25,
    backgroundColor: '#e6726a',
    marginVertical: 15,
    width: 380,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  modal_view: {
    backgroundColor: 'white',
    height: 200,
    width: 50,
    textAlign: 'center',
    // marginVertical:50,
    // marginHorizontal:16,
    fontSize: 50,
    borderRadius: 20,
    width: 300,
  },
  main_viewModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_text: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 25,
  },
  cancle_button:{
      textAlign:"center",
      marginTop:90,
      fontWeight:"bold",
      color:"blue"

  },
  Api_View:{
    backgroundColor:"#fcfcfc",
    fontSize:25,
    margin:8,
    paddingVertical:10,
    textAlign:"center",
    marginHorizontal:25,
    color:"#fff",
    borderWidth:3,
    borderColor:"black",
    borderRadius:20,
    

  },
  Api_Text:{
    // color:"#fff",
    textAlign:"center",
    fontWeight:"bold",
    lineHeight:25,
    fontSize:20

  },
  main_container:{
    backgroundColor:"#021263",
    paddingVertical:50
  },
  individual_id:{
    fontSize:25,
    color:"#000"
  }


});
export default styles;
