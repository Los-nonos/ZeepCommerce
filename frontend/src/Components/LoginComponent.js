import React from 'react';
import ButtonRadious from './ButtonRadious';

class LoginComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="login-box">
                <h1>Login</h1>
                <div className="login-textbox">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="login-textbox">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <ButtonRadious type="submit" text="Login" />
            </div>
        )
    }
}

export default LoginComponent;