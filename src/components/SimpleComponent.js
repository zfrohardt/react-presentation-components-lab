// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
    constructor() {
        super();
        this.state = {
            mood: 'happy',
        }
    }

    render() {
        return (
            <div onClick={this.clickHandler} >
                {this.state.mood}
            </div>
        );
    }

    clickHandler = event => {
        let newMood = '';
        if (this.state.mood === 'happy') {
            newMood = 'sad';
        } else {
            newMood = 'happy';
        }

        this.setState({
            mood: newMood,
        })
    }
}