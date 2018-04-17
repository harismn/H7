import { StyleSheet } from 'react-native'
import Color from '../../asets'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: Color.orange,
        padding:  50
    },
    textUp: {
        fontSize : 20,
        fontWeight: 'bold',
        color: 'white',
        // padding: 20,
    },
    newStyle: {
        justifyContent: 'center',
        alignItems: 'center'
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
        paddingHorizontal: 30,
    },
})

export default styles;