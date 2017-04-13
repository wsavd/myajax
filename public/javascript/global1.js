$(document).ready(function () {
    console.log("global1 succes");
    $.ajax({
            url: 'http://localhost:3001/board/58ee7bf57cb76c2e6477caca/columns',
            type: 'GET',
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
                $.each(result, function(index){
                    $(".lists").append("<div class='column'><div class='title'>"+ result[index].title +"</div></div>");
                })
            },
            error: function (error) {
                console.log(error);
            }
        });
});