import React from "react";

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            firsName: '',
            email: '',
        }
        this.firsNameRef = React.createRef();
    }
    
    

    handelChange = (event) => {
        // this.setState({firsName: event.target.value});
        this.setState({[event.target.name]: event.target.value});
    }

    handelCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked});
    }

    componentDidMount() {
        console.log('componentDidMount', this.firsNameRef);
        this.firsNameRef.current.focus();
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
                ref={this.firsNameRef}
               
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