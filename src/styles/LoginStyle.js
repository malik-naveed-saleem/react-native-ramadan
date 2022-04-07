import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#e1e8e2',
  },
  main_heading: {
    fontSize: 30,
    color: 'grey',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 30,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  discription: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 50,
    textAlign: 'center',

    lineHeight: 25,
    fontFamily: 'regular',
  },
 
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    fontSize: 18,
    fontFamily: 'regular',
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 12,
  },
  btnOpacity: {
    textAlign: 'center',
  },
  btnText: {
    textAlign: 'center',
    borderWidth: 6,
    borderColor: '#044f14',
    width: '100%',
    marginVertical: 20,
    paddingVertical: 20,
    borderRadius: 11,
    color: '#fff',
    fontSize: 20,
  },
});
export default Styles;
