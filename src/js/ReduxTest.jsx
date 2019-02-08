import React, { Component } from "react";


export default class ReduxTest extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: '',
    //         age: ''

    //     }
    // }

    setValue = (event) => {
        this.props.setName(event.target.value);
    }
    setAge = (event) => {
        this.props.setAge(event.target.value);
    }


    render() {
        return (
            <div>
                <input placeholder='name' className='testInput' name='setName' onChange={this.setValue}></input>
                <input placeholder='age' className='testInput' name='setAge' onChange={this.setAge}></input>
                <div>
                    <div>name: {this.props.name}</div>
                    <div>age: {this.props.age}</div>
                </div>

            </div>
        )
    }
}