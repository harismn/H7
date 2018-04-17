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
      fontSize: 200,
      fontWeight: 'bold',
      color: Color.white,
    }
  });

  export default styles;