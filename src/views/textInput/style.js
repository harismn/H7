import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'orange'

    },
    text: { 
      color: '#000',
      fontSize: 15,
      fontWeight: 'bold',
      margin: 10,
      fontFamily: 'text-align',

    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      borderRadius: 15,
    },
    textInput: {
      height: 40, 
      marginVertical: 10,
      width: '80%',
      color: 'black',
    },
    secondText: {
      height: 40, 
      margin: 50,
    }
  })

  export default styles;