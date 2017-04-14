$(document).ready(function () {
    //выводим колонки доски
    //id доски до запроса
    $.ajax({
            url: 'http://localhost:3001/board/58ee7bf57cb76c2e6477caca/columns',
            type: 'GET',
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
    //выводим 
    $.ajax({
            url: 'http://localhost:3001/column/58ef287a0ea7ee2e40aec2bf/cards',
            type: 'GET',
            contentType: 'application/json',
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