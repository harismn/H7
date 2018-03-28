import { AppRegistry } from 'react-native';
import React, { Component } from 'react'
import App from './App';
import FirstScreen from './src/views/firstScreen'
import Content from './src/views/content'
import Level  from './src/views/level'
import NewVocab from './src/views/NewVocab'
import tryScreen from './src/views/tryScreen'
class Main extends Component {
    constructor(props){
        super(props);
        this.state = { currentScreen: 'FirstScreen'};
        console.log('start')
        setTimeout(()=>{
            this.setState({ currentScreen: 'Content' })
        }, 2000)
    }
    render(){
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'FirstScreen' ? <FirstScreen /> : <Content />
        return mainScreen
    }
}


AppRegistry.registerComponent('V7', () => NewVocab);