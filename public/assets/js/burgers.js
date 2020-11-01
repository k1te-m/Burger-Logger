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
    })
})