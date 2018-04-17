import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {
    PagerTabIndicator,
    IndicatorViewPager,
    PagerTitleIndicator,
    PagerDotIndicator,
} from 'rn-viewpager';
import Foto from '../../asets'
// import PageOne from './pageOne'
const { width } = Dimensions.get('window')

export default class Sidebar extends Component {
        _renderTabIndicator() {
        let tabs = [{
                iconSource: Foto.setting,
                selectedIconSource: Foto.setting,
            },{
                iconSource: Foto.fire,
                selectedIconSource: Foto.fire,
            },{
                iconSource: Foto.foto1,
                selectedIconSource: Foto.foto1,
        }];
        return <PagerTabIndicator
          tabs={tabs}
          selectedIconStyle={{ tintColor: 'orange', width: 30, height: 30 }}
          iconStyle={{ tintColor: '#BDBDBD', width: 30, height: 30 }}
        />
    }
    render() {
        return (
          <View style={{flex:1}}>

                <IndicatorViewPager
					style={{flex:1, paddingTop:20, backgroundColor:'orange'}}
                    indicator={this._renderTabIndicator()}
                >
                    <View style={{backgroundColor:'white'}}>
                      <Text style={{ fontSize: 60, color: '#42A5F5', textAlign: 'center' }}>
                       8
                      </Text>
                      <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>
                        kata sedang dipelajari
                      </Text>
                      <ScrollView style={{ marginTop: 16, backgroundColor: '#EEEEEE' }}>
                        <View style={{ alignItems: 'center' }}>
                          <View style={{ padding: 20, alignItems: 'center' }}>
                            <Text style={{ fontWeight: '300', marginBottom: 12, fontSize: 20, color: 'black' }}>LEVEL 1</Text>
                            <AnimatedCircularProgress
                              size={120}
                              width={15}
                              fill={50}
                              tintColor="#00e0ff"
                              onAnimationComplete={() => console.log('onAnimationComplete')}
                              backgroundColor="#3d5875"
                            />
                          </View>
                          <View style={{ marginVertical: 20, borderColor: '#BDBDBD', borderWidth: 1, width: '100%' }} />
                          <View style={{ padding: 20, alignItems: 'center' }}>
                            <Text style={{ fontWeight: '300', marginBottom: 12, fontSize: 20, color: 'black' }}>Kecepatan Menghafal</Text>
                            <AnimatedCircularProgress
                              size={120}
                              width={15}
                              fill={20}
                              tintColor="#00e0ff"
                              onAnimationComplete={() => console.log('onAnimationComplete')}
                              backgroundColor="#3d5875"
                            />
                          </View>
                          <View style={{ marginVertical: 20, borderColor: '#BDBDBD', borderWidth: 1, width: '100%' }} />
                        </View>
                          <View style={{ justifyContent: 'center', flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 8 }}>
                            <Image source={Foto.circle} style={styles.circle} />
                            <Image source={Foto.circle} style={styles.circle} />
                            <Image source={Foto.circle} style={styles.circle} />
                            <Image source={Foto.circle} style={styles.circle} />
                            <Image source={Foto.circle} style={styles.circle} />
                            <Image source={Foto.circle} style={styles.circle} />
                            <Image source={Foto.circle} style={{ width: 40, height: 40 }} />
                          </View>
                      </ScrollView>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.page2text}>
                        disini text aja
                        </Text>
                        <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('textinput')}>
                        <Text> kek aplikasi selanjutnya </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                    <Image
                    style={styles.image}
                    source={Foto.right}
                    />
                    </View>
                </IndicatorViewPager>
              </View>
        );
    }
}

const styles = StyleSheet.create({

    image: {
        width: 350,
        height: 520,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 1,
      },
    page2text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        width: '70%',
      },
    circle: {
      width: width * 0.1,
      height: 40,
      marginRight: 12,
    },
})
