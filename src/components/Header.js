import React, { Component } from 'react'

class Header extends Component {
	render() {
		let { currentUser } = this.props

		return (
			<header>
				<p>Logo</p>
				<p>Welcome {currentUser} </p>
			</header>
		)
	}
}

export default Header
