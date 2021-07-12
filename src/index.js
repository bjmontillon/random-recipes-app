import React from 'react';
import ReactDOM from 'react-dom';

import '../src/style.css';

class App extends React.Component {
  constructor () {
    super ();

    this.state = {
      strMeal: null,
      isFetchingRecipe: false,
      arraylist: [],
      strThumb: null,
      strSource: null
    };
    this.randomRecipe = this.randomRecipe.bind (this);
  }

  componentDidMount () {
    this.FetchingRecipe ();
  }

  FetchingRecipe () {
    this.setState ({isFetchingRecipe: true});
    fetch ('https://www.themealdb.com/api/json/v1/1/random.php', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then (response => response.json ())
      .then (json => {
        this.setState ({
          strMeal: json.meals[0].strMeal,
          isFetchingRecipe: false,
          arraylist: json.meals,
          strThumb: json.meals[0].strMealThumb,
          strSource: json.meals[0].strSource
        });
        this.trialMeal = json.meals[0];
        console.log(this.trialMeal);
      });
  }

  randomRecipe () {
    this.FetchingRecipe ();
  }

  render () {
    return (
      <div className="App">
      <div className="wrapper">
        <div className="section1">
          <h1>
          {this.state.isFetchingRecipe
            ? 'Loading Recipe...'
            : this.state.strMeal}
          </h1>
          <img src={this.state.strThumb} alt='mealThumbnail' width="300" height="300" />
          <a className="sourceLink" href={this.state.strSource} target="_blank">{this.state.strSource}</a>
          <br />
          <button
            className="myButton"
            onClick={this.randomRecipe}
            disabled={this.state.isFetchingRecipe}>Generate Recipe
          </button>
        </div>

        <div className="section2">
          <div className='ingredients'>
            <h1 className='hero_title'>Ingredients</h1>
            <div className='ingredientsList'>
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient1}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient2}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient3}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient4}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient5}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient6}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient7}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient8}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient9}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient10}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient11}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient12}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient13}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient14}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient15}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient16}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient17}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient18}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient19}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strIngredient20}</p>))}
              </div>
            <div className='measurementsList'>
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure1}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure2}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure3}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure4}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure5}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure6}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure7}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure8}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure9}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure10}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure11}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure12}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure13}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure14}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure15}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure16}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure17}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure18}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure19}</p>))}
                {this.state.arraylist.map (item => (<p key={item.idMeal}>{item.strMeasure20}</p>))}
              </div>
          </div>
        </div>
      
      </div>
      </div>
    );
  }
}

const rootElement = document.getElementById ('root');
ReactDOM.render (<App />, rootElement);
