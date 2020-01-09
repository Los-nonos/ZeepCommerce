import React from 'react';

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
                <input type="button" class="btn" value="Sign in" />
            </div>
        )
    }
}

export default LoginComponent;