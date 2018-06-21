import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class User extends Component {
    render() {
        return (
            <div>
                <h2>Lista de Usuários</h2>
            </div>
        );
    }
    
}

export default connect(null, { fetchUsers })(User);