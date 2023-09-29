import React, { Component } from 'react';
import { Button, SmallButton } from '../Components/Button';
import { StyledLink } from '../Components/Link';
import { TextField } from '../Components/TextField';

class Home extends Component {
    render() {
        return (
            <div>
                <Button className='btn_style' primary>Hello Hân</Button>
                <SmallButton>Hi Hân</SmallButton>
                <StyledLink id="abc" name="abc123">StyledLink</StyledLink>
                <TextField inputColor="green"></TextField>
            </div>
        );
    }
}

export default Home;