import React from 'react';
import disklogo from '../../disklogo.png'
import './main.css';
import { Box, Typography, Button } from '@material-ui/core';

class Main extends React.Component {
    toCataloge = () => {
        this.props.history.push('/catalog');
    }
    render() {
        console.log(this.props)
        return (
            <Box className='main-cont'>
                <img
                    className='footer-img logo'
                    src={disklogo}
                    alt="Logo"
                />
                <Box className='text-main-cont'>
                    <Typography paragraph variant='h2' color='secondary'>D I S K&nbsp;&nbsp;&nbsp;W O R L D</Typography>
                    <Typography paragraph variant='h3' color='secondary'>Удивительный мир картонок!</Typography>
                    <Button onClick={this.toCataloge} size='large' color='secondary' variant='outlined'>Слышь, купи</Button>
                </Box>
            </Box>
        );
    }
}

export default Main;