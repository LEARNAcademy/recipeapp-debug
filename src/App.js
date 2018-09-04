import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Recipes from './components/Recipes'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentUser: "Arthur Dent",
			recipes: [
				{
					id: 1,
					name: 'Mac & cheese'
				},
				{
					 id: 2,
					 name: 'Tofu Burger'
				},
				{
					 id: 3,
					 name: 'Chili'
				}

			]
		}
	}

	render() {
		let { currentUser, recipes } = this.state

		return (
			<div>
				<Header currentUser={currentUser} />
				<Recipes recipesList={recipes} />
			</div>
		)
	}

	editUser(newUser) {
		this.setState({currentUser: newUser})
	}
}

export default App
