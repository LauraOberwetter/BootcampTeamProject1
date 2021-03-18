//VARIABLES
var ingredients = $();
var diet = $();

$(document).ready(function () {
  //prevents js from loading until the document is ready

  var ingredientsArr = [];

  $(".getStarted").on("click", function () {
    // activate enter button
    var searchResults = "search-results.html";
    location.assign(searchResults);
  });

  //AJAX function {}

  $(".goBack").on("click", function () {
    var goBack = "index.html";
    location.assign(goBack);
  });

  $(".secondRecipeBtn").on("click", function () {
    ingredientsArr.length = 0;
    let ingredient1 = $("#searchItem1").val();
    let ingredient2 = $("#searchItem2").val();
    let ingredient3 = $("#searchItem3").val();
    ingredientsArr.push(ingredient1, ingredient2, ingredient3);
    console.log(ingredientsArr);
    sendApiRequest(ingredientsArr);
  });

  async function sendApiRequest(ingredientsArr) {
    let APP_ID = "1c49a61b";
    let API_KEY = "db0145d0d0dd134bbf428353e18af69b";
    let response = await fetch(
      "https://api.edamam.com/search?q=" +
        ingredientsArr +
        "&app_id=1c49a61b&app_key=db0145d0d0dd134bbf428353e18af69b"
    );
    console.log(response);
    let data = await response.json();
    console.log(data);

    // POPULATE CARD CONTENT
    //API CALL
    // success: function (data) {
    //     for (var i = 1; i < 10; i++) {
    //         $("#cardTitle" + i).text(data[""][""]);
    //         $("#cardInfo" + i).text(data[""][""]);
    //         var cardLinkURL = ;
    //         $("#cardLink" + i).attr('href', cardLinkURL);
    //         var cardImgURL = ;
    //         $("#cardImg" + i).attr('src', cardImgURL);
    //         }
    // }
  }
});
