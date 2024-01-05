import React from "react";

class Form extends React.Component {
    state = {
        email: '',
        isAgreeWithTerms: false,
    }

    handelChange = (event) => {
        // this.setState({firsName: event.target.value});
        this.setState({[event.target.name]: event.target.value});
    }

    handelCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked});
    }

    validateName = () => {
        if (this.state.firsName.length < 5){
            alert('Длина имени должна быть не менее 5 символов.');
        }
    }

    registration = () => {
        if (this.state.email.length < 5){
            alert('Длина email должна быть не менее 5 символов.');
            return;
        }
        if (!this.state.isAgreeWithTerms){
            alert('Нет галки.');
            return;
        }
        alert('Вы подписаны.');
        this.setState({email: '', isAgreeWithTerms: false});

    }


    render() {
        const {email, isAgreeWithTerms} = this.state;
        return <div>            
            <input 
                type="email" 
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handelChange}
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    name="isAgreeWithTerms"
                    checked={isAgreeWithTerms}
                    onChange={this.handelCheckboxChange}
                />
                I agree with terms and conditions
            </label>
            <br />
            <button onClick={this.registration}>Send</button> 
            
        </div>
    }
}

export {Form}