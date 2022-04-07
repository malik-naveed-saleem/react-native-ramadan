import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  main_view: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',

    alignItems: 'center',
  },
  btn_back: {
    width: 300,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    margin: 5,
    fontSize: 30,
    borderWidth: 5,
    borderColor: '#94062c',
    borderRadius: 15,
  },
  wellcome_style: {
    fontSize: 40,
    paddingBottom: 25,
  },
  image_style: {
    width: '100%',
    height: '100%',

    resizeMode: 'cover',
    position: 'absolute',
  },
  itemText:{
  fontSize:25,
  backgroundColor:"blue",
  paddingVertical:25,
  margin:10

  },
  list:{
    // backgroundColor:"red"
  }
});
export default Styles;
