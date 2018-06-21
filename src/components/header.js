import React from 'react';
import {Navbar} from 'react-materialize'
import Menu from './menu';

const header = () => {
    return(
        <Navbar brand='logo' style={{'padding-left': 10 + 'px'}} right>
            <Menu />
        </Navbar>
    );

}

export default header;