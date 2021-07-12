(this["webpackJsonprandom-recipe"]=this["webpackJsonprandom-recipe"]||[]).push([[0],{14:function(t,e,r){"use strict";r.r(e);var s=r(8),i=r(9),a=r(2),n=r(13),c=r(12),l=r(1),u=r.n(l),d=r(10),h=r.n(d),j=r(11),p=r.n(j),o=(r(30),r(0)),m=function(t){Object(n.a)(r,t);var e=Object(c.a)(r);function r(){var t;return Object(s.a)(this,r),(t=e.call(this)).state={strMeal:null,isFetchingRecipe:!1,arraylist:[],strThumb:null,strSource:null,strYoutube:null},t.randomRecipe=t.randomRecipe.bind(Object(a.a)(t)),t}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.FetchingRecipe()}},{key:"FetchingRecipe",value:function(){var t=this;this.setState({isFetchingRecipe:!0}),fetch("https://www.themealdb.com/api/json/v1/1/random.php",{method:"GET",headers:{Accept:"application/json"}}).then((function(t){return t.json()})).then((function(e){t.setState({strMeal:e.meals[0].strMeal,isFetchingRecipe:!1,arraylist:e.meals,strThumb:e.meals[0].strMealThumb,strSource:e.meals[0].strSource,strYoutube:e.meals[0].strYoutube}),t.trialMeal=e.meals[0],console.log(t.trialMeal)}))}},{key:"randomRecipe",value:function(){this.FetchingRecipe()}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsxs)("div",{className:"section1",children:[Object(o.jsx)("h1",{children:this.state.isFetchingRecipe?"Loading Recipe...":this.state.strMeal}),Object(o.jsx)("img",{src:this.state.strThumb,alt:"mealThumbnail",width:"200",height:"200"}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{className:"sourceLink",href:this.state.strSource,target:"_blank",children:"Source Link"}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{className:"myButton",onClick:this.randomRecipe,disabled:this.state.isFetchingRecipe,children:"Generate Recipe"})]}),Object(o.jsx)("div",{className:"section2",children:Object(o.jsxs)("div",{className:"ingredients",children:[Object(o.jsx)("h1",{className:"hero_title",children:"Ingredients"}),Object(o.jsxs)("div",{className:"ingredientsList",children:[this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient1},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient2},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient3},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient4},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient5},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient6},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient7},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient8},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient9},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient10},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient11},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient12},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient13},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient14},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient15},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient16},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient17},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient18},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient19},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strIngredient20},t.idMeal)}))]}),Object(o.jsxs)("div",{className:"measurementsList",children:[this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure1},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure2},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure3},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure4},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure5},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure6},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure7},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure8},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure9},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure10},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure11},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure12},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure13},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure14},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure15},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure16},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure17},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure18},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure19},t.idMeal)})),this.state.arraylist.map((function(t){return Object(o.jsx)("p",{children:t.strMeasure20},t.idMeal)}))]})]})})]}),Object(o.jsx)(p.a,{url:this.state.strYoutube})]})}}]),r}(u.a.Component),b=document.getElementById("root");h.a.render(Object(o.jsx)(m,{}),b)},30:function(t,e,r){}},[[14,1,2]]]);
//# sourceMappingURL=main.4bce8af9.chunk.js.map