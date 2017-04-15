$(document).ready(function () {
    //считываем айдишник кликнутой доски
        var boardId;
        $.ajax({
            url: 'http://localhost:8080/boardid',
            contentType: 'application/json',
            async: false,
            
            success: function(json) {
            boardId = json[0].boardId
            }
        });
        //alert(boardId);
        var url = "http://localhost:3078/board/" + boardId + "/columns";
        $.ajax({
            url: url,
            type: 'GET',
            async:false,
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
                $.each(result, function(index){
                    $(".lists").append("<div class='column'><div class='id'>"+ result[index]._id +"</div><div class='title'>"+ result[index].title +"</div></div>");
                })
            },
            error: function (error) {
                console.log(error);
            }
        });
        $.ajax({
            url: 'http://localhost:3078/column/' + boardId + '/cards',
            type: 'GET',
            contentType: 'application/json',
            async: false,
            success: function(result) {
                console.log(result);
                $.each(result, function(index){
                    $(".column").append("<div class='text'>" + result[index].title +"<div>");
                })
            },
            error: function (error) {
                console.log(error);
            }
        });
});