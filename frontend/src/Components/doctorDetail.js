import React, {Component} from 'react';
// import StarRating from 'react-star-rating';
import Image from './image/doctor.jpg'

class DoctorDetail extends Component{
    render(){
        return(

            <div className="container">
                  <div className="card col-sm-12 mt-5">
                      <div className="col-sm-4">
                        <img src={Image} alt="Responsive image"  className=" img-fluid  rounded-circle" />

                      </div>
                        <div className="card-body">
                            <h5 className="card-title">Dr Zaidi</h5>
                            <p className="card-text">Neurologist</p>
                            <p className="card-text">Expirence: 13 years</p>
                            <a href="/" className="btn btn-outline-dark  card-link">go back</a>
                            <a href="/chat" className="btn btn-outline-success  card-link">Chat</a>
                        </div>
                    </div>
            </div>
        );
    }
}

export default DoctorDetail;