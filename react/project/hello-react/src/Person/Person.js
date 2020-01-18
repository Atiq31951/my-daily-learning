import React, { Component } from 'react'

class Person extends Component {
    constructor (props) {
        super()
        this.props = props
    }
    render () {
        return(
            <div>Hello I am from the person {this.props.name} and age {this.props.age} </div>
        )
    }
}

export default Person