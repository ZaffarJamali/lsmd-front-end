import React, {Component} from 'react';
import Header from './Main/Header';


export class Login extends Component{
  constructor(){
    super();

    this.login = this.login.bind(this);
}


login(e){
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let roleId = e.target.role.value;

    let obj = {
        email: email,
        password: password
    }


    let user = JSON.stringify(obj)
    console.log(user)
    if (roleId == 2) {
        const url = 'http://localhost:3001/auth/api/login/doctor';
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: user // body data type must match "Content-Type" header
        }).then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
    else {
        console.log('role is not doctor', roleId)
    }
}


    render() {
        return(
            
            <div className="jumbotron col-4 container " > 
                <div>
                    <Header />
                </div>
                <div className="">
                    <form onSubmit={this.login} >
                        <h1 >Login</h1>
                        <div className="form-group">
                            <label htmlFor="Email">Email:</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="form-group">
                            <label className="form-check-label">Role:</label>
                            <select name="role" className="form-control">
                                <option value="0" selected>Role</option>
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                                <option value="3">Patient</option>
                            </select>
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label" >
                            <input className="form-check-input" type="checkbox" /> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>    
       );
    }
};

export default Login;