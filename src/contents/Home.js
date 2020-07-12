import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/Crystal_circle.png';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} classname="profilepic" alt="headshot of brunette girl with straight hair"></img>

            <ReactTypingEffect className="typingeffect" text={['I am Crystal Jeremias','I am a Full Stack Web Developer']} speed={100} eraseDelay={700}/>

            <Social />
            </div>
            
        )
    }
}

export default Home