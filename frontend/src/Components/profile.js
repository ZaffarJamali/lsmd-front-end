import React, {Component} from 'react';
import Image from './image/happydoctor.jpg';


export class Profile extends Component{ 

    render() {
        return(
            <div className="conatiner shadow">
                <div>
                    <form  >
                        <div className="border-bottom mt-5">
                            <div>
                                <img src={Image} className="px-4 rounded-circle border-left" rounded />
                            </div>
                            <div>
                                <label className="star"></label>
                            </div>
                        </div>  
                    </form>
                </div>
            </div>
        );
    }
}

export default Profile;