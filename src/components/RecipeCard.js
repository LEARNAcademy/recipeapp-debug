import React, { Component } from 'react'

class RecipeCard extends Component {
	render() {
		return (
			<a href={"/recipes/" + this.props.recipe.id} >
				<li key={recipe.id}>
					<h3>{this.props.recipe.name}</h3>
				</li>
			</a>
		)
	}
}

export default RecipeCard
