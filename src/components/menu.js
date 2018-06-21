import React from 'react';
import { Link } from 'react-router-dom';
import App from './app';
import {Badge} from 'react-materialize'


const menu = () => {
    return(
        <div>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/user">Usuarios</Link></li>
           <li><Link to="/">Produtos</Link></li>
           <li><Link to="/">
                sass <Badge newIcon>4</Badge>
            </Link></li>
            <li>Sair</li>
        </div>
    );

}

export default menu;