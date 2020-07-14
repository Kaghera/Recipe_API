/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for Spoonacular API based on form inputs
 */

$(document).ready(function () {
  console.log("Lets Eat!");
});

/** * takes API data (JSON/object) and turns it into elements on the page
 * @param {object} recipeData - object containing recipe data
 */

function updatePage(recipeData) {
  var numRecipes = $("#recipe-count").val();
  console.log(recipeData);
  console.log("--------------------");

  for (var i = 0; i < numRecipes; i++) {
    // Get specific recipe info for our current index
    var recipe = recipeData.recipes[i];

    // Increase the recipeCount (track recipe # - starting at 1)
    var recipeCount = i + 1;

    var $recipeList = $("<ul>");
    $recipeList.addClass("list-group");

    $("#recipe-section").append($recipeList);

    // If the recipe has a title, log and append to $recipeList

    var title = recipe.title;
    var $recipeListItem = $("<li class='list-group-item recipeTitle'>");

    if (title) {
      console.log(title);
      $recipeListItem.append(
        "<span class='label label-primary'>" + recipeCount + "</span>" + title
      );
    }

    // If the recipe has a summary, log and append to $recipeList

    var summary = recipe.summary;

    if (summary) {
      console.log(summary);
      $recipeListItem.append("<h5>" + summary + "</h5>");
    }

    // Log section, and append to document if it exists

    var instructions = recipe.instructions;

    if (instructions) {
      $recipeListItem.append("<h5>Section: " + instructions + "</h5>");
    }

    // Log ingredients
    var extendedIngredients = recipe.extendedIngredients;

    if (extendedIngredients) {
      $recipeListItem.append("<h5>" + recipe.extendedIngredients + "</h5>");
    }

    // Append and log URL
    $recipeListItem.append(
      "<a href='" + recipe.sourceURL + "'>" + recipe.sourceURL + "</a>"
    );
  }
}

// Function to empty out the articles
function clear() {
  $("#recipe-section").empty();
}
// Click Handlers
// ============================================

// .on("click") function associated with the Search Button
$("#run-search").on("click", function (event) {
  // This line allows  us to take advantage of the html submit
  // Can hit enter on the keyboard and it initiates search
  // Prevents page from reloading on form submit
  event.preventDefault();

  clear();
  var ingredient = $("#main-ingredient").val().trim();
  //If user provides a second ingredient
  var ingredient1 = $("#ingredient-2").val().trim();

  // If a user provides a third ingredient
  var ingredient2 = $("#ingredient-3").val().trim();

  // If a user provides a fourth ingredient
  var ingredient3 = $("#ingredient-4").val().trim();

  var tag =
    ingredient + "," + ingredient1 + "," + ingredient2 + "," + ingredient3;

  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=" +
      tag,
    method: "GET",
    headers: {
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});

$("#clear-all").on("click", clear);
