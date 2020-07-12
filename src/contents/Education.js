import React, {Component} from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>

                <Widecard title="Web Developer" where="Wake Tech Community College" from="August 2019" to="Present"/>

                <Widecard title="LPN" where="Davidson County Community College" from="August 2014" to="July 2015"/>
                
                <h1 className="subtopic">My Certificates</h1>

                <Widecard title="Information Technology: Web Development Basics" where="Wake Tech Community College" from="May 2020" to="Present"/>

                <Widecard title="Information Technology: IT Foundations" where="Wake Tech Community College" from="May 2020" to="Present"/>
            </div>
        )
    }
}

export default Education