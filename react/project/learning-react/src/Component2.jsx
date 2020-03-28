/* eslint-disable default-case */
import React, { Component } from 'react';


export default class Component2 extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props)
	}
	state = {
		example1: {
			layer: 1,
			hovered: false,
			value: null
		},
		example2: {
			layer: 2,
			hovered: false,
			value: null
		}
	}

	handleOnclick = (nodeValue) => {
		console.log('onClick done')
		switch (nodeValue.layer) {
			case 1:
				console.log('Test 1 before', this.state.example1)
				this.setState({
					example1: {
						...this.state.example1,
						hovered: true,
						value: nodeValue.value
					}
				});
				console.log('Test 1 after', this.state.example1)
				break;
			case 2:
				this.setState({
					example2: {
						...this.state.example2,
						hovered: true,
						value: nodeValue.value
					}
				});
				break;
		}
	}

	render() {
		return (
			<div>
				<div onMouseDown={() => this.handleOnclick({ layer: 1, hovered: true, value: 17 })}>
					<h2>Hello this is One</h2>
				</div>
				<div onMouseDown={() => this.handleOnclick({ layer: 2, hovered: true, value: 10 })}>
					<h2>Hello this is two</h2>
				</div>
			</div>
		)
	}
}