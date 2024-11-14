// Add an event listener to the input field to detect the "Enter" key press
document.getElementById("mainIngredient").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    fetchRecipeOptions();
  }
});

function fetchRecipeOptions() {
//gets main ingridient from the user
  let ingredient = document.getElementById("mainIngredient").value;

//get the list of meal ID based on the main ingredient informed by the user   
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
.then(results => results.json())
.then(data => {
  let output = document.getElementById("output");
      output.innerHTML = ''; // Clear previous results
   
    if (data.meals) {  
    data.meals.forEach(element => {
    let mealID = element.idMeal
    let recipe = document.createElement("ul")

    //get all the recipes using the main ingredient including all the recipe details
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(mealData => {
      let meal = mealData.meals[0];
      let display = document.createElement("li")

      //display the list of recipes details to the user
      display.innerHTML = `
  <h3>${meal.strMeal}</h3>
  <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
  
  <div class="info-row">
    <span class="info-title">Meal Type:</span>
    <span>${meal.strArea}</span>
  </div>
  
  <div class="info-row">
    <span class="info-title">Meal Video:</span>
    <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
  </div>

  <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
`;
      recipe.appendChild(display)
    })
    //show error in case the fetch failed
    .catch(error => console.error('Error fetching recipes:', error));

    
    output.appendChild(recipe)
   });
  } else {
    //show error message to the user if there is no recipe for the ingridient typed
    output.innerHTML = 'No recipes found for this ingredient.';
  }
})
.catch(error => console.error('Error fetching recipes:', error));
}