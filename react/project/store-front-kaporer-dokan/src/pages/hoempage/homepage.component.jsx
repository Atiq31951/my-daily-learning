import React, { Component } from 'react'
import MenuItem from '../hoempage/homepage.component'
import './homepage.styles.scss'
// import { getCategory } from '../../mock/index'

class HomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: []
		}
	}
	// componentDidMount() {
	// 	console.log('Hello from the ')
	// 	getCategory()
	// 		.then(Response => {
	// 			console.log("Hello", Response)
	// 			this.setState({
	// 				...this.state,
	// 				categories: Response
	// 			})
	// 		})
	// }
	render () {
		return(
			<div className = 'homePage' >
				<div className='directory-menu'>
					<MenuItem></MenuItem>
				</div>
			</div>
		)
	}
}

export default HomePage
