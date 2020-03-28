import React from 'react'

const Component2 = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default class Component1 extends React.Component {
    constructor (props) {
        super(props)
        this.props = props
    }

    ElasticFilterList = (props) => {
        return (
            <div>
                {props}
                <div>
                    I am from the Child
                </div>
            </div>
        )
    }
    render () {
        return(
            <Component2>
                <div>
                    Hello I am from the parent
                </div>
                <div>
                    {this.ElasticFilterList(17)}
                </div>
            </Component2>
        )
    }
}