import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChats } from '../actions';
import { Panel } from 'react-bootstrap';
import Table from './Table';
import { textFilter } from 'react-bootstrap-table2-filter';




class Chat extends Component {

    componentDidMount() {
        this.props.fetchChats()
    }

    renderChats() {
        if(this.props.chats){
            const columns = [{
                dataField: 'ean',
                text: 'EAN',
                isKey: true
              },
              {
                dataField: 'descricao',
                text: 'Descrição',
                filter: textFilter(),
                sort: true
              }, 
              {
                dataField: 'loja',
                text: 'Loja',
              }, 
              {
                dataField: 'data',
                text: 'Data',
              },
              {
                  dataField: 'pdv',
                  text: 'PDV',
                  sort: true
              }, 
              {
                dataField: 'nsu',
                text: 'nsu',
              },
              {
                dataField: 'depto',
                text: 'Departamento',
              },
              {
                dataField: 'pcu',
                text: 'PCU',
              },
              {
                dataField: 'desconto',
                text: 'Desconto',
              },
              {
                dataField: 'alic_icms',
                text: 'Alic ICMS'
              }, 
              {
                dataField: 'qtd',
                text: 'QTD'
              }, 
              {
                dataField: 'data_ins',
                text: 'Data Ins'
              }, 
              {
                dataField: 'codigo_sap',
                text: 'codigo sap'
              }, 
              {
                dataField: 'flag_garantia',
                text: 'Flag Garantia'
              }, 
              {
                dataField: 'meses_garantia',
                text: 'Meses Garantia'
              }, 
              {
                dataField: 'vch_atrib_cor',
                text: 'VHC Cor',
              },
              {
                dataField: 'bo_basico',
                text: 'Bo Basico',
              },
              {
                dataField: 'cupom',
                text: 'cupom',
              },
              {
                  dataField: 'pco',
                  text: 'Preço'
              }];

            return <Table keyField={"ean"} data={this.props.chats} columns={columns} name="Conversas"></Table>
            //return <BootstrapTable keyField='id' data={ this.props.users } columns={ columns } />
        }
        return <div>Carregando Conversas ...</div>;
    }

 
    render() {
        return (
            <Panel bsStyle="default" className="mx-auto">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Lista de Conversas</Panel.Title>
                </Panel.Heading>
                <Panel.Body className="">

                    {this.renderChats()}
                </Panel.Body>
            </Panel>
        );
    }
    
}

function mapStateToProps(state){
    return {chats: state.chats}
}

export default connect(mapStateToProps, { fetchChats })(Chat);