import { StyleSheet } from 'react-native'
import Color from '../../asets'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Color.orange

    },
    text: { 
      color: Color.darkBlue,
      fontSize: 15,
      fontWeight: 'bold',
      margin: 10,
      fontFamily: 'text-align',

    },
    button: {
      alignItems: 'center',
      backgroundColor: Color.gray,
      padding: 10,
      borderRadius: 15,
    },
    textInput: {
      height: 40, 
      marginVertical: 10,
      width: '80%',
      color: Color.black,
    },
    secondText: {
      height: 40, 
      margin: 50,
    }
  })

  export default styles;