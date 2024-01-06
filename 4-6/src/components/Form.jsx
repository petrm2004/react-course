import React from "react";

class Form extends React.Component {
    constructor(){
        super();
        this.firsNameRef = React.createRef();
        this.emailRef = React.createRef();
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

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.firsNameRef.current.value.length < 4)
        {
            alert('firsNameRef  < 4');
            return;
        }
        if(this.emailRef.current.value.length < 4)
        {
            alert('emailRef  < 4');
            return;
        }
        //send
        this.firsNameRef.current.value = '';
        this.emailRef.current.value = '';
    }

    render() {
        return <form onSubmit={this.handleSubmit}>            
            <input 
                type="text" 
                name="firsName"
                placeholder="firsName"
                ref={this.firsNameRef}
               
            />
            <input 
                type="email" 
                name="email"
                placeholder="email"
                ref={this.emailRef}
            />
            <button>Отправить</button>
            
        </form>
    }
}

export {Form}