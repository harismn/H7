import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style'
import Foto from '../../asets'

export default class Swipe6 extends Component {

    render(){
    console.log(this.props, 'swipe')
        return(
            <View style={styles.container}>
                <Image
                style={styles.image}
                source={Foto.swipe6}
                />
                <Text style={styles.text}>Dan aplikasi ini</Text>
                <Text style={styles.text}>adalah jawabannya</Text>
                <Text style={styles.text}>7 Aplication akan</Text>
                <Text style={styles.text}>membantu anda untuk </Text>
                <Text style={styles.text}>menghapalkan banyak vocab</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.onPress}>
                        <Text style={{ fontSize: 16, color: 'orange' }}> Lanjutkan </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
