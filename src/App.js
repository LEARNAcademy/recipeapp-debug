import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import RecipesIndex from './pages/RecipesIndex'
import RecipeShow from './pages/RecipeShow'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentUser: "Arthur Dent"
		}
	}

	render() {
		let { currentUser, recipes } = this.state

		return (
			<div>
				<Header currentUser={currentUser} />
				<Router>
					<Switch>
						<Route path="/recipes/:id" component={RecipeShow} />
						<Route exact path="/recipes" component={RecipesIndex} />
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</div>
		)
	}

	editUser(newUser) {
		this.setState({currentUser: newUser})
	}
}

export default App
