import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import styles from './style'
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
      <Swiper 
      style={styles.wrapper}
      showsPagination = {true}
        >
        <Swipe1 />
          <Swipe2 />
            <Swipe3 />
              <Swipe4 />
            <Swipe5 />
          <Swipe6 onPress={() => this.props.navigation.navigate('sidebars')} />
      </Swiper>
    );
  }
}
