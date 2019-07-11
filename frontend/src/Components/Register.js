import React, {Component} from 'react';
import Header from './Main/Header';

export class Register extends Component{
    constructor(){
        super();
        this.signup = this.signup.bind(this);
     
    }
    
    signup(e){
        e.preventDefault();
        let fullName = e.target.fullName.value;
        let email = e.target.email.value;
        let profession = e.target.profession.value;
        let degree = e.target.degree.value;
        let expirence = e.target.expirence.value;
        let password = e.target.password.value;
        let roleId = e.target.roleId.value;
    
        let obj = {
            fullName : fullName,
            email: email,
            profession: profession,
            expirence: expirence,
            degree: degree,
            password: password,
            roleId: roleId
        }
    
    
        let user = JSON.stringify(obj)
        console.log(user)
      


    if (roleId == 2) {
        const url = 'http://localhost:3001/auth/api/register/doctor';
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

            <div className="container-fluid col-4 card jumbotron mt-5 "> 
                <div>
                    <Header />
                </div>
                <div className="mt-5">
                    <form onSubmit={this.signup} className="">
                        <h3>Sign Up</h3>
                        <div className="form-row">
                            <input type="text" name="fullName" className="form-control" placeholder="Full Name" />
                        </div>
                        <div className="form-group mt-3">
                            <select name="roleId" className="form-control">
                                <option value="0" selected>Role</option>
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                                <option value="3">Patient</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6 mt-3">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6 mt-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                        </div>
                        <div>
                            <select name="expirence" className="form-control mt-3">
                                <option  value="0" selected>Expirence</option>
                                <option value="1year">1 year</option>
                                <option value="2years">2 Years</option>
                                <option value="3years">3 Years</option>
                                <option value="4years">4 Years</option>
                                <option value="5years">5 Years</option>
                                <option value="6years">6 Years</option>
                                <option value="7years">7 Years</option>
                                <option value="8years">8 Years</option>
                                <option value="9years">9 Years</option>
                                <option value="10years">10+ Years</option>
                            </select>
                        </div>
                        <div>
                            <select name="profession" className="form-control mt-3">
                                <option value='none'>Profession</option>
                                <option value="Pediatrics ">Pediatrics </option>
                                <option value="Cardiologist">Cardiologist</option>
                                <option value="Psychiatry">Psychiatry</option>
                                <option value="dentist"> Dentist</option>
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <div className="form-group ">
                                <select name="degree" className="form-control mt-4">
                                    <option value="mbbs">MBBS</option>
                                    <option value="fcps">FCPS</option>
                                    <option value="BDS">BDS</option>
                                    <option value="mphil">M.Phil</option>
                                    <option value="ms">MS</option>
                                </select>
                            </div>
                        </div>

                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                </div>    
            );
        }
    };

export default Register;