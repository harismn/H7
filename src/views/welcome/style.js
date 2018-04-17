import { StyleSheet } from 'react-native'
import Color from '../../asets'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Color.orange,
      padding:  20
    },
    textNumber: {
      fontSize: 130,
      fontWeight: 'bold',
      color: Color.white,
      margin: 16,
    },
    textUp: {
      fontSize : 30,
      fontWeight: 'bold',
      color: Color.white,
  
    },
    button: {
      alignItems: 'center',
      backgroundColor: Color.gray,
      padding: 10,
      margin: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      borderWidth: 1,
      width: '70%',
    },
    texton: {
      fontSize : 30,
      fontWeight: 'bold',
      color: Color.white,
    },
  });

  export default styles;