Recipe Finder

Recipe Finder is an interactive webpage that allows users to search for recipes based on a main ingredient. By entering an ingredient (e.g., "chicken") and clicking the "Get Recipe Options" button, users can retrieve a list of recipes with detailed information, images, and video links. This project utilizes the TheMealDB API to fetch recipe data.

Features
•	Search by Main Ingredient: Users can enter a primary ingredient to search for relevant recipes.
•	Recipe Display: Each recipe displays:
o	Recipe name
o	Image of the meal
o	Type of cuisine
o	Instructions for preparation
o	Link to a video tutorial for the recipe
•	Dynamic Content Update: Results update dynamically on the webpage.

Project Structure
•	HTML (index.html): Provides the layout and structure of the webpage.
•	CSS (style.css): (If provided) Styles the webpage for a user-friendly experience.
•	JavaScript (script.js): Contains the main logic for fetching and displaying recipes from TheMealDB API.

How to Use
1.	Open index.html in a web browser.
2.	Enter a main ingredient in the input field (e.g., "chicken").
3.	Click "Get Recipe Options" to retrieve recipes.
4.	The results will display below with detailed information.

Code Overview

HTML (index.html)
•	The HTML file sets up the page structure, including:
    - Title and Heading to introduce the webpage.
    - An input field for users to enter their main ingredient.
    - A button to trigger the recipe search.
    - An output section where recipes are displayed.

JavaScript (script.js)
•	The function fetchRecipeOptions() fetches data from TheMealDB API using the entered ingredient.
    - API Request: It first calls the filter.php endpoint to get a list of meals based on the main ingredient.
    - Meal Details: For each meal, it makes an additional API call to the lookup.php endpoint to retrieve full recipe details.
    - DOM Manipulation: It creates HTML elements to display each recipe’s details, including the name, image, cuisine type, instructions, and a video link.
    - Error Handling: If an error occurs or no recipes are found, an appropriate message is displayed.

Technologies Used
•	HTML5: For basic webpage structure.
•	CSS3: For styling and layout.
•	JavaScript (ES6): For API calls and DOM manipulation.
•	TheMealDB API: To retrieve recipe information.

Dependencies
This project relies on an external API:
•	TheMealDB API: Used to retrieve recipes and meal details.
