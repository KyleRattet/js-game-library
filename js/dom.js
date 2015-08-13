// *** jQuery DOM Manipulation *** //


//GAME LIBRARY Arrays - for testing purposes
var videoGames = new GameLibrary("Video Games");
var boardGames = new GameLibrary("Board Games");
var drinkingGames = new GameLibrary("Drinking Games");
var libraries = [videoGames, boardGames, drinkingGames];

///helper function to show all games from that library///
function findLibrary(libraryType){

  if(libraryType === "videoGames") {
    videoGames.render();
  } else if (libraryType === "boardGames") {
    boardGames.render();
  } else {
    drinkingGames.render();
  }

}

$(document).on('ready', function() {});

//submit new game form//
$('form').not("#show-library").on('submit', function(event){

  event.preventDefault();

  // grab user inputs, then clear inputs
  var titleInput = $('#gameinput').val();
  var gameType = $('#gametypes').val();
  $(".game-input").val("");

  // new instance of game, based on user inputs
  var game = new Game(titleInput, gameType);
  game.organize(libraries);

  $("#game-library-container").html("");
  $("#new-games").append('<p> Game Created - Title: ' + game.title + ' Type: ' + game.type + '</p>');

});

//show contents of game library//
$("#show-library").on('submit', function(event){
  event.preventDefault();
  var libraryType = $('#librarytypes').val();
  $("#game-library-container").html("");
  findLibrary(libraryType);
});
