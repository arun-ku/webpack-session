import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from '../'

export default class App extends Component {
    render () {
        return (
            <div>
                <Router>
                    <Home />
                </Router>
            </div>
        );
    }
}