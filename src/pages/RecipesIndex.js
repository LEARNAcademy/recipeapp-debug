import React, { Component } from 'react'

import RecipeCard from '../components/RecipeCard'
import recipes from '../store.js'

class RecipesIndex extends Component {

	render() {

		let content

		// protect against an empty recipes list
		if(recipes.length === 0 || recipes === "undefined") {
			content = "No recipes found"
		} else {
			recipes.map(recipe => {
				return (<RecipeCard recipe={recipe} />)
			})
		}

		return (
			<div>
				<h2>All Recipes</h2>
				<ul>
					{content}
				</ul>
			</div>
		)
	}
}

export default RecipesCard
