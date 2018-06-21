import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import BootstrapTable from 'react-bootstrap-table-next';


//const products = [ {id:1, name: 'carlos'} ];


class Table extends Component {

    render() {
        return (
            <div>
                <Link to="/user/new"><Button bsStyle="primary">Criar {this.props.name}</Button></Link>
                <BootstrapTable keyField='id' data={ this.props.data } columns={ this.props.columns } />
            </div>
        )
    }
}

export default Table;