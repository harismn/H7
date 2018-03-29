import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Swipe1 from './swipe1'
import Swipe2 from './swipe2'
import Swipe3 from './swipe3'
import Swipe4 from './swipe4'
import Swipe5 from './swipe5'
import Swipe6 from './swipe6'



export default class SwiperSlayer extends Component {

  render(){
    return (
      <Swiper style={styles.wrapper}>
       <Swipe1 />
       <Swipe2 />
       <Swipe3 />
       <Swipe4 />
       <Swipe5 />
       <Swipe6 />
      </Swiper>
    );
  }
}


const styles = StyleSheet.create({
    wrapper: {
        
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    }, 
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })