import React, {Component} from "react";
import Header from "../../components/header";
import './login.scss'

class Login extends Component{
    render(){
        return(
            <div className="P-login">
                <Header/>
                <h1>Login page</h1>
            </div>
        )
    }
}
export default Login