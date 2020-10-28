function sendRequest(){
    $.ajax("/api/burgers", {
        type: "POST",
        data: {name: $(".burgerInput").val().trim() }
    }).then(function(){
        console.log(`[POST] New burger added: ${name}`);
        location.reload();
    });
}

$(document).ready(function(){
    // when the "EAT IT" btn is pressed, state is set to true and 
    $(".eatBtn").on("click", function(){
        var id = $(this).data("id");

        var newState = { eaten: 1 };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function(){
            console.log(`[GET: ${id}] State is changed to: ${newState.eaten}`);
            location.reload();
        });
    });
    
    $(document).on("click", ".addBtn", sendRequest);

    $(".burgerInput").on("keydown", function(event){
        if(event.keyCode != 13) return;
        console.log("keydown RAN");
        sendRequest();
    });
});