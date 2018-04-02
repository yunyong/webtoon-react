import React, { Component } from 'react';
import Header from './Header';

class My extends Component {
    render() {
        return (
            <div>
                <Header menu="my" />
                My
            </div>
        );
    }
}

export default My;
