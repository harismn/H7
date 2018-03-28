import React, { Component } from 'react'
import { 
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native'

export default class NewVocab extends Component{
    constructor(props){
        super(props);

    }
render() {
    return (
        <View style={styles.container}>
         <Image
            style={styles.image}
            source={require('../images/ria.jpg')}
            />
            <Text style={styles.text}>Ayo pilih 8 kata baru
                </Text>
            <TouchableOpacity style={styles.button}
            onPress={console.log('masuk kok')}>
            <Text style={styles.textButton}>
                Pilih
                </Text>
                </TouchableOpacity> 
            </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9500'
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      margin: 70,
    },
    textButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 30,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 120,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 1,
      },
})