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
import { StackNavigator } from 'react-navigation'
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
                       7
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
                            <Image source={Foto.circle} style={styles.circle} />
                          </View>
                      </ScrollView>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.page2text}>
                         7 kata siap
                        </Text>
                        <Text style={styles.page2text}> anda hapalkan </Text>
                        <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('textinput')}>
                        <Text> Mulai </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('tinder')}>
                        <Text> coba lagi </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('voice')}>
                        <Text> Voice </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('vocab')}>
                        <Text> Vocab hari ini </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{backgroundColor:'white'}}>
                    <Text style={{ fontSize: 20, color: '#42A5F5', textAlign: 'center' }}>
                       Masa depan yang akan cerah akan datang :D
                      </Text>
                      <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>
                        ciduklah selagi bisa
                      </Text>
                      <ScrollView style={{ marginTop: 16, backgroundColor: '#EEEEEE' }}>
                        <View>
                          <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{marginBottom: 12, fontSize: 20, color: 'black', }}>Kata-kata yang hari ini</Text>
                            <TouchableOpacity
                              onPress={() => this.props.navigation.navigate('isivocab')}>
                                <Image source={Foto.button} style={styles.circle} />
                              </TouchableOpacity>
                            <Text>7 kata</Text>
                          </View>
                          <View style={{ marginVertical: 20, borderColor: '#BDBDBD', borderWidth: 1, width: '100%' }} />
                          <View style={{ padding: 20,flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{ fontWeight: '100', marginBottom: 12, fontSize: 20, color: 'black' }}>Level dan minat</Text>
                            <Text>Diatas rata-rata, 5 topik</Text>
                            <Image source={Foto.button} style={styles.circle} />
                          </View>
                          <View style={{ marginVertical: 20, borderColor: '#BDBDBD', borderWidth: 1, width: '100%' }} />
                          <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{marginBottom: 12, fontSize: 20, color: 'black', }}>Tampilan semua kata-kataku</Text>
                            <Image source={Foto.button} style={styles.circle} />
                          </View>
                          <View style={{ marginVertical: 20, borderColor: '#BDBDBD', borderWidth: 1, width: '100%' }} />
                          <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{marginBottom: 12, fontSize: 20, color: 'black', }}>Hubungi Pengembang</Text>
                            <Image source={Foto.button} style={styles.circle} />
                          </View>
                          <View style={{ marginVertical: 20, borderColor: '#BDBDBD', borderWidth: 1, width: '100%' }} />
                          <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{marginBottom: 12, fontSize: 20, color: 'black', }}>Pengingat</Text>
                            <Image source={Foto.button} style={styles.circle} />
                          </View>
                          <View style={{ marginVertical: 20, borderColor: '#BDBDBD', borderWidth: 1, width: '100%' }} />
                          <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{marginBottom: 12, fontSize: 20, color: 'black', }}>Syarat Penggunaan</Text>
                            <Image source={Foto.button} style={styles.circle} />
                          </View>
                          <View style={{ marginVertical: 20, borderColor: '#BDBDBD', borderWidth: 1, width: '100%' }} />
                        </View>
                      </ScrollView>
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
      marginBottom: 20,
    },
    button: {
        marginTop: 30,
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
