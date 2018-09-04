import React, { Component } from 'react'

class Recipes extends Component {
	render() {
		let { recipesList } = this.props
		console.log(this.props)

		let content

		// protect against an empty recipes list
		if(recipesList.length === 0 || recipesList === "undefined") {
			content = "No recipes found"
		} else {
			content = recipesList.map(recipe => {
				return (
					<li key={recipe.id}>
						<h3>{recipe.name}</h3>
					</li>
				)
			})
		}

		return (
			<ul>
				{content}
			</ul>
		)
	}
}

export default Recipes
