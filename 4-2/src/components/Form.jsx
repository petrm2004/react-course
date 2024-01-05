import React from "react";

class Form extends React.Component {
    state = {
        firsName: '',
        email: ''
    }

    handelChange = (event) => {
        // this.setState({firsName: event.target.value});
        this.setState({[event.target.name]: event.target.value});
    }

    validateName = () => {
        if (this.state.firsName.length < 5){
            alert('Длина имени должна быть не менее 5 символов.');
        }
    }


    render() {
        const {firsName, email} = this.state;
        return <div>
            <input 
            type="text" 
            name="firsName"
            placeholder="firsName"
            value={firsName}
            onChange={this.handelChange}
            onBlur={this.validateName}
            />
            <input 
            type="email" 
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handelChange}
            />
        </div>
    }
}

export {Form}