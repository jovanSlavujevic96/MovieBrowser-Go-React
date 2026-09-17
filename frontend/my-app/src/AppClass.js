import { Component } from 'react';
import './AppClass.css'

export default class AppClass extends Component {
    // mandatory method for every class which extends `Component`
    render() {
        return (
            <h1 className="h1-red">Hello, World!</h1>
        );
    }
}
