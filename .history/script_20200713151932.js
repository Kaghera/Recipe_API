//@returns {string}

function buildQueryUrl() {
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=";

    var queryParams = {"api-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae" };

    queryParams.q = $("#getRecipe")
        .val()
        .trim();
}

for (var i = 0; i < numRecipes; i++) {
    var recipe = recipeData.response.docs[i];

    var recipeCount = i + 1;

    var $recipeList = $("<ul>");
    $recipeList.addClass("list-group");

    $("#recipe-section").append($recipeList);

    var headline = recipe.headline;
    var $recipeListItem = $("<li class='list-group-item recipeHeadline'>");

    if (headline && headline.main) {
        console.log(headline.main);
        $recipeListItem.append("<span class='label label-primary'>" + recipeCount +
        "</span>" +
        headline.main
        );
    }

    var byline = recipe.byline;


}


























//var title = "";
//var summaryObj = {};
///var extendedIngredients = "";
//var instructions = "";
//var sourceURL = "";
//var image = "";

//function updatePage(recipeObj) {

	//clear()

//var numRecipes = "";

//for (var i=0; i < numRecipes; i++) {
	//title = recipeObj.items.result[i].title;
	//summary = recipeObj.items.result[i].summary;
	//extendedIngredients = recipeObj.items.result[i].extendedIngredients;
	//instructions = recipeObj.items.result[i].instructions;
	//sourceURL = recipeObj.items.result[i].sourceURL;
	//image = recipeObj.items.result[i].label

	//var displayObj = [];

	//displayObj[i] = {
		//'title': title,
		//'extendedIngredients': extendedIngredients,
		//'instructions': instructions,
		//'url': '',
		//'image': image,
	//}
	//summaryObj.push = displayObj[i];

	//var $recipeList = $("<ul>");
	//$recipeList.addClass("list-group");

	//$("#recipeSection").append($recipeList);

	//var $recipeListItem = $("<li class='list-group-item recipeHeadline'>");

	//if (title) {
		//$recipeListItem.append(
			//"<span class='label label-primary'>" +
			//"</span>" + title
		//);
	//}

	//if (summaryObj) {
		//$recipeListItem.append("<h5>Summary: " + summaryObj + "</h5>");
	//}

	//$recipeList.append($recipeListItem);
//} 

	//function clear() {
	//var title = "";
	//var summaryObj = {};
	//var extendedIngredients = "";
	//var instructions = "";
	//var sourceURL = "";
	//var image = "";
	//$("#recipeSection").empty();
//}

//function init() {
	//renderRecipes();

	//$("#getRecipe").click(function(event) {
		//event.preventDefault();
		//console.log("Search For Food!");

		//var title = $("#search-Btn").val().trim();

		//if (title === "") {
			//return;
		//}

		//var settings = {
			//"async": true,
			//"crossDomain": true,
			//"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=",
			//"method": "GET",
			//"headers": {
				//"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
				//"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae"
			//}
		//}
		
		//$.ajax(settings).done(function (response) {
			//console.log(response);
	//});