$(function() {
    $(".create-burger").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            name: $("#burger").val().trim(),
        };

        $.post("/api/burgers", newBurger, function() {
            console.log("Created new burger.");
            location.reload();
        })
    });
    $(".devour-it").on("click", function(event) {
        let id = $(this).data("id");
        let newState = {
            devoured: true
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function(){
            console.log("DEVOURED!")
            location.reload();
        })

        

       

        
    })
})