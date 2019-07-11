import React from 'react';
import io from "socket.io-client";

import Header from './Main/Header';


class Chat extends React.Component{

        constructor(props) {
            super(props);

            this.state = {
                // username: '',
                message: '',
                messages: []
            };

            this.socket = io('localhost:3001');

            this.socket.on('RECEIVE_MESSAGE', function(data){
                addMessage(data);
            });

            
            const addMessage = data => {
                console.log(data);
                this.setState({messages: [...this.state.messages, data]});
                console.log(this.state.messages);
            };

            this.sendMessage = ev => {
                ev.preventDefault();
                this.socket.emit('SEND_MESSAGE', {
                    // author: this.state.username,
                    id: 1,
                    message: this.state.message
                })
                // let newMessages = this.state.messages;
                // let newMsg = 
                
                this.setState({message: ''});
    
            }
            
        //     this.handleSubmit = this.handleSubmit.bind(this); 
        //   }
        
        //   handleSubmit(event) {
        //         event.preventDefault();
        //         let newMessages = this.state.messages;
        //         let message = {
        //             id: 1,
        //             message: event.target.message.value
        //         }
        //             newMessages.push(message);
        //         this.setState({messages: newMessages});
        //         event.target.message.value = '';
          }


          render(){

        return(
            <div>
                <div>
                    <Header />
                </div>
                <div className="mt-4 display-4 text-center py-5 col-md-3 d-inline-block">Users</div>
                <div className="mt-4 display-4 text-center py-5 col-md-9 d-inline-block" style={{backgroundColor: "bluelight"}}>Chat</div>
             
                <div className=" d-inline-flex col-md-12">
                    <div className=" shadow mr-2 d-inline-block border-right col-md-3 bg-white vh-90"  style={{overFlow: "auto"}}>
                        <ul className="display-4 " style={{listStyle: "none", fontSize: "130%", color: "blue"}}>
                            <li className="py-3 border-bottom" href="/chat">Dr John Doe</li>
                            <li className="py-3 border-bottom" href="/chat" >Dr Alexender</li>
                            <li className="py-3 border-bottom" href="/chat">Dr Nasir</li>
                            <li className="py-3 border-bottom" href="/chat">Dr Waseem</li>
                            <li className="py-3 border-bottom" href="/chat">Dr Ahmed</li>
                            <li className="py-3 border-bottom" href="/chat">Dr Zahid</li>
                        </ul>
                    </div>

                
                    <div className="col-md-9 col-sm-4 d-inline-flex bg-white shadow-lg">
                        
                            <div className="messages">
                                {this.state.messages.map(message => {
                                    return (
                                        // <div>{message.author}: {message.message}</div>
                                        <div>{message.message}</div>
                                    )
                                })}
                            </div>


                        <form className="container form-group" style={{position: "absolute", bottom: '0'}} onSubmit={this.handleSubmit} >

                                <input type="text" placeholder=" type message" name='message' className="form-control col-sm-5 d-inline-flex mr-2" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})} />
                                <button className="btn btn-primary d-inline-flex" onClick={this.sendMessage}>Send</button>
                        </form>
                        
                         {/* <div className="card-footer">
                                <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                <br/>
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            </div>
                        </div> */}
                        
                    </div>
                </div>    
            </div>
        );
    }
}

export default Chat;