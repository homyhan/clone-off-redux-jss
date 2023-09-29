import styled, {ThemeProvider} from 'styled-components';
import React, { Component } from 'react';

const configDarkTheme = {
    background: 'black',
    color: 'blue'
}

const configLightTheme={
    background: '#6633FF',
    color: 'white'
}

class Demo extends Component {

    state={
        currentTheme: configDarkTheme
    }

    hanldChangeTheme=(evt)=>{
        this.setState({
            currentTheme: evt.target.value=="true" ? configDarkTheme : configLightTheme
        });
        console.log(evt.target.value);
    }
   
    render() {
        
        const DivStyle = styled.div`
            color: ${props=>props.theme.color};
            padding: 5%;
            background-color: ${props=>props.theme.background};
        `
        return (
            <ThemeProvider theme={this.state.currentTheme}>
        <DivStyle>Hello</DivStyle>
        <select onChange={this.hanldChangeTheme}>
            <option value="true">Dark Theme</option>
            <option value="false">Light Theme</option>
        </select>
    </ThemeProvider>
        );
    }
}

export default Demo;