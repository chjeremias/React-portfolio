import React, {Component} from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render () {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email : crystal.jeremias@gmail.com</h3>
                <h3>Phone : 336.225.0409</h3>
                <Social />
            </div>
        )
    }
}

export default Contact