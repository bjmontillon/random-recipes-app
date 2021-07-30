import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import ReactDOM from 'react-dom';
import NavBar from './header/header';

import Instructions from './Instructions/instructions';
import Responsiveplayer from './responsiveplayer/reactplayer';
import Footer from './footer/footer';
import Author from './author/authorinfo';
import '../src/style.css';
import CustomForm from '../src/mailchimp/mailchimpSubscribe'


class App extends React.Component {
  constructor () {
    super ();

    this.state = {
      strMeal: null,
      isFetchingRecipe: false,
      arraylist: [],
      strThumb: null,
      strSource: null,
      strYoutube: null,
      strInstructions: null,
      strCategory: null
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
          strSource: json.meals[0].strSource,
          strYoutube: json.meals[0].strYoutube,
          strInstructions: json.meals[0].strInstructions,
          strCategory: json.meals[0].strCategory

        });
        this.trialMeal = json.meals[0][0];
        console.log(this.trialMeal);
      });
  }

  randomRecipe () {
    this.FetchingRecipe ();
  }


  
  render () {

    return (
      <div className='App'>
          
        <Container spacing={1} maxWidth='xl'>
              <Grid item justifyContent='center' xs={12}>
                <NavBar />
              </Grid>
              <Grid container xs={12}>
                <Grid item justifyContent='center' alignItems='center' direction='column' xs={12} sm={6} md={6} lg={5}>
                  <Paper style={{ width:'100%' }}>
                      <h1 className='recipeName'>
                        {this.state.isFetchingRecipe
                          ? 'Loading Recipe...'
                          : this.state.strMeal}
                      </h1>
                      <div className="image-wrapper">
                        <img className='imageThumb' src={this.state.strThumb} alt='mealThumbnail' />
                      </div>
                      <div className="recipe-details">
                      <div className="meal-catergory">
                        <h3 className="meal-category-title">{this.state.strCategory}</h3>
                      </div>
                        <a className="sourceLink" href={this.state.strSource} rel="noreferrer" target="_blank">Source Link</a>
                        <br />
                        <Button 
                        endIcon={<AutorenewIcon />} className="myButton" color="primary" variant='contained' onClick={this.randomRecipe} disabled={this.state.isFetchingRecipe}>
                        Recipe</Button>
                      </div>
                  </Paper>
                </Grid>
                <Grid item  justifyContent='center' alignItems='center' xs={12} sm={6} md={6} lg={4}>
                <div className='ingredients'>
                <h1 className='ingredients_title'>Ingredients</h1>
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
                </Grid>
                <Grid item justifyContent='center' xs={12} sm={12} md={12} lg={3}><Author /></Grid>
              </Grid>
              <Grid xs={12} sm={6}><Paper><Instructions instructionsState={this.state.strInstructions} /></Paper></Grid>
              <Grid xs={12} sm={6}><Paper><Responsiveplayer url={this.state.strYoutube} /></Paper></Grid>
              <Grid xs={12}><CustomForm /></Grid>
              <Grid xs={12}><Footer /></Grid>

        </Container>

      </div>
    );
  }
}




const rootElement = document.getElementById ('root');
ReactDOM.render (<App />, rootElement);
