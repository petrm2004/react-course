import React from "react";

class Form extends React.Component {
    state = {
        firsName: '',
        email: '',
        message: '',
        select: '',
        subscription: false,
        gender: ''
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


    render() {
        const {firsName, email, message, select, subscription, gender} = this.state;
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
            <br/>
            <textarea 
                name="message"
                value={message}
                onChange={this.handelChange}
            />
            <br/>            
            <select 
                name="select"
                value={select}
                onChange={this.handelChange}
            >
                <option value="" disabled></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <br/>
            <label>
                <input 
                    type="checkbox" 
                    name="subscription"    
                    checked={subscription}
                    onChange={this.handelCheckboxChange}
                />   
                Subscription 
            </label>
            <br/>
            <input 
                type="radio" 
                name="gender"
                value="male"
                onChange={this.handelChange}
                checked={gender === "male"}
            /> Male  
            <input 
                type="radio" 
                name="gender"
                value="female"
                onChange={this.handelChange}
                checked={gender === "female"}
            /> Female  
            
        </div>
    }
}

export {Form}