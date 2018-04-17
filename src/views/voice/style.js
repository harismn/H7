import { StyleSheet } from 'react-native'
import Color from '../../asets'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Color.orange,
    },
    textStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white', 
    //   marginBottom: 40,
    },
    button: {
      width: 150,
      height: 150,
      marginBottom: 40,
    },
    textInput: {
      height: 40, 
      marginVertical: 10,
      width: '80%',
      color: 'black',
      },  
    buttons: {
      marginTop: 40,
      alignItems: 'center',
      backgroundColor: Color.gray,
      padding: 10,
      borderRadius: 15,
      },
  });

  export default styles;