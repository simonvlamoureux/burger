$(document).ready(function() {
    
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger_id = 
    
    $(this).children(".burger_id").val();
    console.log(burger_id);
    
    },


    $.ajax("/api/burgers", {
      method: "PUT",
      url: "/burgers/" + burger_id

    }).then(function(data) {
        console.log("Added new burger");
      
        location.reload();
    }

});