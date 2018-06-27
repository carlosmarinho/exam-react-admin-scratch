import React, { Component } from 'react';
import { Field } from 'redux-form';

class UserNew extends Component{
    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input
                    type="text"
                    {...field.input}
                />
            </div>
        )
    }

    render() {
        return(
            <div>Cadastro de novo usuario
            <form>
                <Field 
                    label="Nome"
                    name="name"
                    component={this.renderField}/>
            </form>
            </div>
        )
    }
}

export default UserNew