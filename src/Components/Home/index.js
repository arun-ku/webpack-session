import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import {
//     Yellow,
//     Red,
//     Green,
//     Blue
// } from '../'

import './base.css'

function asyncComponent(getComponent) {
    return class AsyncComponent extends React.Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }
}

const Red = asyncComponent(() =>
    import('../Red').then(module => module.default)
);

const Green = asyncComponent(() =>
    import('../Green').then(module => module.default)
);

const Blue = asyncComponent(() =>
    import('../Blue').then(module => module.default)
);

const Yellow = asyncComponent(() =>
    import('../Yellow').then(module => module.default)
);

export default class Home extends Component {
    render () {
        return (
            <div className="container">
                <div className="link-container">
                    <Link className="anchor" to="/red">Red</Link>
                    <Link className="anchor" to="/blue">Blue</Link>
                    <Link className="anchor" to="/green">Green</Link>
                    <Link className="anchor" to="/yellow">Yellow</Link>
                </div>
                <div>
                    <Route path="/red" component={Red} />
                    <Route path="/yellow" component={Yellow} />
                    <Route path="/green" component={Green} />
                    <Route path="/blue" component={Blue} />
                </div>
            </div>
        );
    }
}