import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import Table from './Table';

class Product extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProducts() {
        if(this.props.products){
            

            return <Table data={this.props.products} columns={null} name="Produtos" create resource="products"></Table>
            //return <BootstrapTable keyField='id' data={ this.props.users } columns={ columns } />
        }
        return <div>Carregando Produtos ...</div>;
    }

    render() {
        console.log("minahs props: ", this.props.products)
        return (
            <Panel bsStyle="default" className="mx-auto">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Lista de Produtos</Panel.Title>
                </Panel.Heading>
                <Panel.Body className="">

                    {this.renderProducts()}
                </Panel.Body>
            </Panel>
        )
    }
}

function mapStateToProps(state){
    return {products: state.products}
}

export default connect(mapStateToProps, {fetchProducts})(Product)