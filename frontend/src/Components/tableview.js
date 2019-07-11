import React, { Component } from 'react'

class Tableview extends Component {
    constructor(props) {
        super(props);
        this.state = {
          admin: [], 
          doctor: []
         }
        this.adminHandler = this.adminHandler.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this);
      }

      adminHandler(e){
        e.preventDefault();
            fetch('http://localhost:3001/app/admin')
            .then(data => {
              return data.json();
            })
            .then(payLoad => {
              this.setState({admin: payLoad})
            })
            .catch(error => console.log(error))
          }
    
      buttonHandler(e){
      e.preventDefault();
          fetch('http://localhost:3001/app/doctor')
          .then(data => {
            return data.json();
          })
          .then(payLoad => {
            this.setState({doctor: payLoad})
          })
          .catch(error => console.log(error))
        } 
        
    render() {
        return (
            <div>
                 <div>
                    <button className="btn btn-primary" onClick={this.adminHandler}>Admin</button>
                    </div>
                
                    <div className="p-3 border bg-light">
                    <button className="btn btn-primary" onClick={this.buttonHandler}>Doctor</button>
                    </div> 
                <br/>
                <table>
                    <thead>
                    <tr>
                        <th scope="col" >ID</th>
                        <th scope="col" >Role Id</th>
                        <th scope="col" >Admin Name</th>
                        <th scope="col" >User Last Visit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.admin && this.state.admin.map((obj, i) => (
                    <tr key={i}>
                        <th scope="row" >{obj.admin_id}</th>
                        <td>{obj.role_id}</td>
                        <td>{obj.username}</td>
                    </tr>))}
                    </tbody>
                    
                    <thead>
                    <tr>
                        <th scope="col" >Id</th>
                        <th scope="col" >Role</th>
                        <th scope="col" >First Name</th>
                        <th scope="col" >Last Name</th>
                        <th scope="col" >User Name</th>
                        <th scope="col" >Profession</th>
                        <th scope="col" >Expirence</th>
                        <th scope="col" >Degree</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.doctor && this.state.doctor.map((obj, i) => (
                    <tr key={i}>
                        <th scope="row" >{obj.doctor_id}</th>
                        <td>{obj.role_id}</td>
                        <td>{obj.first_name}</td>
                        <td>{obj.last_name}</td>
                        <td>{obj.username}</td>
                        <td>{obj.profession}</td>
                        <td>{obj.expirence}</td>
                        <td>{obj.degree}</td>
                    </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tableview;