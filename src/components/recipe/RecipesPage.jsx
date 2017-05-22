import React from 'react';

class RecipePage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			recipe: { title: ""}
		}

		this._onTitleChange = this._onTitleChange.bind(this);
		this._onClickSave = this._onClickSave.bind(this);
	}

	_onTitleChange(event){
		const recipe = this.state.recipe;
		recipe.title = event.target.value;
		this.setState({ recipe: recipe });
	}

	_onClickSave(){
		alert(`${this.state.recipe.title}`);
	}

	render() {
		return (
  <div>
    <h1>Recipes</h1>
    <h2>Add Recipe</h2>
    <input
      type="text"
      onChange={this._onTitleChange}
      value={this.state.recipe.title}
    />
    <input
      type="submit"
      value="Save"
      onClick={this._onClickSave} 
    />
    <p>{this.state.recipe.title}</p>
  </div>
		);
	}
}
export default RecipePage;
