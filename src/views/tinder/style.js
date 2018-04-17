import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    text: { 
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      margin: 20,
      fontFamily: 'text-align',

    },
    textTouch: { 
      color: '#000',
      fontSize: 20,
      margin: 10,
      fontFamily: 'text-align',

    },
    button: {
      alignItems: 'center',
      padding: 10,
      borderRadius: 15,
    },
    correct: {
      alignItems: 'center',
      padding: 10,
      borderRadius: 15,
      backgroundColor: 'green',
    },
    wrong: {
      alignItems: 'center',
      padding: 10,
      borderRadius: 15,
      backgroundColor: 'red',
    },
    textInput: {
      height: 40, 
      marginVertical: 50,
      width: '80%'

    },
    secondText: {
      height: 40, 
      margin: 50,

    }
  })

  export default styles;