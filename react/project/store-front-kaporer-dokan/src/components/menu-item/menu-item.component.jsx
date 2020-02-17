import React, { Component } from 'react'

class MenuItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			helllo: 1
		}
	}
	render() {
		return (
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>Hello</h1>
					<span className='subtitle'>Shop Now</span>
				</div>
			</div>
		)
	}
}

export default MenuItem