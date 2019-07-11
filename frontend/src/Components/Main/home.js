import React from 'react';
import Header from './Header';
import Body from './Body';

class Home extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

export default Home;