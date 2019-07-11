import React, {Component} from 'react';
import Image from  '../image/doctor.jpg';


export class Body extends Component{

    constructor(props){
        super(props)

        this.state = {
            messages: []
        }
    }

    
    render(){
        return(
            <div className=" container">
                <div className="row col-md-12 mt-3" >
                    <div className=" card col-md-3 mt-5">
                    <img src={Image} alt="" className=" w-100 p-2 rounded-circle" />
                        <div className="card-body">
                            <h5 className="card-title">Dr Zaidi</h5>
                            <p className="card-text">Neurologist</p>
                            <p className="card-text">Expirence: 13 years</p>
                            <a href="/profile" className="btn btn-outline-dark card-link">View</a>
                            <a href="/chat" className="btn btn-outline-success  card-link">Chat</a>
                        </div>
                    </div>
                    <div className=" card col-md-3 mt-5">
                    <img src={Image} alt="" className=" w-100 p-2 rounded-circle" />
                        <div className="card-body ">
                            <h5 className="card-title">Dr Shabar</h5>
                            <p className="card-text">Cardiologist</p>
                            <p className="card-text">Expirence: 13 years</p>
                            <a href="/profile" className="btn btn-outline-dark card-link">View</a>
                            <a href="/chat" className="btn btn-outline-success card-link">Chat</a>
                        </div>
                    </div>
                    <div className=" card col-md-3 mt-5">
                    <img src={Image} alt="" className=" w-100 p-2 rounded-circle" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Orthologist</p>
                            <p className="card-text">Expirence: 13 years</p>
                            <a href="/profile" className="btn btn-outline-dark card-link ">View</a>
                            <a href="/chat" className="btn btn-outline-success card-link">Chat</a>
                        </div>
                    </div>
                    <div className="card col-sm-3 mt-5">
                    <img src={Image} alt="" className=" w-100 p-2 rounded-circle" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Orthologist</p>
                            <p className="card-text">Expirence: 13 years</p>
                            <a href="/profile" className="btn btn-outline-dark card-link ">View</a>
                            <a href="/chat" className="btn btn-outline-success card-link">Chat</a>
                        </div>
                    </div> 
                    <div className="mr-1 card col-sm-3 mt-5">
                    <img src={Image} alt="" className=" w-100 p-2 rounded-circle" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Orthologist</p>
                            <p className="card-text">Expirence: 11 years</p>
                            <a href="/profile" className="btn btn-outline-dark card-link ">View</a>
                            <a href="/chat" className="btn btn-outline-success card-link">Chat</a>
                        </div>
                    </div>
                    
                    <div className="mr-1 card col-sm-3 mt-5 h-25">
                    <img src={Image} alt="" className=" w-100 p-2 rounded-circle" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Orthologist</p>
                            <p className="card-text">Expirence: 13 years</p>
                            <a href="/profile" className="btn btn-outline-dark card-link ">View</a>
                            <a href="/chat" className="btn btn-outline-success card-link">Chat</a>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
} 

export default Body;